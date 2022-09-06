import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { ActiveDropDownAtom } from "../../helper";
import { BaseButton } from "../buttons";

const Dropdown = () => {
  const [activeDropDown, setActiveDropDown] =
    useRecoilState(ActiveDropDownAtom);


  return (
    <div className="flex flex-col w-[160px]">
        <div className="">
          <Link onClick={() => setActiveDropDown(false)} href="/myaccoutn">
            <a className="px-7 w-full py-3 border-b font-medium inline-block hover:bg-gray-1150 ">
              My Account
            </a>
          </Link>
          <Link onClick={() => setActiveDropDown(false)} href="/trackorder">
            <a className="px-7 w-full py-3 border-b font-medium inline-block hover:bg-gray-1150">
              Track Order
            </a>
          </Link>
          <Link onClick={() => setActiveDropDown(false)} href="/orderhistory">
            <a className="px-7 w-full py-3 border-b font-medium inline-block whitespace-nowrap hover:bg-gray-1150">
            Order History
            </a>
          </Link>
          <BaseButton
            onClick={() => setActiveDropDown(false)}
            className="px-7 w-full py-3 text-left border-b font-medium inline-block hover:bg-gray-1150"
            title="Log out"
          ></BaseButton>
        </div>
      
    </div>
  );
};

export default Dropdown;
