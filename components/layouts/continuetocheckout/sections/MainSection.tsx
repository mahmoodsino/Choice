import Link from "next/link";
import React from "react";
import { BaseButton } from "../../../buttons";
import FormSection from "./FormSection";

const MainSection = () => {
  return (
    <div className="px-[75px] 2xl:container m-auto py-10">
      <div className="grid grid-cols-2">
        <div className=" border-r">
          <Link href="/cart">
            <a className="text-lg underline">Back to My Cart</a>
          </Link>
          <span className="text-gray-1500 text-xl mt-10 font-semibold block">
            Returning Customer
          </span>
          <div className="w-[60%] mt-5">
            <FormSection />
          </div>
        </div>
        <div className="space-y-7 px-10 mt-20">
          <span className="block font-semibold text-xl text-gray-1500">
            Checkout as Guest
          </span>
          <BaseButton
            className="px-7 py-1.5  bg-yellow-950 rounded-full"
            title="Continue"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
