import React from "react";
import { LetterIcon, PhoneIcon } from "../icons";
import Location from "../icons/Location";

const ContactInfo = () => {
  return (
    <div className="space-y-4 py-5  ">
      <div className="flex space-x-3 items-center">
        <div className="w-14  h-14 rounded-full bg-gray-1200 flex items-center ">
          <PhoneIcon className="w-3  -rotate-45 fill-white m-auto" />
        </div>
        <span className="text-sm text-white">+1-668-423-2369</span>
      </div>
      <div className="flex space-x-3 items-center">
        <div className="w-14  h-14 rounded-full bg-gray-1200 flex items-center ">
          <LetterIcon className="w-6  fill-white m-auto" />
        </div>
        <span className="text-sm text-white">choicewholesale@gmail.com</span>
      </div>
      <div className="flex space-x-3 items-center">
        <div className="w-14  h-14 rounded-full bg-gray-1200 flex items-center ">
          <Location className="w-6  fill-white m-auto" />
        </div>
        <span className="text-sm text-white">
          Lorem ipsum dolor sit amet, consectetur{" "}
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
