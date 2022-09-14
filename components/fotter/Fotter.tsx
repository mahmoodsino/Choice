import React from "react";
import ContactInfo from "./ContactInfo";
import FotterContact from "./FotterContact";
import FotterLink from "./FotterLink";
import choicePhoto from "../../public/assets/images/choicePhoto.png"
import Image from "next/image";


const Fotter = () => {
  return (
    <div className="bg-gray-1300">
      <div className="2xl:container m-auto pt-10">
        <div className="grid sm:space-y-8   lg:grid-cols-4 px-[75px] md:px-[35px] sm:px-[20px]">
          <div className=" invert mt-6">
            <Image alt="" src={choicePhoto} />
            <span className="block lg:ml-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates cumque quae quibusdam nemo placeat quam excepturi qui tempora, autem ipsa!</span>
          </div>
          <div className=" text-left lg:px-8">
            <span className="block text-lg font-semibold text-white">site map</span>
            <FotterLink />
          </div>
          <div className="">
          <span className="block text-lg font-semibold text-white">Contact Info</span>

            <ContactInfo />
          </div>
          <div>
          <span className="text-xl text-white  font-semibold block mb-5">
              send a Message
            </span>
            <FotterContact />
          </div>
        </div>
      </div>
      <div className="text-center text-xs bg-[#3A3A3A] text-white ">
        <span className="block py-2">
          All CopyRights Rights are Reserved 2022
        </span>
      </div>
    </div>
  );
};

export default Fotter;
