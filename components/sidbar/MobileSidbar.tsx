import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { ShowSidbarAtom } from "../../helper";
import { BaseButton } from "../buttons";
import { CloseIcon } from "../icons";
import choicePhoto from "../../public/assets/images/choicePhoto.png"
import Image from "next/image";



const MobileSidbar = () => {
  const [showSidbarState, setShowSidbarState] = useRecoilState(ShowSidbarAtom);

  return (
    <div
      className={` ${
        showSidbarState ? "left-0 " : "-left-full"
      } top-0 left-0 w-[50vw] bg-white shadow-lg z-50 fixed h-[100vh] overflow-y-auto transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-end m-5">
      <BaseButton className=" " onClick={() => setShowSidbarState(false)}>
        <CloseIcon className="w-6 text-[#46474a]" />
      </BaseButton>
      </div>
      <div className="px-[25px]">
        <div className="  h-fit flex justify-center items-center">
          <Image width={150} height={85} src={choicePhoto} />

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
