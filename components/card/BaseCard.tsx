import Image from "next/image";
import React, { MutableRefObject, useRef, useState } from "react";
import BaseButton from "../buttons/BaseButton";
import no_image from "../../public/assets/images/no_image.jpg";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  addToCart,
  AllCartsInfoAtom,
  CartItemsAtom,
  CouninueAsGuestModalAtom,
  deleteCart,
  FetchedItemsType,
  getCartItems,
  TokenAtom,
  updateCart,
} from "../../helper";
import { BlusIcon, MinusIcon } from "../icons";
import { Spinner } from "../spinner";

interface Props {
  img?: string;
  name?: string;
  description?: string;
  price?: number;
  id?: number;
  variationId?: number;
  width:string
  smallWidth?:string

}

const BaseCard = ({
  img,
  name,
  description,
  price,
  id,
  variationId,
  width,
  smallWidth
}: Props) => {
  const [cartItems, setCartItems] = useRecoilState(CartItemsAtom);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef() as MutableRefObject<NodeJS.Timeout>;
  const [ContinueAsGuestModal, setContinueAsGuestModal] = useRecoilState(
    CouninueAsGuestModalAtom
  );
  const [allCartsInfo,setAllCartsInfo]=useRecoilState(AllCartsInfoAtom)

  const { push } = useRouter();

  const handelMoveToDetails = async (id: number) => {
    push({
      pathname: "/details",
      query: { product: encodeURI(`${id}`) },
    });
  };

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
        if(res===null){
          alert("some thing went wrong")
        }
        const response = await getCartItems(token);
        setAllCartsInfo(response.result)
        if(response===null){
          alert("some thing went wrong")
        }else{
          setCartItems(response.result.items);
        }
        if (res) {
          setLoading(false);
        }
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
          if(res===null){
            alert("some thing went wrong")
          }
          const response = await getCartItems(token);
        setAllCartsInfo(response.result)
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
          if(res===null){
            alert("some thing went wrong")
          }
          const response = await getCartItems(token);
          setAllCartsInfo(response.result)
        }
      }, 1000);
    } else if (itemQuantity === 1) {
      if (id) {
        const res = await deleteCart(token, id);
        const response = await getCartItems(token);
        setAllCartsInfo(response.result)
        if(res===null){
          alert("some thing went wrong")
        }
      }
    }
  };

  const EditCArt = (id: number) => {
    let indexcart = cartItems.findIndex(
      (item) => item.variation && item.variation.id === id
      // &&item.modifierGroup?.find(modifier => modifier===modifiersId)!==undefined
    );
    return (
      <div  className=" space-x-2 flex items-center justify-between px-2 ">
        <BaseButton
          //@ts-ignore
          onClick={() => handleRemoveFromCart(cartItems[indexcart].id)}
          className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
        >
          <MinusIcon className="w-3 fill-black ml-1" />
        </BaseButton>
        <span className="block w-[40px] text-center">
          {" "}
          {cartItems[indexcart].quantity}
        </span>
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
          <BlusIcon className="w-3 fill-black ml-1" />
        </BaseButton>
      </div>
    );
  };

  return (
    <div  className={`sm:w-[${smallWidth ? smallWidth:"100%"}] lg:w-[${width}] h-fit  border  mt-2`}>
      <div className="   ">
        <div>
          <div className="m-auto w-fit py-2 product-slider-img h-[190px] pt-8  bg-contain">
            {img ? (
              <img src={img} className="bg-cover w-40 h-32 " alt="" />
            ) : (
              <Image width={110} height={121} src={no_image} />
            )}
          </div>
          <div className="mx-2">
            <span className="block font-bold line-clamp sm:w-[150px] lg:w-[210px]">
              {name ? name : "LubriMatic"}
            </span>
            <span className="block font-medium line-clamp">
              {description ? description : "White Lithium Grease"}{" "}
            </span>
            <span className="text-gray-1050 text-lg font-semibold">
              $ {price ? price : "50.00"}
            </span>
          </div>
          <div className="flex w-full  justify-around bg-[#F3F3F3] border  py-2">
            {!loading ? (
              <div>
                {cartItems.length === 0 ? (
                  <BaseButton
                    onClick={() => token.length>1 ? handleAddToCart() : setContinueAsGuestModal(true)}
                    className="px-3 whitespace-nowrap py-1 text-xs bg-blue-950 rounded-full font-semibold text-white "
                    title="ADD TO CART"
                  />
                ) : variationId && handelCart(variationId) ? (
                  EditCArt(variationId)
                ) : (
                  <BaseButton
                  onClick={() => token.length>1 ? handleAddToCart() : setContinueAsGuestModal(true)}
                    className="px-3 whitespace-nowrap py-1 text-xs bg-blue-950 rounded-full font-semibold text-white "
                    title="ADD TO CART"
                  />
                )}
              </div>
            ) : (
              <div className="w-[104.28]">
                <Spinner className="w-7" />
              </div>
            )}
            <BaseButton
              onClick={() => id && handelMoveToDetails(id)}
              className="px-3 py-1 text-xs font-semibold bg-gray-1200 text-white rounded-full "
              title="VIEW"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
