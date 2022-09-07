import React from "react";
import { MainCarousel } from "../../../carousel";
import { Header, Navbar } from "../../../header";
import { CommentIcon, FluentIcon, LikeIcon, TruckIcon } from "../../../icons";
import HomeHelp from "../elements/HomeHelp";
import Categories from "./Categories";
import SpecialOffers from "./SpecialOffers";
import TOOLS1 from "../../../../public/assets/images/TOOLS1.png";
import TOOLS2 from "../../../../public/assets/images/TOOLS2.png";
import FeaturedProducts from "./FeaturedProducts";
import BestSeller from "./BestSeller";
import mobil from "../../../../public/assets/images/mobil.png";
import spell from "../../../../public/assets/images/spell.png";
import SpecialProducts from "./SpecialProducts";
import Latest from "./Latest";
import Information from "./Information";
import { GradientElement } from "../elements";
import BrandsCarosal from "./BrandsCarosal";
import Image from "next/image";
import Offer from "./Offer";

const MainSection = () => {
  return (
    <div className="pb-20">
      <div className="2xl:container grid-cols-4 grid md:px-[35px] lg:px-[75px] m-auto">
        <div className="col-span-1">
          <Categories />
          <SpecialOffers />
          <Latest />
          <Offer />
          <Information />
        </div>
        <div className="col-span-3">
          <div className="w-[100%]">
            <MainCarousel />
            <div className="flex justify-around lg:flex sm:hidden items-center border mt-10 py-2">
              <HomeHelp
                image={<TruckIcon className="w-12 fill-yellow-950" />}
                title="Free Delivery"
                desc="On Orders of $100"
              />
              <HomeHelp
                image={<CommentIcon className="w-10 fill-yellow-950" />}
                title="99% Customers"
                desc="Feedbacks"
              />
              <HomeHelp
                image={<FluentIcon className="w-10 fill-yellow-950" />}
                title="Only Best"
                desc="Brands"
              />
              <HomeHelp
                image={<LikeIcon className="w-10 fill-yellow-950" />}
                title="Easy Return"
                desc="100% Return Policy"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(229, 229, 229, 0.12) 1.56%, #EBEBEB 100%)",
                }}
                className=" py-2 px-2 flex mt-10"
              >
                <Image src={TOOLS1} alt="" />
                <div className="mt-5 px-4">
                  <span className="block font-semibold text-[#4A4A4A]">
                    TOOLS KIT
                  </span>
                  <span className="block text-2xl text-blue-950 font-semibold">
                    EQUIPMENTS
                  </span>
                  <span className="text-gray-1200 block font-semibold">
                    29pcs Tools & EQUIPMENTS
                  </span>
                  <span className="text-gray-1200 font-semibold text-xs">
                    ${" "}
                  </span>
                  <span className="text-red-950 font-bold">149.00 </span>
                  <span className="text-sm text-gray-1200">Only</span>
                </div>
              </div>

              <div
                style={{
                  background:
                    "linear-gradient(270deg, #ECECEC 0%, rgba(229, 229, 229, 0.12) 100%, rgba(229, 229, 229, 0.12) 100%)",
                }}
                className=" py-2 px-2 flex mt-10"
              >
                <Image src={TOOLS2} alt="" />
                <div className="mt-5 px-4">
                  <span className="block font-semibold text-[#4A4A4A]">
                    WEATHER PREP
                  </span>
                  <span className="block text-2xl text-blue-950 font-semibold">
                    ANTI FREEZE
                  </span>
                  <span className="text-yellow-1000 block font-semibold">
                    SCORE EVERYTHING FROM ANTIFREEZE TO REFRIGERANT & BEYOND
                  </span>
                </div>
              </div>
            </div>
            <FeaturedProducts />
            <BestSeller />
            <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(229, 229, 229, 0.12) 1.56%, #EBEBEB 100%)",
              }}
              className="w-full mt-10"
            >
              <div className="py-2 ml-5 flex justify-between ">
                <Image src={mobil} alt="" />
                <div className="text-center mt-16 space-y-2">
                  <span className="text-gray-950 text-xl font-semibold">
                    ESSENTIAL AUTO FLUIDS
                  </span>
                  <div className="border border-b-2 border-yellow-950 mx-6"></div>
                  <span className="text-3xl text-blue-950 block font-semibold">
                    BRAND NAME
                  </span>
                  <div className="border border-b-2 border-yellow-950 mx-6"></div>
                </div>
                <Image src={spell} alt="" />
              </div>
            </div>
            <SpecialProducts />
          </div>
        </div>
      </div>
      <div className="px-[75px] mt-10 2xl:container m-auto">
        <BrandsCarosal />
      </div>
    </div>
  );
};

export default MainSection;
