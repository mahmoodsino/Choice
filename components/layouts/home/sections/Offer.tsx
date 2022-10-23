import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { PromotionsAtom, QueryFiltersAtom } from "../../../../helper";

const Offer = () => {
  const [promotions, setPromotions] = useRecoilState(PromotionsAtom);
  const [queryFilter, setQueryFilter] = useRecoilState(QueryFiltersAtom);

  const { pathname, push, replace, query } = useRouter();

  const handelSelectPromotion = (id: number) => {
    setQueryFilter((prev) => {
      return { ...prev, promotion: id };
    });

    if (pathname === "/products") {
      replace({ query: { ...query, promotion: id } }, undefined, {
        scroll: false,
      });
    } else {
      push({
        pathname: "/products",
        query: { promotion: id },
      });
    }
  };

  return (
    <div
    onClick={() => handelSelectPromotion(promotions?.special_promotion?.id)}
      style={{
        background:
          "linear-gradient(180deg, #FFC700 0%, rgba(255, 199, 0, 0.48) 67.55%, rgba(255, 199, 0, 0.17) 100%)",
      }}
      className="w-[90%] mt-8 py-5 cursor-pointer"
    >
      <div className="text-center">
        <span className="text-3xl text-red-950 font-semibold">SAVE UP TO </span>
        <span className="text-4xl font-bold">
          {promotions?.special_promotion?.percentage_amount}%
        </span>
        <span className="text-[22px] text-gray-950 font-medium block mt-4">
          {promotions?.special_promotion?.name}
        </span>
      </div>
      <img src={promotions?.special_promotion?.image} alt="" />
    </div>
  );
};

export default Offer;
