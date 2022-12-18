import Link from "next/link";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { OpenCategoryModalAtom, ShowSidbarAtom } from "../../helper";
import { BaseButton } from "../buttons";
import { CloseIcon } from "../icons";
import choicePhoto from "../../public/assets/images/choicePhoto.png";
import Image from "next/image";

const MobileSidbar = () => {
  const [showSidbarState, setShowSidbarState] = useRecoilState(ShowSidbarAtom);
  const setOpencategoryModal = useSetRecoilState(OpenCategoryModalAtom);
  return (
    <div
      className={` ${
        showSidbarState ? "left-0 " : "-left-full"
      } top-0 left-0 w-[60vw] px-5 bg-white shadow-lg z-50 fixed h-[100vh] overflow-y-auto transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between  m-5">
        <Image src={choicePhoto} />
        <BaseButton className=" " onClick={() => setShowSidbarState(false)}>
          <CloseIcon className="w-6 text-[#46474a]" />
        </BaseButton>
      </div>

      <div
        onClick={() => setShowSidbarState(false)}
        className="px-[20px] pb-5 text-[#46474a] space-y-3   border-b"
      >
        <Link href="/">
          <a className="flex items-center space-x-5">
            <span className="text-lg block mt-1">Home</span>
          </a>
        </Link>
        <Link href="/products">
          <a className="flex items-center space-x-5">
            <span className="text-lg mt-1 block">PRODUCTS</span>
          </a>
        </Link>
        <Link href="/aboutus">
          <a className="flex  space-x-5">
            <span className="block text-lg mt-1 ">ABOUT US</span>
          </a>
        </Link>
        <Link href="/contactus">
          <a className="flex space-x-6 items-center ml-1">
            <span className="block mt-1 text-lg">CONTACT US</span>
          </a>
        </Link>
        {/* <Link href="/requestaqoute">
          <a className="flex items-center  space-x">
            <EditIcon className="w-5 fill-blue-950" />
            <span className="text-lg whitespace-nowrap">REQUEST A QUOTE!</span>
          </a>
        </Link> */}
        <BaseButton
          onClick={() => setOpencategoryModal(true)}
          className="flex  space-x-5"
        >
          {/* <TagIcon className="w-5 fill-blue-950" /> */}
          <span className="text-lg block">Category</span>
        </BaseButton>
      </div>
    </div>
  );
};

export default MobileSidbar;
