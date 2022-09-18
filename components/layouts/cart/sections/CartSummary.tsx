import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { AllCartsInfoAtom, CartItemsAtom } from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { CheckoutIcon } from "../../../icons";

const CartSummary = () => {
  const [allCartsInfo, setAllCartsInfo] = useRecoilState(AllCartsInfoAtom);
  const [cartItems, setCartItems] = useRecoilState(CartItemsAtom);

  const checkQuantity = () => {
    let isFound = true;
    for (const item of cartItems) {
      if (item.available_quantity) {
         if (item.available_quantity >= item.quantity) {
          return (isFound = true);
        } else if (item.available_quantity < item.quantity) {
          isFound = false;
        }
      }
    }
    return isFound;
  };

  

  const { push } = useRouter();

  return (
    <div className="lg:w-[25%] whitespace-nowrap">
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
        <div className="flex justify-between">
          <span className="text-gray-950 font-semibold">
            Shipping:Subtotal:
          </span>
          <span className="text-red-950">${allCartsInfo.delivery_fee}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-950 font-semibold">Grand Total:</span>
          <span className="text-[#999999]">${allCartsInfo.total_price}</span>
        </div>
      </div>
      <div className="px-2 text-white flex justify-between mt-5">
        <Link href="/products">
          <a className="px-4 py-1 bg-gray-1200 rounded-full ">Keep Shopping</a>
        </Link>
        <BaseButton
          disabled={checkQuantity() ? false : true}
          onClick={() => push("/continuetocheckout")}
          className="px-4 py-1 bg-blue-950 rounded-full disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Checkout
          <CheckoutIcon className="w-3 inline-block fill-white ml-3" />
        </BaseButton>
      </div>
    </div>
  );
};

export default CartSummary;
