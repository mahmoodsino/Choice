import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import { getOrderCreatedOrder, OrderDetailsAtom, TokenAtom } from "../../../../helper";
import { OrderReview } from "../../../orderReview";
import FormSection from "./FormSection";

const MainSections = () => {
  const router = useRouter().query;
  const token = useRecoilValue(TokenAtom);
  const [orderDetails, setOrderDetails] = useRecoilState(OrderDetailsAtom);
  useEffect(() => {
    const getData = async () => {
      if (router.savedOrder) {
        const res = await getOrderCreatedOrder(token, +router.savedOrder);
        console.log(res);
        
        if(res===null){
          toast.error("some thing went wrong")
        }else{
          setOrderDetails(res.result);
        }
      }
    };
    getData();
  }, [router.savedOrder]);
  return (
    <div className="lg:px-[75px] md:px-20 sm:px-3 2xl:container m-auto py-10">
      <div className="flex justify-between ">
        <span className="font-medium block ">Checkout</span>
        <div className="border h-0 mt-3.5 border-yellow-950 w-[93%]"></div>
      </div>
      <div className="flex sm:flex-col md:flex-row justify-around mt-10">
        <div>
          <FormSection />
        </div>
        <div className="md:w-[41%] sm:mt-4 md:ml-5 ">
          <OrderReview gridForLargScreen="grid-cols-1" />
          <div className="mx-14">
            <div className="flex flex-col  mt-14 pb-10 md:text-lg text-gray-1500 space-y-10 border-b">
              <div className="flex flex-row justify-between">
                <span>Subtotal</span>
                <span>${orderDetails.sub_total}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Shipping fee</span>
                <span>${orderDetails.delivery_fee}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Tax</span>
                <span>%{orderDetails.tax}</span>
              </div>
            </div>
            <div className="flex sm:text-xl md:text-xl  flex-row justify-between mx-5 mt-5">
              <span>TOTAL</span>
              <span className="font-bold">${orderDetails.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSections;
