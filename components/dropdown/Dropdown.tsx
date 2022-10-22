import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { ActiveDropDownAtom, handelLogout, TokenAtom } from "../../helper";
import { BaseButton } from "../buttons";

const Dropdown = () => {
  const [activeDropDown, setActiveDropDown] =
    useRecoilState(ActiveDropDownAtom);
  const [token, setToken] = useRecoilState(TokenAtom);
  const push = useRouter().push;

  const LogoutHandel = async () => {
    const res = await handelLogout(token);
    if(res===null){
      localStorage.removeItem("token");
    localStorage.removeItem("type");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("last_name");
    localStorage.removeItem("first_name");
    window.location.reload();
    }else{
      localStorage.removeItem("token");
      localStorage.removeItem("type");
      localStorage.removeItem("email");
      localStorage.removeItem("id");
      localStorage.removeItem("last_name");
      localStorage.removeItem("first_name");
      window.location.reload();
    }
  };

  let userType;

  if (typeof window !== "undefined") {
    userType = localStorage.getItem("type" || "");
  }
  return (
    <div className="flex flex-col w-[160px]">
      {userType === "user" ? (
        <div onClick={() => setActiveDropDown(false)} className="">
          <Link href="/myaccoutn">
            <a className="px-7 w-full py-3 border-b font-medium inline-block hover:bg-gray-1150 ">
              My Account
            </a>
          </Link>
          <Link href="/trackorder">
            <a className="px-7 w-full py-3 border-b font-medium inline-block hover:bg-gray-1150">
              Track Order
            </a>
          </Link>
          <Link href="/orderhistory">
            <a className="px-7 w-full py-3 border-b font-medium inline-block whitespace-nowrap hover:bg-gray-1150">
              Order History
            </a>
          </Link>
          <BaseButton
            onClick={() => (LogoutHandel(), push("./"))}
            className="px-7 w-full py-3 text-left border-b font-medium inline-block hover:bg-gray-1150"
            title="Log out"
          ></BaseButton>
        </div>
      ) : userType === "guest" ? (
        <Link onClick={() => setActiveDropDown(false)} href="/trackorder">
          <a className="px-7 w-full py-3 border-b font-medium inline-block hover:bg-gray-1150">
            Track Order
          </a>
        </Link>
      ) : null}
    </div>
  );
};

export default Dropdown;
