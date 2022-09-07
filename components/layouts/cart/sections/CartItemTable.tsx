import React from "react";
import BaseButton from "../../../buttons/BaseButton";
import { BlusIcon, MinusIcon, TrashIcon } from "../../../icons";

const CartItemTable = () => {
  return (
    <div>
      <div className=" py-10 lg:block sm:hidden">
        <table className="w-full">
          <thead className="">
            <tr className="border-b text-left text-xl font-semibold  ">
              <th className=" p-2 pb-5">PRODUCT DETAILS</th>
              <th className=" p-2 pb-5 w-auto">PRICE</th>
              <th className=" p-2 pb-5 w-auto">QUANTITY</th>
              <th className=" p-2 pb-5 w-auto">TOTAL PRICE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-left ">
              <td className=" p-2 w-[25%] ">
                <div className="flex flex-row items-center space-x-5 ">
                  <BaseButton className="w-6 h-6 bg-red-950/10 rounded-full">
                    <TrashIcon className="w-5 fill-red-950 m-auto mt-0.5" />
                  </BaseButton>
                  <div className="w-20 h-20 border"></div>
                  <div>
                    <span className="block">Gloves</span>
                    <span className="block">xl</span>
                  </div>
                </div>
              </td>
              <td className="p-2  text-lg w-[25%]">
                <span>$29.50</span>
              </td>
              <td className="p-2 w-[25%] ">
                <div className="border flex w-fit items-center space-x-8 px-2 py-1">
                  <BaseButton className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto">
                    <MinusIcon className="w-3 fill-black ml-1" />
                  </BaseButton>
                  <span>1</span>
                  <BaseButton className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto">
                    <BlusIcon className="w-3 fill-black ml-1" />
                  </BaseButton>
                </div>
              </td>
              <td className="p-2 w-[25%]">
                <span>$59.00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItemTable;
