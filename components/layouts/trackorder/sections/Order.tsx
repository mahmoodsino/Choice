import { useState } from 'react'
import {BaseButton} from '../../../buttons';
import { v4 } from "uuid";

interface OrdersType {
    orderId: number;
    status: string;
    price: number;
  }
  
  const order: OrdersType[] = [
    { orderId: 1234, status: "Order Placed", price: 29.5 },
  
    { orderId: 1234, status: "Order Placed", price: 29.5 },
  
    { orderId: 1234, status: "Order Placed", price: 29.5 },
  
    { orderId: 1234, status: "Order Placed", price: 29.5 },
  ];

const Orders = () => {
    const [orderState, setOrderState] = useState<OrdersType[]>(order);

  return (
    <div>
      {orderState.map((item) => {
            return (
              <div key={v4()} className="border-b pb-5 mb-8 text-[#262626]">
                <div className="flex flex-row justify-between mb-5">
                  <div className=" space-x-10 sm:text-xs md:text-sm">
                    <div className="inline-block  ">
                      <h1 className=" font-bold mb-1">Order ID</h1>
                      <h1 className=" ">#{item.orderId}</h1>
                    </div>
                    <div className="inline-block">
                      <h1 className="font-bold mb-1">Status:</h1>
                      <h1>{item.status}</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="md:text-xl font-medium">${item.price}</h1>
                  </div>
                </div>
                <div className="flex flex-row justify-between sm:text-xs md:text-sm">
                  <div className="inline-block space-x-5">
                    <span className="">x2</span>{" "}
                    <span className="font-semibold">Item Name 1</span>
                  </div>
                  <div>
                    <BaseButton onClick={() =>console.log("")} title="View receipt" className="underline"/>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  )
}

export default Orders
