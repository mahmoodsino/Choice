import React from "react";
import BaseButton from "../../../buttons/BaseButton";
import { BlusIcon, CartIcon, MinusIcon } from "../../../icons";

const DetailsCard = () => {
  return (
    <div>
      <span className="text-3xl font-medium block "> Product Name 1</span>
      <div className="mt-5 border-b-2 space-y-2 pb-10">
        <div className="w-[40%] flex justify-between items-center">
          <span className="text-[22px] font-bold">$29.50</span>
          <span className="line-through text-[#9098B1]">$39.50</span>
          <span className="text-[#33A0FF] font-bold">24% Off</span>
        </div>
        <div className="w-[40%] flex justify-between items-center">
          <span className="text-gray-1400 text-sm">Availability:</span>
          <span className="text-gray-1400 text-sm">In stock</span>
        </div>
        <div className="w-[40%] flex justify-between items-center">
          <span className="text-gray-1400 text-sm">Category:</span>
          <span className="text-gray-1400 text-sm">Accessories</span>
        </div>
      </div>
      <div className="mt-5 border-b-2 space-y-2 pb-10">
        <div className="flex space-x-20 items-center">
          <span className="text-gray-1400 text-sm">Select Color:</span>
          <div className="flex space-x-3">
            <span className="bg-yellow-400 cursor-pointer block h-5 w-5 rounded-full"></span>
            <span className="bg-blue-400 cursor-pointer block h-5 w-5 rounded-full"></span>
            <span className="bg-red-400 cursor-pointer block h-5 w-5 rounded-full"></span>
            <span className="bg-black cursor-pointer block h-5 w-5 rounded-full"></span>
          </div>
        </div>
        <div>
          <span className="text-gray-1400 text-sm">Size</span>
          <div></div>
        </div>
      </div>
      <div className="flex justify-between mt-5 items-center">
        <div className="border flex items-center space-x-8 px-2 py-1">
          <BaseButton className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto">
            <MinusIcon className="w-3 fill-black ml-1" />
          </BaseButton>
          <span>1</span>
          <BaseButton className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto">
            <BlusIcon className="w-3 fill-black ml-1" />
          </BaseButton>
        </div>
        <div className="font-medium space-x-2">
            <BaseButton className="text-black px-3 py-1 border border-black rounded-full ">
            <CartIcon className="w-4 fill-black inline-block mr-2" />
            Add to cart
            </BaseButton>
            <BaseButton className="px-7 py-1.5  bg-yellow-950 rounded-full" title="Buy Now"/>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
