import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { ArrowIcon } from "../../../icons";
import { BaseButton } from "../../../buttons";
import { useRecoilState, useRecoilValue } from "recoil";
import { BrandsAtom, QueryFiltersAtom } from "../../../../helper";
import { useRouter } from "next/router";

let SleBran: number[] = [];

const Brands = () => {
  const [openBrands, setOpenBrands] = useState(true);
  const brands = useRecoilValue(BrandsAtom);
  const [queryFilter, setQueryFilter] = useRecoilState(QueryFiltersAtom);
  const { replace, query } = useRouter();

  useEffect(() => {
    if (typeof query.brand !== undefined) {
      //@ts-ignore
      const q = query?.brand?.split("-");
      q?.map((item: string) => {
        let index: number = SleBran.findIndex((find) => find === +item);
        if (index < 0 && +item != 0) {
          SleBran = [...SleBran, +item];
        }
      });
    }
    setQueryFilter((prev) => {
      return {
        ...prev,
        SelectedBrands: SleBran,
      };
    });
  }, [query.brand]);

  useEffect(() => {
    let selCategory: number[] = queryFilter.SelectedCategories;
    if (typeof query.category !== undefined) {
      //@ts-ignore
      const q = query?.category?.split("-");
      q?.map((item: string) => {
        let index: number = selCategory.findIndex((find) => find === +item);
        if (index < 0 && +item != 0) {
          selCategory = [...selCategory, +item];
        }
      });
    }
    setQueryFilter((prev) => {
      return {
        ...prev,
        SelectedCategories: selCategory,
      };
    });
  }, [query.category]);

  const handeBrands = async (id: number) => {
    const index = SleBran.findIndex((brand) => brand === id);
    if (index < 0) {
      SleBran = [...SleBran, id];
    } else if (index >= 0) {
      SleBran = SleBran.filter((item) => item !== id);
    }

    let queryBrand = SleBran.map((item) => item).join("-");
    replace({ query: { ...query, brand: queryBrand } }, undefined, {
      scroll: false,
    });

    setQueryFilter((prev) => {
      return {
        ...prev,
        SelectedBrands: SleBran,
      };
    });
  };
  return (
    <div className={`w-[90%] mt-8 ${brands.length !== 0 ? "" : "hidden"}`}>
      <Collapsible
        open={openBrands}
        trigger={
          <BaseButton
            onClick={() => setOpenBrands(!openBrands)}
            className="flex w-full justify-between items-center bg-gray-1350 py-1.5 px-3"
          >
            <span>Brands</span>
            <ArrowIcon
              className={`w-3  fill-black transition-all duration-300 ease-in-out  ${
                openBrands ? "" : "rotate-180"
              }`}
            />
          </BaseButton>
        }
      >
        <div className=" flex flex-col justify-between  text-sm tracking-[0.03em] cursor-pointer max-h-96  overflow-y-auto px-3 bg-gray-1350">
          {brands.map((brand) => {
            return (
              <div className="" key={brand.id}>
                <label className="shopContainer flex items-center  border-b mt-0 mb-0 py-2">
                  {brand.name}
                  <input
                    onChange={() => handeBrands(brand.id)}
                    checked={
                      queryFilter.SelectedBrands.findIndex(
                        (bran) => bran === brand.id
                      ) > -1
                        ? true
                        : false
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

export default Brands;
