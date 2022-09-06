import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offers from "../../../../public/assets/images/offers.png"
import Image from "next/image";

const SpecialOffers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    rows: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "button__bar_offers",
  };
  return (
    <div className="w-[90%] border mt-14">
      <span className="font-bold block m-0.5 px-2 py-2 bg-gray-1100">
        SPECIAL OFFERS
      </span>
      <Slider {...settings}>
        <div key={1} className="text-center">
          <span className="font-semibold text-blue-950 block  text-[28px]">
            WIPERS
          </span>
          <span className="text-xs text-gray-1200 ">LAST 2 DAYS</span>
          <div>
            <span className="font-bold text-gray-1200 ">UP TO </span>
            <span className="text-2xl text-red-800 font-bold">30%</span>
            <span className="text-xs text-gray-1200 font-bold">OFF</span>
          </div>
          <div className="relative">
            <Image className="" src={offers} alt="" />
            <span className="absolute top-[40%] left-[30%] text-white text-lg font-semibold ">WIPERS 10</span>
          </div>
        </div>
        <div key={2} className="text-center">
            
        <span className="font-semibold text-blue-950 block  text-[28px]">
            WIPERS
          </span>
          <span className="text-xs text-gray-1200 ">LAST 2 DAYS</span>
          <div>
            <span className="font-bold text-gray-1200 ">UP TO </span>
            <span className="text-2xl text-red-800 font-bold">30%</span>
            <span className="text-xs text-gray-1200 font-bold">OFF</span>
          </div>
          <div className="relative">
            <Image className="" src={offers} alt="" />
            <span className="absolute top-[40%] left-[30%] text-white text-lg font-semibold ">WIPERS 10</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SpecialOffers;
