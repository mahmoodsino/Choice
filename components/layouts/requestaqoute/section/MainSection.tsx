import React from "react";
import BaseButton from "../../../buttons/BaseButton";
import {
  CompanyIcon,
  LetterIcon,
  MessageIcon,
  PersonIcon,
  WriteIcon,
} from "../../../icons";
import BaseInput from "../../../inputs/BaseInput";

const MainSection = () => {
  return (
    <div className="px-[75px] 2xl:container m-auto py-10">
      <div className="flex justify-between  mt-10">
        <span className="font-medium block ">Request a Quote</span>
        <div className="border h-0 mt-3.5 border-yellow-950 w-[85%]"></div>
      </div>
      <span className="block text-center text-[30px] font-bold mt-5">
        Submit a Request
      </span>
      <div className="px-48 mt-10">
        <form>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <label htmlFor="Full Name" className="flex items-center space-x-2 mb-2 px-3 h-10">
                <PersonIcon className="w-5 fill-blue-950 inline-block" />
                <span className="text-sm text-gray-1050">Full Name</span>
              </label>
              <BaseInput
              id="Full Name"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="Email Address" className="flex items-center space-x-2 mb-2 px-3 h-10">
                <LetterIcon className="w-6 fill-blue-950 inline-block" />
                <span className="text-sm text-gray-1050">Email Address</span>
              </label>
              <BaseInput
              id="Email Address"
                placeholder=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-2">
            <div>
              <label htmlFor="Company Name" className="flex items-center space-x-2 mb-2 px-3 h-10">
                <CompanyIcon className="w-5 fill-blue-950 inline-block" />
                <span className="text-sm text-gray-1050">Company Name</span>
              </label>
              <BaseInput
              id="Company Name"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="Subject" className="flex items-center space-x-2 mb-2 px-3 h-10">
                <WriteIcon className="w-6 fill-blue-950 inline-block" />
                <span className="text-sm text-gray-1050">Subject</span>
              </label>
              <BaseInput
              id="Subject"
                placeholder=""
              />
            </div>
          </div>

          <div className="mt-2">
            <label htmlFor="Message" className="flex items-center space-x-2 mb-2 px-3 h-10">
              <MessageIcon className="w-7 fill-blue-950 inline-block" />
              <span className="text-sm text-gray-1050">Message</span>
            </label>
            <textarea
            id="Message"
              placeholder=""
              className="w-full outline-none border py-2 border-[#AEAEAE] resize-none h-40 px-3"
            />
          </div>
          <span className="font-semibold text-[#AEAEAE] block mt-5">
            Before submitting a proposal, please write all the deatils of your
            business
          </span>
          <div className=" mt-5">
            <label className="text-gray-1200 text-sm font-bold px-3 pb-5 block"  >Attachments</label>
            <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300  appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="text-yellow-950 font-semibold">Add or drop your</span>
                <span className="text-[#aeaeae] font-semibold ">file to here</span>
                
              </span>
              <input type="file" name="file_upload" className="hidden" />
            </label>
          </div>
          <div className="flex justify-center">

          <BaseButton className="px-9 rounded-full mt-8 py-1  bg-yellow-950 text-white text-lg font-bold" title="Submit " />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainSection;
