import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import {
  getOrderCreatedOrder,
  OrderDetailsAtom,
  TokenAtom,
} from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { OrderReview } from "../../../orderReview";
import { Spinner } from "../../../spinner";
import { ProgressLine } from "../../../steper";
import OrderDetails from "./OrderDetails";
import PaymentInfo from "./PaymentInfo";
import ShippingAddress from "./ShippingAddress";

const MainSection = () => {
  const [progressPercentage, setProgressPercentage] = useState(35);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [orderDetails, setOrderDetails] = useRecoilState(OrderDetailsAtom);
  const [loading, setLoading] = useState(false);

  const router = useRouter().query;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      if (router.order) {
        const res = await getOrderCreatedOrder(token, +router.order);
        if(res===null){
          toast.error("some thing went wrong")
        }else{
          setOrderDetails(res.result);
        }
          setLoading(false);
      }
    };
    getData();
  }, [router.order]);

  return (
    <div>
      {!loading ? (
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
              {/* <PaymentInfo /> */}
              {orderDetails.address === null ? null : <ShippingAddress />}
            </div>
            <div className="lg:w-[41%] flex flex-col">
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
                    <span>{orderDetails.tax}%</span>
                  </div>
                </div>
                <div className="flex sm:text-xl md:text-3xl text-gray-1500 flex-row justify-between mx-5 mt-5">
                  <span>TOTAL</span>
                  <span>${orderDetails.total}</span>
                </div>
                {orderDetails.status !== "PAID" &&
                  (orderDetails.payment_transaction === null ? (
                    <div className="flex justify-between mx-5 mt-3">
                      <span className="font-semibold uppercase text-gray-1500 items-center">
                        pay for your order
                      </span>
                      <BaseButton
                        // onClick={() => handelpayForOrder()}
                        className="px-4 py-1 bg-blue-950 text-white rounded-full "
                        title="pay"
                      />
                    </div>
                  ) : orderDetails.payment_transaction?.can_completed ===
                    false ? (
                    <span className="px-5 font-bold text-lg">
                      payment {orderDetails.payment_transaction?.status}
                    </span>
                  ) : orderDetails.payment_transaction?.can_completed ? (
                    <div className="flex justify-between mx-5 mt-3">
                      <span className="font-semibold uppercase text-gray-1500 items-center">
                        complete pay for your order
                      </span>
                      <BaseButton
                        // onClick={() => handelComletetheOrder()}
                        className="px-4 py-1 bg-blue-950 text-white rounded-full"
                        title="complete"
                      />
                    </div>
                  ) : null)}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <Spinner className="w-72" />
        </div>
      )}
    </div>
  );
};

export default MainSection;
