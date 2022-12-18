import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offers from "../../../../public/assets/images/offers.png";
import Image from "next/image";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { PromotionsAtom, QueryFiltersAtom } from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { useRouter } from "next/router";

const SpecialOffers = () => {
  const promotions= useRecoilValue(PromotionsAtom);
  const setQueryFilter = useSetRecoilState(QueryFiltersAtom);

  const {push} = useRouter()

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

  const handelSelectPromotion = (id:number) =>{
    setQueryFilter(prev=>{
      return(
        {...prev,promotion:id}
      )
    })
    push({
      pathname: '/products',
      query: { promotion:id},
  });
  }

  return (
    <div className={`md:w-[90%] sm:w-[70%] border mt-8 ${promotions.featured_promotions?.length!==0 ? "block" : "hidden"}`}>
      <span className="font-bold block m-0.5 px-2 py-2 bg-gray-1100">
        SPECIAL OFFERS
      </span>
      <Slider {...settings}>
        {promotions.featured_promotions?.map((promotion, i) => {
          return (
            <BaseButton onClick={() => handelSelectPromotion(promotion?.id)} key={i} className="text-center">
              <span className="font-semibold text-blue-950 block  text-[28px]">
                {promotion?.name}
              </span>
              <span className="text-xs text-gray-1200 ">
                {promotion?.short_description}
              </span>
              <div>
                <span className="font-bold text-gray-1200 ">UP TO </span>
                <span className="text-2xl text-red-800 font-bold">
                  {promotion?.percentage_amount}%
                </span>
                <span className="text-xs text-gray-1200 font-bold">OFF</span>
              </div>
              <div className="relative w-fit m-auto">
                <Image className="" src={offers} alt="" />
                <span className="absolute w-fit h-fit top-0 bottom-0 right-0 left-0 m-auto text-white text-lg font-semibold ">
                  {promotion?.name}
                </span>
              </div>
            </BaseButton>
          );
        })}
      </Slider>
    </div>
  );
};

export default SpecialOffers;
