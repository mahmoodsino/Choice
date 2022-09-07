import React, { useState } from "react";
import { OrderReview } from "../../../orderReview";
import { ProgressLine } from "../../../steper";
import OrderDetails from "./OrderDetails";
import PaymentInfo from "./PaymentInfo";
import ShippingAddress from "./ShippingAddress";

const MainSection = () => {
  const [progressPercentage, setProgressPercentage] = useState(35);

  return (
    <div className="lg:px-[75px] md:px-[35px] sm:px-[20px] 2xl:container m-auto py-10">
      <span className="text-2xl font-bold">Order Status</span>
      <div className="md:w-[65%] flex flex-col justify-between left-0 right-0 m-auto">
        <div className="flex flex-row justify-between md:text-xl text-gray-950 mb-3">
          <span>Placed</span>
          <span>Processing</span>
          <span>Delivered</span>
        </div>
        <ProgressLine progressPercentage={progressPercentage} />
      </div>
      <div className=" flex lg:flex-row sm:flex-col sm:justify-center  lg:justify-between mt-10">
        <div className="lg:w-[55%] sm:w-[100%] flex flex-col">
          <OrderDetails />
          <PaymentInfo />
          <ShippingAddress />
        </div>
        <div className="lg:w-[41%] flex flex-col">
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

export default MainSection;
