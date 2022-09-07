import React from "react";
import FormSection from "./FormSection";

const MainSection = () => {
  return (
    <div className="px-[75px] 2xl:container m-auto py-10">
      <div className="text-center">
        <span className="text-[32px] font-bold block py-3">WELCOME BACK!</span>
        <span className="text-gray-1200 text-xl font-medium">Please enter your details</span>
        <div className="lg:w-[35%] m-auto">

            <FormSection />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
