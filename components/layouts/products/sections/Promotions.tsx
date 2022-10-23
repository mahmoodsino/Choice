import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { useRecoilState } from "recoil";
import { PromotionsProductsAtom, QueryFiltersAtom } from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { ArrowIcon } from "../../../icons";

let selectPromotion: number;

const Promotions = () => {
  const [promotionsProducts, setPromotionsProducts] = useRecoilState(
    PromotionsProductsAtom
  );
  const [openBrands, setOpenBrands] = useState(true);
  const [queryFilter, setQueryFilter] = useRecoilState(QueryFiltersAtom);
  const { query, replace } = useRouter();


  useEffect (() => {
    if(typeof(query.promotion)!=="undefined"){
        setQueryFilter(prev => {
        return(
          //@ts-ignore
          {...prev,promotion:+(query.promotion)}
        )
      })
    }

  },[query.promotion])


  const handelPromotion = (PromptionNumber: number) => {
    if (queryFilter.promotion === PromptionNumber) {
      selectPromotion = 0;
      setQueryFilter((prev) => {
        return { ...prev, promotion: 0 };
      });
    } else {
      selectPromotion = PromptionNumber;
      setQueryFilter((prev) => {
        return {
          ...prev,
          promotion: PromptionNumber,
        };
      });
    }

    replace({ query: { ...query, promotion: selectPromotion } }, undefined, {
      scroll: false,
    });
  };

  return (
    <div
      className={`w-[90%] mt-8 ${
        promotionsProducts.length !== 0 ? "" : "hidden"
      }`}
    >
      <Collapsible
        open={openBrands}
        trigger={
          <BaseButton
            onClick={() => setOpenBrands(!openBrands)}
            className="flex w-full justify-between items-center bg-gray-1350 py-1.5 px-3"
          >
            <span>Promotions</span>
            <ArrowIcon
              className={`w-3  fill-black transition-all duration-300 ease-in-out  ${
                openBrands ? "" : "rotate-180"
              }`}
            />
          </BaseButton>
        }
      >
        <div className=" flex flex-col justify-between  text-sm tracking-[0.03em] cursor-pointer max-h-96  overflow-y-auto px-3 bg-gray-1350">
          {promotionsProducts.map((promotion) => {
            return (
              <div className="" key={promotion.id}>
                <label className="shopContainer flex items-center  border-b mt-0 mb-0 py-2">
                  {promotion.name}
                  <input
                    onChange={() => handelPromotion(promotion.id)}
                    checked={
                      queryFilter.promotion === promotion.id ? true : false
                    }
                    className="checkbox"
                    type="checkbox"
                  />
                  <span className="text-sm  shopCheckmark"></span>
                </label>
              </div>
            );
          })}
        </div>
      </Collapsible>
    </div>
  );
};

export default Promotions;
