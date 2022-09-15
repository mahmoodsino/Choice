import React, { useEffect } from "react";
import { MainCarousel } from "../../../carousel";
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
import BrandsCarosal from "./BrandsCarosal";
import Image from "next/image";
import Offer from "./Offer";
import { getHomeInfo, HomePageAtom } from "../../../../helper";
import { useRecoilState } from "recoil";

const MainSection = () => {
  const [homePageState, setHomePageState] = useRecoilState(HomePageAtom);

  useEffect(() => {
    const getData = async () => {
      const res = await getHomeInfo();
      if (res == null) {
        alert("some thing went wrong");
      } else setHomePageState(res.result);
    };
    getData();
  }, []);

  return (
    <div className="pb-20">
      <div className="2xl:container lg:grid-cols-4 lg:grid md:px-[35px] sm:px-[10px] lg:px-[75px] m-auto">
        <div className="col-span-1 lg:block sm:hidden">
          <Categories />
          <SpecialOffers />
          <Latest />
          <Offer />
          <Information />
        </div>
        <div className="col-span-3">
          <div className="w-[100%]">
            <MainCarousel />
            <div className="flex justify-around lg:flex sm:hidden items-center border mt-10 ">
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
            <div className="grid lg:grid-cols-2 lg:gap-3">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(229, 229, 229, 0.12) 1.56%, #EBEBEB 100%)",
                }}
                className=" py-2 px-2 flex mt-10 " 
              >
                <div className="w-[150px] h-[150px]">

                <Image  src={TOOLS1} alt="" />
                </div>
                <div className="mt-5 px-4">
                  <span className="block font-semibold text-[#4A4A4A]">
                    TOOLS KIT
                  </span>
                  <span className="block md:text-2xl text-blue-950 font-semibold">
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
                className=" py-2 px-2 flex mt-10 product-slider"
              >
                <div className="w-[150px] h-[150px]">

                <Image  src={TOOLS2} alt="" />
                </div>
                <div className="mt-5 px-4">
                  <span className="block font-semibold text-[#4A4A4A]">
                    WEATHER PREP
                  </span>
                  <span className="block md:text-2xl text-blue-950 font-semibold">
                    ANTI FREEZE
                  </span>
                  <span className="text-yellow-1000 block sm:text-xs md:text-base font-semibold">
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
              <div className="py-2 ml-5 md:flex justify-between ">
              <div className="text-center sm:block md:hidden mt-16 space-y-2 sm:mb-5">
                  <div>
                    <span className="text-gray-950 text-xl font-semibold  border-b-4 border-b-yellow-950">
                      ESSENTIAL AUTO FLUIDS
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl text-blue-950  font-semibold  border-b-4 border-b-yellow-950">
                      BRAND NAME
                    </span>
                  </div>
                </div>
                <div className="m-auto sm:flex sm:justify-center">
                    <Image src={mobil} alt="" />

                </div>
                <div className="text-center sm:hidden md:block mt-16 space-y-2 sm:mb-5">
                  <div>
                    <span className="text-gray-950 text-xl font-semibold  border-b-4 border-b-yellow-950">
                      ESSENTIAL AUTO FLUIDS
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl text-blue-950  font-semibold  border-b-4 border-b-yellow-950">
                      BRAND NAME
                    </span>
                  </div>
                </div>
                <div className="sm:hidden md:block">
                  <Image src={spell} alt="" />
                </div>
              </div>
            </div>
            <SpecialProducts />
          </div>
        </div>
      </div>
      <div className="sm:flex justify-center  md:px-72 lg:hidden">
        <SpecialOffers />
      </div>
      <div className="lg:px-[75px] sm:px-[20px] md:px-[35px] mt-10 2xl:container m-auto">
        <BrandsCarosal />
      </div>
    </div>
  );
};

export default MainSection;
