import React from "react";
import { BaseButton } from "../../../buttons";
import { BaseInput } from "../../../inputs";
import GoogleButton from "react-google-button";
import Link from "next/link";

const FormSection = () => {
  return (
    <div className="mt-5">
      <form>
        <div className="text-left">
          <label htmlFor="Email" className="text-lg font-semibold px-2 py-2">
            Email
          </label>
          <BaseInput id="Email" type="email" />
        </div>
        <div className="text-left mt-5">
          <label htmlFor="Password" className="text-lg font-semibold px-2 py-2">
            Password
          </label>
          <BaseInput id="Password" type="password" />
        </div>
        <div className="flex justify-between mt-3  text-[#4a4a4a] font-semibold">
          <div className=" ">
            <label className="shopContainer flex items-center m-0    pt-2 py-2">
              Remember me
              <input className="checkbox" type="checkbox" />
              <span className="text-sm  shopCheckmark"></span>
            </label>
          </div>
          <Link href="/resetpassword">
          <a >Forgot password</a>
          </Link>
        </div>
        <BaseButton
          className="w-full bg-blue-950 py-2 text-lg font-semibold text-white mt-3"
          title="Sign in"
        />
        <GoogleButton
          className="w-full"
          type="light"
          onClick={() => {
            console.log("Google button clicked");
          }}
        />
      </form>

      <div className="mt-5">
        <span className="text-[#7B7B7B] font-medium">
          Don,t have an account?
        </span>
        <Link href="/register">
          <a className="font-bold">SIign up now</a>
        </Link>
      </div>
    </div>
  );
};

export default FormSection;
