import React from "react";
import ContactSection from "./ContactSection";
import FindUS from "./FindUS";
import SendMessage from "./SendMessage";

const MainSection = () => {
  return (
    <div className="lg:px-[75px] md:px-[35px] sm:px-[20px] 2xl:container m-auto py-10">
      <div className="flex justify-between  mt-10">
        <span className="font-medium block whitespace-nowrap ">Contact Us</span>
        <div className="border h-0 mt-3 sm:hidden lg:block border-yellow-950  w-[93%]"></div>
      </div>
      <div className="grid lg:grid-cols-5 lg:px-10 mt-10 ">
        <div className="col-span-2 lg:pl-32 sm:mb-8 ">
          <ContactSection/>
        </div>
        <div className="col-span-3 lg:px-5 lg:pr-20">
            <SendMessage />
        </div>
      </div>
      <div className="lg:px-10 mt-10">
        <FindUS />
      </div>
    </div>
  );
};

export default MainSection;
