import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { AllCartsInfoAtom } from "../../../../helper";
import { CheckoutIcon } from "../../../icons";

const CartSummary = () => {
  const [allCartsInfo,setAllCartsInfo]=useRecoilState(AllCartsInfoAtom)

  return (
    <div className="lg:w-[25%] whitespace-nowrap">
      <span className="text-[22px] py-2 font-bold border-t border-b block text-gray-1400">
        Cart Summary
      </span>
      <div className="mt-5 space-y-3 px-2">
        <div className="flex justify-between">
          <span className="text-gray-950 font-semibold">Subtotal:</span>
          <span className="text-[#999999]">${allCartsInfo.sub_total_price}</span>
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
        <Link href="/continuetocheckout">
          <a className="px-4 py-1 bg-blue-950 rounded-full">
            Checkout
            <CheckoutIcon className="w-3 inline-block fill-white ml-3" />
          </a>
        </Link>
      </div>
    </div>
  );
};


export default CartSummary;
