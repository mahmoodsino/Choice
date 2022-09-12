import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { ArrowIcon } from "../../../icons";
import { BaseButton } from "../../../buttons";
import { useRecoilState } from "recoil";
import { BrandsAtom, selectBrandAtom } from "../../../../helper";

const Brands = () => {
  const [openBrands, setOpenBrands] = useState(true);
  const [brands, setBrands] = useRecoilState(BrandsAtom);
  const [selectBrand, setSelectBrand] = useRecoilState(selectBrandAtom);


  const handeBrands =async (id: number) => {
    const index = selectBrand.findIndex((brand) => brand === id);
    if (index < 0) {
      setSelectBrand(prev => [...prev,id])
    } else if (index >= 0) {
      setSelectBrand(prev => prev.filter(item => item!==id))
    }

  };


  return (
    <div className="w-[90%] mt-8">
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
        <div className=" flex flex-col justify-between  text-sm tracking-[0.03em] cursor-pointer h-96  overflow-y-auto px-3 bg-gray-1350">
          {brands.map((brand) => {
            return (
              <div className="" key={brand.id}>
                <label className="shopContainer flex items-center  border-b mt-0 mb-0 py-2">
                  {brand.name}
                  <input
                    onChange={() => handeBrands(brand.id)}
                    checked={
                      selectBrand.findIndex((bran) => bran === brand.id) > -1
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
