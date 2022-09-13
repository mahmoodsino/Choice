import React from "react";
import { OrderReview } from "../../../orderReview";
import FormSection from "./FormSection";

const MainSections = () => {
  return (
    <div className="px-[75px] 2xl:container m-auto py-10">
      <div className="flex justify-between ">
        <span className="font-medium block ">Checkout</span>
        <div className="border h-0 mt-3.5 border-yellow-950 w-[93%]"></div>
      </div>
      <div className="flex  justify-around mt-10">
            <div>
                <FormSection />
            </div>
            <div className="w-[41%]">

            <OrderReview gridForLargScreen="grid-cols-1" />
            <div className="mx-14">
            <div className="flex flex-col  mt-14 pb-10 md:text-lg text-gray-1500 space-y-10 border-b">
              <div className="flex flex-row justify-between">
                <span>Subtotal</span>
                <span>$88.5</span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Shipping fee</span>
                <span>$20</span>
              </div>
            </div>
            <div className="flex sm:text-xl md:text-3xl  flex-row justify-between mx-5 mt-5">
              <span>TOTAL</span>
              <span className="font-bold">$108.5</span>
            </div>
          </div>
            </div>
      </div>
    </div>
  );
};

export default MainSections;
