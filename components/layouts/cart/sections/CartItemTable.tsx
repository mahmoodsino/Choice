import React, { MutableRefObject, useRef } from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  AllCartsInfoAtom,
  CartItemsAtom,
  deleteCart,
  ErorrMessageAtom,
  FetchedItemsType,
  OpenMessageModalAtom,
  TokenAtom,
  updateCart,
} from "../../../../helper";
import BaseButton from "../../../buttons/BaseButton";
import { BlusIcon, MinusIcon, TrashIcon } from "../../../icons";
import CartItemsResponse from "./CartItemsResponse";

export const CartLoading = atom({
  key: "CartLoading",
  default: false,
});

const CartItemTable = () => {
  const [cartItems, setCartItems] = useRecoilState(CartItemsAtom);
  const timerRef = useRef() as MutableRefObject<NodeJS.Timeout>;
  const token = useRecoilValue(TokenAtom);
  const setAllCartsInfo = useSetRecoilState(AllCartsInfoAtom);
  const setOpenMassegModal = useSetRecoilState(OpenMessageModalAtom);
  const setErorrMessage = useSetRecoilState(ErorrMessageAtom);
  const [loading, setLoading] = useRecoilState(CartLoading);

  const handleAddToCart = async (clickedItem: FetchedItemsType) => {
    setCartItems((prev) => {
      const isItemInCarts = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCarts) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                //@ts-ignore
                actual_quantity: item.actual_quantity + 1,
              }
            : item
        );
      }
      return [
        ...prev,
        {
          ...clickedItem,
          type: 1,
          quantity: 1,
          product_id: clickedItem.product_id,
          branch_id: 1,
          description: "",
          modifierGroups: [],
          variation_id: clickedItem.variation_id,
        },
      ];
    });
    const isItemInCarts = cartItems.findIndex(
      (item) => item.id === clickedItem.id
    );
    if (isItemInCarts >= 0) {
      let newQuantity = cartItems[isItemInCarts].quantity;
      newQuantity++;
      let id = cartItems[isItemInCarts].id;

      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(async () => {
        setLoading(true);
        if (id) {
          const res = await updateCart(token, id, newQuantity);
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
        }
        setLoading(false);
      }, 700);
    }
  };

  const handleRemoveFromCart = async (id: number, reomve?: string) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          if (reomve) return ack;
          if (
            item.available_quantity &&
            //@ts-ignore
            item.actual_quantity > item.available_quantity
          )
            return [
              ...ack,
              {
                ...item,
                quantity: item.available_quantity,
                actual_quantity: item.available_quantity,
              },
            ];
          return [
            ...ack,
            {
              ...item,
              quantity: item.quantity - 1,
              //@ts-ignore
              actual_quantity: item.actual_quantity - 1,
            },
          ];
        } else {
          return [...ack, item];
        }
      }, [] as FetchedItemsType[])
    );

    const isItemInCarts = cartItems.findIndex((item) => item.id === id);
    let itemQuantity = cartItems[isItemInCarts].quantity;
    let availableQuantity = cartItems[isItemInCarts].available_quantity;

    if (availableQuantity && itemQuantity > availableQuantity) {
      itemQuantity = availableQuantity;
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(async () => {
        setLoading(true);
        const res = await updateCart(token, id, itemQuantity);
        if (res === null) {
          setErorrMessage("some thing went wrong");
          setOpenMassegModal(true);
        } else {
          setAllCartsInfo(res.result);
          setCartItems(res.result.items);
        }
        setLoading(false);
      }, 1000);
    }
    if (itemQuantity > 1 && !reomve) {
      itemQuantity--;
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(async () => {
        setLoading(true);
        const res = await updateCart(token, id, itemQuantity);
        if (res === null) {
          setErorrMessage("some thing went wrong");
          setOpenMassegModal(true);
        } else {
          setAllCartsInfo(res.result);
          setCartItems(res.result.items);
        }
        setLoading(false);
      }, 700);
    } else if (itemQuantity === 1 || reomve) {
      clearTimeout(timerRef.current);
      setLoading(true);
      const res = await deleteCart(token, id);
      if (res === null) {
        setErorrMessage("some thing went wrong");
        setOpenMassegModal(true);
      } else {
        setAllCartsInfo(res.result);
        setCartItems(res.result.items);
      }
      setLoading(false);
    }
  };

  return (
    <div className={`${loading && "pointer-events-none"}`}>
      <div className=" py-10 lg:block sm:hidden">
        <table className="w-full">
          <thead className="">
            <tr className="border-b text-left text-xl font-semibold  ">
              <th className=" p-2 pb-5">PRODUCT DETAILS</th>
              <th className=" p-2 pb-5 w-auto">PRICE</th>
              <th className=" p-2 pb-5 w-auto">QUANTITY</th>
              <th className=" p-2 pb-5 w-auto">TOTAL PRICE</th>
            </tr>
          </thead>
          <tbody className="">
            {cartItems.map((item) => {
              return (
                <tr
                  key={item.id}
                  className={`border-b text-left  ${
                    //@ts-ignore
                    item.in_stock < 1
                      ? "bg-red-100"
                      : item.in_stock === 1 &&
                        item.product?.tracking_type === 1 &&
                        "bg-white"
                  } ${
                    item.in_stock === 1 &&
                    item.product?.tracking_type === 2 &&
                    //@ts-ignore
                    item.actual_quantity > item.available_quantity
                      ? "bg-red-100"
                      : "bg-white"
                  }   ${
                    item.in_stock === 1 &&
                    item.product?.tracking_type === 3 &&
                    //@ts-ignore
                    item.actual_quantity > item.available_quantity
                      ? "bg-red-100"
                      : "bg-white"
                  }`}
                >
                  <td className=" p-2 w-[25%] ">
                    <div className="flex flex-row items-center space-x-5 ">
                      <BaseButton
                        onClick={() =>
                          item.id && handleRemoveFromCart(item.id, "remove")
                        }
                        className="w-6 h-6 bg-red-950/10 rounded-full"
                      >
                        <TrashIcon className="w-5 fill-red-950 m-auto mt-0.5" />
                      </BaseButton>
                      <div className=" border product-slider-img">
                        <img
                          className="w-20 h-20"
                          src={
                            item.product?.image?.path
                              ? item.product?.image?.path
                              : "/alternative.png"
                          }
                        />
                      </div>
                      <div>
                        {item.variation?.attributes.map((att) => {
                          return (
                            <span key={att.id} className="block text-sm">
                              {att?.attribute_values?.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </td>
                  <td className="p-2  text-lg w-[25%]">
                    <span>${item.variation && item.variation.price}</span>
                  </td>
                  <td className="p-2 w-[25%] ">
                    <div>
                      <div className="border w-[150px] flex  items-center space-x-8 px-2 py-1">
                        <BaseButton
                          onClick={() =>
                            item.id && handleRemoveFromCart(item.id)
                          }
                          className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                        >
                          <MinusIcon className="w-3 fill-black ml-1 mr-1" />
                        </BaseButton>
                        <span className="block w-[80px] text-center">
                          {item.quantity}
                        </span>
                        {item.in_stock === 1 &&
                          item.product?.tracking_type === 1 && (
                            <BaseButton
                              onClick={() => handleAddToCart(item)}
                              className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                            >
                              <BlusIcon className="w-3 fill-black  ml-1 mr-1" />
                            </BaseButton>
                          )}
                        {item.in_stock === 1 &&
                          (item.product?.tracking_type === 2 ||
                            item.product?.tracking_type === 3) && (
                            <BaseButton
                              onClick={() => handleAddToCart(item)}
                              className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                              disabled={
                                item.actual_quantity === item.available_quantity
                                  ? true
                                  : false
                              }
                            >
                              <BlusIcon className="w-3 fill-black  ml-1 mr-1" />
                            </BaseButton>
                          )}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 w-[25%]">
                    <span>${item.variation?.price}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <CartItemsResponse
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default CartItemTable;
