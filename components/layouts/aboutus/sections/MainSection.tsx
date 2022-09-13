import Image from "next/image";
import React from "react";
import about from "../../../../public/assets/images/about.png"

const MainSection = () => {
  return (
    <div className="lg:px-[75px] md:px-[35px] sm:px-[20px] 2xl:container m-auto py-10">
      <div className="flex justify-between  mt-10">
        <span className="font-medium block whitespace-nowrap">ABOUT US</span>
        <div className="border h-0 mt-3.5 sm:hidden md:block border-yellow-950 w-[93%]"></div>
      </div>
      <div className="text-center mt-10 ">
        <span className="text-[30px] font-bold block mb-10">ABOUT US</span>
        <Image src={about}/>
        <span className="text-[30px] mb-5 text-[#4a4a4a] font-bold block">Our story</span>
        <span className="block lg:px-[230px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec sodales leo consectetur est consequat etiam elit. Ullamcorper sed orci fames duis vivamus amet tellus dignissim sed. Cras suspendisse id mattis sem pellentesque sit non. Non nunc tincidunt et vivamus arcu sollicitudin diam. Arcu tellus aliquam vulputate volutpat vel lacus. Cras suspendisse id mattis sem pellentesque sit non. Non nunc tincidunt et vivamus arcu sollicitudin diam. Arcu tellus aliquam vulputate volutpat vel lacus. Cras suspendisse id mattis sem pellentesque sit non. Non nunc tincidunt et vivamus arcu sollicitudin diam. Arcu tellus aliquam vulputate volutpat vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis donec sodales leo consectetur est consequat etiam elit. Ullamcorper sed orci fames duis vivamus amet tellus dignissim sed. Cras suspendisse id mattis sem pellentesque sit non. Non nunc tincidunt et vivamus arcu sollicitudin diam. Arcu tellus aliquam vulputate volutpat vel lacus. Cras suspendisse id mattis sem pellentesque sit non. Non nunc tincidunt et vivamus arcu sollicitudin diam. Arcu tellus aliquam vulputate volutpat vel lacus. Cras suspendisse id mattis sem pellentesque sit non. Non nunc tincidunt et vivamus arcu sollicitudin diam. Arcu tellus aliquam vulputate volutpat vel lacus.</span>
      </div>
    </div>
  );
};

export default MainSection;
