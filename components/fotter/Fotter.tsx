import Link from "next/link";
import React from "react";
import BaseButton from "../buttons/BaseButton";
import { LetterIcon, PhoneIcon } from "../icons";
import Location from "../icons/Location";
import BaseInput from "../inputs/BaseInput";

const Fotter = () => {
  return (
    <div className="bg-gray-1300">
      <div className="2xl:container m-auto">
        <div className="px-36 mx-12 flex justify-between py-10  border-b">
          <div className="flex flex-col items-center">
            <div className="w-14 mb-3 h-14 rounded-full bg-gray-1200 flex items-center ">
              <PhoneIcon className="w-3 -rotate-45 fill-white m-auto" />
            </div>
            <span className="text-sm text-white">+1-668-423-2369</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 mb-3 h-14 rounded-full bg-gray-1200 flex items-center ">
              <LetterIcon className="w-6  fill-white m-auto" />
            </div>
            <span className="text-sm text-white">
              choicewholesale@gmail.com
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 mb-3 h-14 rounded-full bg-gray-1200 flex items-center ">
              <Location className="w-6  fill-white m-auto" />
            </div>
            <span className="text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </span>
          </div>
        </div>
        <div>
          <div className="px-56">
            <div className="flex justify-between px-4 text-sm text-white underline py-5">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/products">
                <a>PRODUCTS</a>
              </Link>
              <Link href="/aboutus">
                <a>ABOUT US</a>
              </Link>
              <Link href="/contactus">
                <a>CONTACT US</a>
              </Link>
            </div>
            <div>
              <form className="w-[100%] ">
                <div className="flex w-[100%] ">
                  <BaseInput
                    placeholder="NAME"
                    className="outline-none bg-[#616161] px-2 py-1 w-[80%] inline-block"
                  />
                  <BaseInput
                    placeholder="EMAIL ADDRESS"
                    className="outline-none bg-[#616161] px-2 py-1 w-[100%] inline-block"
                  />
                </div>
                <textarea
                  placeholder="TYPE YOUR MESSAGE..."
                  className="outline-none mt-3 bg-[#616161] px-2 py-1 w-[100%] resize-none"
                />
                <BaseButton
                  className="w-[100%] bg-gray-1150 text-gray-1300 font-bold py-1 my-4 "
                  title="SEND IT NOW"
                />
              </form>
            </div>
          </div>
          <div className="text-center text-xs bg-[#3A3A3A] text-white ">
            <span className="block py-2">
              All CopyRights Rights are Reserved 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
