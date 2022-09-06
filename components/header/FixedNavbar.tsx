import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { AccountIcon, ArrowIcon, BasketIcon, SearchIcon, WriteIcon } from "../icons";
import choicePhoto from "../../public/assets/images/choicePhoto.png";
import { BaseInput } from "../inputs";
import { BaseButton } from "../buttons";
import { ActiveDropDownAtom, SearchAtom, showCategoriesAtom } from "../../helper";
import { routse } from "./Navbar";
import { useRouter } from "next/router";
import { Dropdown } from "../dropdown";
import LoginIcon from "../icons/LoginIcon";
import FixedCategories from "./FixedCategories";

export const goingUpAtom = atom<boolean>({
  key: "goingupatom",
  default: false,
});

const FixedNavbar = () => {
  const [goingUp, setGoingUp] = useRecoilState(goingUpAtom);
  const [searchState, setSearchState] = useRecoilState(SearchAtom);
  const { pathname } = useRouter();
  const [activeDropDown, setActiveDropDown] =
    useRecoilState(ActiveDropDownAtom);
    const [showCategories,setShowCategories]=useRecoilState(showCategoriesAtom)

  const prevScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 350) {
        setGoingUp(true);
      }
      if (currentScrollY <= 350) {
        setGoingUp(false);
        setShowCategories(false)
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div
      className={
        !goingUp
          ? "hidden"
          : "down bg-white shadow-md fixed top-0 left-0 right-0 m-auto  z-50"
      }
    >
      <div className="2xl:container m-auto">
        <div className="flex justify-between px-[65px] ">
          <div className="flex">
            <Image alt="" src={choicePhoto} />
            <div className=" py-3 flex items-center text-sm space-x-4">
              <Link href="/">
                <a
                  className={`text-blue-950 px-4 ${
                    pathname === "/" ? "font-bold" : "font-medium"
                  }`}
                >
                  Home
                </a>
              </Link>
              <div className="relative">
               <BaseButton onClick={() => setShowCategories(!showCategories)} className=" text-blue-950 px-4 font-medium" >PRODUCTS<ArrowIcon className="w-3 ml-2 fill-blue-950 inline-block rotate-180" /></BaseButton>
               {showCategories ? (
                <div className="bg-white absolute  z-10  top-[100%] left-0  shadow-[0_0_5px_rgba(0,0,0,0.12)]">
                  <FixedCategories />
                </div>
              ) : null}
              </div>
              
              <Link href="/brand">
                <a
                  className={`text-blue-950 px-4 ${
                    pathname === "/brand" ? "font-bold" : "font-medium"
                  }`}
                >
                  BRAND NAME
                </a>
              </Link>
              <Link href="/aboutus">
                <a
                  className={`text-blue-950 px-4 ${
                    pathname === "/aboutus" ? "font-bold" : "font-medium"
                  }`}
                >
                  ABOUT US
                </a>
              </Link>
              <Link href="/contactus">
                <a
                  className={`text-blue-950 px-4 ${
                    pathname === "/contactus" ? "font-bold" : "font-medium"
                  }`}
                >
                  CONTACT US
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center  space-x-2 pr-3">
            <div className="flex relative">
              <BaseButton
                onClick={() => setActiveDropDown(!activeDropDown)}
                className=" flex space-x-2 items-center border-r py-2 px-6"
              >
                <AccountIcon className="w-5 fill-gray-950" />
                <span className="text-sm text-gray-950 ">My Account</span>
              </BaseButton>
              {activeDropDown ? (
                <div className="bg-white absolute  z-10  top-[100%]  shadow-[0_0_5px_rgba(0,0,0,0.12)]">
                  <Dropdown />
                </div>
              ) : null}
              <Link href="/login">
                <a className="flex  items-center space-x-2 border-r pr-5">
                  <LoginIcon className="fill-gray-950 w-8 py-2 pl-2" />
                  <span className="text-sm text-gray-950">Login</span>
                </a>
              </Link>
            </div>
            <Link href="./cart">
              <a className="flex space-x-2 pl-3">
                <BasketIcon className="w-7 fill-blue-950 inline-block" />
                <div>
                  <span className="block text-sm text-blue-950 font-bold">
                    Shopping Cart
                  </span>
                  <span className="block text-xs text-gray-1050">
                    0 item(s)- $0.00
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedNavbar;
