import React, { MutableRefObject, useRef, useState } from "react";
import BaseButton from "../buttons/BaseButton";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  addToCart,
  AllCartsInfoAtom,
  CartItemsAtom,
  CouninueAsGuestModalAtom,
  deleteCart,
  ErorrMessageAtom,
  FetchedItemsType,
  imagesType,
  OpenMessageModalAtom,
  TokenAtom,
  updateCart,
} from "../../helper";
import { BlusIcon, MinusIcon } from "../icons";
import { Spinner } from "../spinner";
import Link from "next/link";

interface Props {
  img?: imagesType[];
  name?: string;
  description?: string;
  price?: number;
  id?: number;
  variationId?: number;
  width?: string;
  smallWidth?: string;
  available_quantity?: number;
  inStock: number;
  tracking_type: number;
}

const BaseCard = ({
  img,
  name,
  description,
  price,
  id,
  variationId,
  width,
  smallWidth,
  available_quantity,
  inStock,
  tracking_type,
}: Props) => {
  const [cartItems, setCartItems] = useRecoilState(CartItemsAtom);
  const token = useRecoilValue(TokenAtom);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef() as MutableRefObject<NodeJS.Timeout>;
  const setContinueAsGuestModal = useSetRecoilState(CouninueAsGuestModalAtom);
  const setAllCartsInfo = useSetRecoilState(AllCartsInfoAtom);
  const setOpenMassegModal = useSetRecoilState(OpenMessageModalAtom);
  const setErorrMessage = useSetRecoilState(ErorrMessageAtom);

  const handelCart = (id: number) => {
    let isFound = false;
    for (let item of cartItems) {
      if (cartItems.length === 0) return isFound;
      else if (item.variation?.id === id) {
        return (isFound = true);
      }
    }
    return isFound;
  };

  const handleAddToCart = async () => {
    if (id && variationId) {
      setCartItems((prev) => {
        const isItemInCarts = prev.find(
          (item) => item.product_id === id && item.variation_id === variationId
        );
        if (isItemInCarts) {
          return prev.map((item) =>
            item.product_id === id && item.variation_id === variationId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [
          ...prev,
          {
            type: 1,
            quantity: 1,
            product_id: id,
            branch_id: 1,
            variation_id: variationId,
          },
        ];
      });
    }
    const isItemInCarts = cartItems.findIndex(
      (item) => item.product_id === id && item.variation_id === variationId
    );
    if (isItemInCarts < 0) {
      setLoading(true);
      if (id && variationId) {
        const res = await addToCart(token, 1, id, variationId, 1, 1, 1);
        if (res === null) {
          setErorrMessage("some thing went wrong");
          setOpenMassegModal(true);
        } else if (res == 400) {
          setErorrMessage("this product is not available now !");
          setOpenMassegModal(true);
        } else {
          setCartItems(res.result.items);
          setAllCartsInfo(res.result);
        }
        setLoading(false);
      }
    }
    if (isItemInCarts >= 0) {
      let newQuantity = cartItems[isItemInCarts].quantity;

      newQuantity++;

      let id = cartItems[isItemInCarts].id;
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(async () => {
        if (id) {
          const res = await updateCart(token, id, newQuantity);
          if (res === null) {
            setErorrMessage("some thing went wrong");
            setOpenMassegModal(true);
          } else if (res == 400) {
            setErorrMessage("there is no avaliable quantity !");
            setOpenMassegModal(true);
          } else {
            setCartItems(res.result.items);
            setAllCartsInfo(res.result);
          }
        }
      }, 1000);
    }
  };

  const handleRemoveFromCart = async (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as FetchedItemsType[])
    );

    const isItemInCarts = cartItems.findIndex((item) => item.id === id);
    let itemQuantity = cartItems[isItemInCarts].quantity;

    if (itemQuantity > 1) {
      itemQuantity--;
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(async () => {
        if (id) {
          const res = await updateCart(token, id, itemQuantity);
          if (res == null) {
            setErorrMessage("some thing went wrong");
            setOpenMassegModal(true);
          } else if (res === 400) {
            setErorrMessage("some thing went wrong");
            setOpenMassegModal(true);
          } else {
            setCartItems(res.result.items);
            setAllCartsInfo(res.result);
          }
        }
      }, 1000);
    } else if (itemQuantity === 1) {
      clearTimeout(timerRef.current);
      if (id) {
        const res = await deleteCart(token, id);
        if (res === null) {
          setErorrMessage("some thing went wrong");
          setOpenMassegModal(true);
        } else {
          setCartItems(res.result.items);
          setAllCartsInfo(res.result);
        }
      }
    }
  };

  const EditCArt = (id: number) => {
    let indexcart = cartItems.findIndex(
      (item) => item.variation && item.variation.id === id
    );

    return (
      <div className=" space-x-2 flex w-[104.28px] items-center justify-between px-2 ">
        <BaseButton
          //@ts-ignore
          onClick={() => handleRemoveFromCart(cartItems[indexcart].id)}
          className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
        >
          <MinusIcon className="w-3 fill-black ml-1 mr-1" />
        </BaseButton>
        <span className="block w-[40px] text-center">
          {cartItems[indexcart].quantity}
        </span>
        {tracking_type === 1 && (
          <BaseButton
            onClick={() => handleAddToCart()}
            className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
          >
            <BlusIcon className="w-3 fill-black  ml-1 mr-1" />
          </BaseButton>
        )}
        {tracking_type != 1 && (
          <BaseButton
            onClick={() => handleAddToCart()}
            className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
            disabled={
              cartItems[indexcart].quantity ===
              cartItems[indexcart].available_quantity
                ? true
                : false
            }
          >
            <BlusIcon className="w-3 fill-black  ml-1 mr-1" />
          </BaseButton>
        )}
      </div>
    );
  };

  const canAddToCart = () => {
    let canAdd = true;
    if (inStock < 1) {
      canAdd = false;
    } else if (inStock === 1) {
      if (tracking_type === 1) {
        canAdd = true;
      } else if (tracking_type == 2 || tracking_type == 3) {
        if (available_quantity === 0) {
          canAdd = false;
        } else {
          canAdd = true;
        }
      }
    }
    return canAdd;
  };

  return (
    <div
      className={`sm:w-[${
        smallWidth ? smallWidth : "100%"
      }] lg:w-[${width}] h-fit  border  mt-2 ml-1 hover:border-blue-950/50 hover:shadow-lg transition-all duration-300`}
    >
      <div className="   ">
        <div>
          <div className="">
            <div className="m-auto w-fit py-2 product-slider-img h-[190px] pt-8  bg-contain">
              {img?.length !== 0 ? (
                img?.map((item, i) => {
                  if (item.is_default) {
                    return (
                      <div key={i}>
                        <img
                          src={item.path}
                          className="bg-cover w-40 h-32 "
                          alt=""
                        />
                      </div>
                    );
                  }
                })
              ) : (
                <img className="w-40 h-32" src="/alternative.png" />
              )}
            </div>
            <div className="mx-2">
              <Link href={`/details?product=${id}`}>
                <a>
                  <span
                    title={name}
                    className="block font-bold line-clamp sm:w-[120px] md:w-[199px] lg:w-[155px]"
                  >
                    {name}
                  </span>
                </a>
              </Link>
              <span
                title={description}
                className="block font-medium line-clamp sm:w-[120px] md:w-[199px] lg:w-[155px]"
              >
                {description ? description : "White Lithium Grease"}
              </span>
              <span className="text-gray-1050 text-lg font-semibold">
                $ {price}
              </span>
            </div>
          </div>
          <div className="flex md:flex-row sm:flex-col items-center sm:py-1 sm:space-y-1 md:space-y-0  w-full md:h-[43px]  justify-between px-2 bg-[#F3F3F3] border  py-2">
            {!loading ? (
              <div>
                {cartItems.length === 0 ? (
                  <BaseButton
                    disabled={canAddToCart() ? false : true}
                    onClick={() =>
                      token.length > 1
                        ? handleAddToCart()
                        : setContinueAsGuestModal(true)
                    }
                    className="px-3 whitespace-nowrap py-1 text-xs bg-blue-950 rounded-full font-semibold text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
                    title="ADD TO CART"
                  />
                ) : variationId && handelCart(variationId) ? (
                  EditCArt(variationId)
                ) : (
                  <BaseButton
                    disabled={canAddToCart() ? false : true}
                    onClick={() =>
                      token.length > 1
                        ? handleAddToCart()
                        : setContinueAsGuestModal(true)
                    }
                    className="px-3 whitespace-nowrap py-1 text-xs bg-blue-950 rounded-full font-semibold text-white disabled:bg-blue-950/50 disabled:cursor-not-allowed"
                    title="ADD TO CART"
                  />
                )}
              </div>
            ) : (
              <div className="w-[104.28px]">
                <Spinner className="w-[26px]" />
              </div>
            )}
            <Link href={`/details?product=${id}`}>
              <a className="px-3 py-1 text-xs font-semibold bg-gray-1200 text-white rounded-full sm:hidden md:block ">
                VIEW
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
