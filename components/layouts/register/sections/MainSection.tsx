import Link from "next/link";
import React from "react";
import { BaseButton } from "../../../buttons";
import FormSection from "./FormSection";

const MainSection = () => {
  return (
    <div className="px-[75px] 2xl:container m-auto py-10">
      <span className="block font-semibold text-xl text-center mt-10">Create your CHOICE WHOLESALE account!</span>
      <div className="w-[35%] m-auto">
        <FormSection />
      </div>
      <div className="mt-10 w-[35%] m-auto text-center space-y-4">
        <span className="block font-bold tracking-[0.08em]">Already have an account?</span>
        <Link href="/login" >
          <a className="w-[100%] block tracking-[0.08em] border border-black py-2 font-semibold ">Sign in</a>

        </Link>
      </div>
    </div>
  );
};

export default MainSection;
