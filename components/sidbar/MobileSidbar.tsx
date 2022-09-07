import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { ShowSidbarAtom } from "../../helper";
import { BaseButton } from "../buttons";
import { CloseIcon } from "../icons";

const MobileSidbar = () => {
  const [showSidbarState, setShowSidbarState] = useRecoilState(ShowSidbarAtom);

  return (
    <div
      className={` ${
        showSidbarState ? "left-0 " : "-left-full"
      } top-0 left-0 w-[50vw] bg-white shadow-lg mt-[56px] z-50 fixed h-[100vh] overflow-y-auto transition-all duration-300 ease-in-out`}
    >
      {/* <BaseButton className=" " onClick={() => setShowSidbarState(false)}>
        <CloseIcon className="w-6 text-[#46474a]" />
      </BaseButton> */}
      <div className="px-[25px]">
        <div
          onClick={() => setShowSidbarState(false)}
          className="flex justify-between items-center mt-5 border-b pb-8"
        >
          <Link href="/login">
            <a className="bg-blue-950 text-white px-4 py-1 rounded-full">
              Login
            </a>
          </Link>
          <Link href="/register">
            <a className=" text-[#46474a] underline px-4 py-1 rounded-full">
              Create account
            </a>
          </Link>
        </div>
        <div onClick={() => setShowSidbarState(false)} className="px-[25px] text-[#46474a] space-y-3 py-5  border-b">
          <Link href="/">
            <a className="block">Home</a>
          </Link>
          <Link href="/products">
            <a className="block">PRODUCTS</a>
          </Link>
          <Link href="/aboutus">
            <a className="block">ABOUT US</a>
          </Link>
          <Link href="/contactus">
            <a className="block">CONTACT US</a>
          </Link>
          <BaseButton className=" " title="Category"/>
        </div>
      </div>
    </div>
  );
};

export default MobileSidbar;
