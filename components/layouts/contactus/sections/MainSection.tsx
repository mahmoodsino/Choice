import React from "react";
import { LetterIcon, PhoneIcon } from "../../../icons";
import Location from "../../../icons/Location";
import { ContactElement } from "../elements";
import FindUS from "./FindUS";
import SendMessage from "./SendMessage";

const MainSection = () => {
  return (
    <div className="px-[75px] 2xl:container m-auto py-10">
      <div className="flex justify-between  mt-10">
        <span className="font-medium block ">Contact Us</span>
        <div className="border h-0 mt-3.5 border-yellow-950 w-[93%]"></div>
      </div>
      <div className="grid grid-cols-5 px-10 mt-10">
        <div className="col-span-2 pl-32 space-y-2">
          <ContactElement
            icon={<PhoneIcon className="w-4 fill-white m-auto -rotate-45" />}
            title="Phone Number"
            info="+123-456-7899"
          />
          <ContactElement
            icon={<LetterIcon className="w-7 fill-white m-auto " />}
            title="Email Address"
            info="Choice@gmail.com"
          />
          <ContactElement
            icon={<Location className="w-7 fill-white m-auto " />}
            title="Location "
            info="Lorem ipsum dolor sit amet, consectetur "
          />
        </div>
        <div className="col-span-3 px-5 pr-20">
            <SendMessage />
        </div>
      </div>
      <div className="px-10 mt-10">
        <FindUS />
      </div>
    </div>
  );
};

export default MainSection;
