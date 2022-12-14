import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { BaseButton } from "../buttons";
import { AccountIcon, BasketIcon, BurgerIcon, SearchIcon } from "../icons";
import { goingUpAtom } from "./FixedNavbar";
import choicePhoto from "../../public/assets/images/choicePhoto.png";
import Image from "next/image";
import { BaseInput } from "../inputs";
import {
  ActiveDropDownAtom,
  AllCartsInfoAtom,
  CouninueAsGuestModalAtom,
  SearchAtom,
  ShowSidbarAtom,
  TokenAtom,
} from "../../helper";
import { Dropdown } from "../dropdown";
import Link from "next/link";
import LoginIcon from "../icons/LoginIcon";
import { useRouter } from "next/router";

const MobaiHeader = () => {
  const goingUp = useRecoilValue(goingUpAtom);
  const [searchState, setSearchState] = useRecoilState(SearchAtom);
  const [activeDropDown, setActiveDropDown] =
    useRecoilState(ActiveDropDownAtom);
  const [showSidbarState, setShowSidbarState] = useRecoilState(ShowSidbarAtom);
  const setContinueAsGuestModal = useSetRecoilState(CouninueAsGuestModalAtom);
  const token = useRecoilValue(TokenAtom);
  const allCartsInfo = useRecoilValue(AllCartsInfoAtom);
  const { push } = useRouter();

  let userType;

  if (typeof window !== "undefined") {
    userType = localStorage.getItem("type" || "");
  }

  const handelGoToCart = () => {
    push("/cart");
  };

  return (
    <div
      className={`flex justify-between px-[15px] top-0 md:hidden sm:flex bg-blue-950 items-center w-screen ${
        !goingUp ? " h-14" : "downn fixed z-50 shadow-md "
      }`}
    >
      <div className="flex items-center ">
        <BaseButton
          onClick={() => setShowSidbarState(!showSidbarState)}
          className=" "
        >
          <BurgerIcon className="w-10 fill-white" />
        </BaseButton>
        <div className="invert w-16 mt-1">
          <Image src={choicePhoto} />
        </div>
        <form className=" w-[70%] relative ">
          <BaseInput
            placeholder="Search"
            className="outline-none w-full rounded-full  py-1 px-2"
            onChange={(e) => setSearchState(e.target.value)}
            value={searchState}
            type="search"
          />
          <BaseButton
            className="px-2 py-2 rounded-full right-1 top-0.5 absolute bg-yellow-950"
            onClick={() => console.log("")}
          >
            <SearchIcon className="w-3 fill-blue-950 " />
          </BaseButton>
        </form>
      </div>
      <div className=" flex items-center">
        <div className="relative">
          {userType === "user" ? (
            <BaseButton
              onClick={() => setActiveDropDown(!activeDropDown)}
              className=" flex space-x-2 items-center whitespace-nowrap  py-2 px-2"
            >
              <AccountIcon className="w-10 fill-white" />
            </BaseButton>
          ) : userType === "guest" ? (
            <div className="flex items-center ">
              <BaseButton
                onClick={() => setActiveDropDown(!activeDropDown)}
                className=" flex space-x-2 items-center whitespace-nowrap  py-2 px-2"
              >
                <AccountIcon className="w-7 fill-white" />
              </BaseButton>
              <Link href="/login" className="">
                <a>
                  <LoginIcon className="w-7 fill-white" />
                </a>
              </Link>
            </div>
          ) : (
            <Link href="/login" className="">
              <a>
                <LoginIcon className="w-10 fill-white" />
              </a>
            </Link>
          )}
          {activeDropDown ? (
            <div className="bg-white absolute  z-10  top-[100%] right-0  shadow-[0_0_5px_rgba(0,0,0,0.12)]">
              <Dropdown />
            </div>
          ) : null}
        </div>
        <div className="relative ">
          <BaseButton
            onClick={() =>
              token.length > 1
                ? handelGoToCart()
                : setContinueAsGuestModal(true)
            }
            className="flex space-x-2 pl-3 whitespace-nowrap"
          >
            <div className="absolute px-0.5 right-0  bg-yellow-950 rounded-full text-xs text-white font-extrabold">
              {allCartsInfo.items.length}
            </div>
            <div className="flex flex-col items-center">
              <BasketIcon className="w-6 fill-white inline-block" />
              <span className="text-[10px] text-white">
                $({allCartsInfo.total_price.toFixed(2)})
              </span>
            </div>
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default MobaiHeader;
