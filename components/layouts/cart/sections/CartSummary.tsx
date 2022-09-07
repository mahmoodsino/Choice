import Link from "next/link";
import React from "react";
import BaseButton from "../../../buttons/BaseButton";
import { CheckoutIcon } from "../../../icons";

const CartSummary = () => {
  return (
    <div className="w-[25%]">
      <span className="text-[22px] py-2 font-bold border-t border-b block text-gray-1400">
        Cart Summary
      </span>
      <div className="mt-5 space-y-3 px-2">
        <div className="flex justify-between">
          <span className="text-gray-950 font-semibold">Subtotal:</span>
          <span className="text-[#999999]">$88.50</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-950 font-semibold">
            Shipping:Subtotal:
          </span>
          <span className="text-red-950">$15.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-950 font-semibold">Grand Total:</span>
          <span className="text-[#999999]">$103.50</span>
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