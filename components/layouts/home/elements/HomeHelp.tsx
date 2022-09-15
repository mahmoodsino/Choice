import React, { ReactElement } from "react";
type props = {
  image: ReactElement;
  title: string;
  desc: string;
};
const HomeHelp = ({ image, title, desc }: props) => {
  return (
    <div className="border  w-full h-[70px] items-center justify-center  flex leading-[21px] tracking-[0.11em]  ">
      <div className="">{image}</div>
      <div className=" text-sm  inline-block ml-1 ">
        <h1 className="font-bold">{title}</h1>
        <span className=" block font-[400]">{desc}</span>
      </div>
    </div>
  );
};
export default HomeHelp;
