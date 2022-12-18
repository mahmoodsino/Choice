import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AllCartsInfoAtom,
  CartItemsAtom,
  ErorrMessageAtom,
  handelCrateOrder,
  OpenMessageModalAtom,
  ShippingAddressIdAtom,
  TokenAtom,
} from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { Spinner } from "../../../spinner";
import { CartLoading } from "./CartItemTable";
import SelectAddAddress from "./SelectAddAddress";
import SelectDelivaryType, { selctedMethodAtom } from "./SelectDelivaryType";

const CartSummary = () => {
  const allCartsInfo = useRecoilValue(AllCartsInfoAtom);
  const cartItems = useRecoilValue(CartItemsAtom);
  const [loading, setLoading] = useRecoilState(CartLoading);
  const selectedMethod = useRecoilValue(selctedMethodAtom);
  const shippingAddressId = useRecoilValue(ShippingAddressIdAtom);
  const setOpenMassegModal = useSetRecoilState(OpenMessageModalAtom);
  const setErorrMessage = useSetRecoilState(ErorrMessageAtom);
  const [savedOrderId, setSavedOrderId] = useState<number>();
  const token = useRecoilValue(TokenAtom);

  const checkQuantity = () => {
    let isFound = true;
    for (const item of cartItems) {
      //@ts-ignore
      if (item?.in_stock < 1) {
        return (isFound = false);
      } else if (
        item.in_stock === 1 &&
        (item.product?.tracking_type === 2 || item.product?.tracking_type === 3)
      ) {
        if (item.available_quantity) {
          if (item.available_quantity >= item.quantity) {
            return (isFound = true);
          } else if (item.available_quantity < item.quantity) {
            isFound = false;
          }
        }
      }
    }
    return isFound;
  };

  let userType: string | null = "";

  if (typeof window !== "undefined") {
    userType = localStorage.getItem("type" || "");
  }

  const createOrder = async () => {
    if (selectedMethod === "PICKUP") {
      setLoading(true);
      const res = await handelCrateOrder({
        shipping_method: selectedMethod,
        token: token,
      });
      if (res === null) {
        setErorrMessage("some thing went wrong");
        setOpenMassegModal(true);
        setLoading(false);
      } else {
        setSavedOrderId(res.result.saved_order_id);
        push({
          pathname: "/checkout",
          query: { savedOrder: encodeURI(res.result.saved_order_id) },
        });
        setLoading(false);
      }
    } else {
      setLoading(true);
      const res = await handelCrateOrder({
        shipping_method: selectedMethod,
        token: token,
        address_id: shippingAddressId,
      });
      if (res === null) {
        setErorrMessage("some thing went wrong");
        setOpenMassegModal(true);
        setLoading(false);
      } else {
        setSavedOrderId(res.result.saved_order_id);
        push({
          pathname: "/checkout",
          query: { savedOrder: encodeURI(res.result.saved_order_id) },
        });
        setLoading(false);
      }
    }
  };

  const { push } = useRouter();

  return (
    <div
      className={`lg:w-[29%] whitespace-nowrap ${
        loading && "pointer-events-none"
      }`}
    >
      <span className="text-[22px] py-2 font-bold border-t border-b block text-gray-1400">
        Cart Summary
      </span>
      <div className="mt-5 space-y-3 px-2">
        <div className="flex justify-between">
          <span className="text-gray-950 font-semibold">Subtotal:</span>
          <span className="text-[#999999]">
            ${allCartsInfo.sub_total_price}
          </span>
        </div>
        <div className="flex text-gray-950 flex-row justify-between text-sm md:tracking-[0.03em] z-50">
          <div>
            <span className="font-semibold">Order type </span>
            {selectedMethod === "PICKUP" && <span>(free)</span>}
          </div>
          <SelectDelivaryType />
        </div>
        {selectedMethod === "DELIVERY" && (
          <div className="flex flex-row justify-between text-gray-950">
            <span className="font-semibold ">delivery fee</span>
            <span className="">${allCartsInfo.delivery_fee}</span>
          </div>
        )}
        {selectedMethod !== "PICKUP" && (
          <div className="flex flex-row justify-between text-sm md:tracking-[0.03em] text-gray-950">
            <div>
              <span className="font-semibold">Address</span>
            </div>
            <SelectAddAddress />
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-gray-950 font-semibold">Grand Total:</span>
          <span className="text-[#999999]">${allCartsInfo.total_price}</span>
        </div>
      </div>
      <div className="px-2 text-white flex justify-between mt-5">
        <Link href="/products">
          <a className="px-4 py-1 bg-gray-1200 rounded-full ">Keep Shopping</a>
        </Link>
        <div className="">
          {!loading ? (
            <div>
              {selectedMethod === "DELIVERY" &&
              shippingAddressId === -1 ? null : (
                <BaseButton
                  onClick={() =>
                    userType === "user"
                      ? createOrder()
                      : push("/continuetocheckout")
                  }
                  disabled={checkQuantity() ? false : true}
                  title="checkout"
                  className="px-4 py-1 bg-blue-950 rounded-full disabled:bg-gray-500 disabled:cursor-not-allowed"
                />
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <Spinner className=" w-7" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
