import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { ArrowIcon } from "../../../icons";
import { BaseButton } from "../../../buttons";
import { useRecoilState } from "recoil";
import { productsCategoreyAtom } from "../../../../helper";
import ShopTree from "./ShopTree";

const ProductCategory = () => {
  const [openCategories,setOpenCategory]=useState(true)
  const [productsCategorey, setProductsCategory] = useRecoilState(productsCategoreyAtom)

  return (
    <div className="w-[90%] mt-14">
      <Collapsible
      open={openCategories}
        trigger={
          <BaseButton onClick={() => setOpenCategory(!openCategories)} className="flex w-full justify-between items-center bg-gray-1350 py-1.5 px-3">
            <span>Categories</span>
            <ArrowIcon className={`w-3  fill-black transition-all duration-300 ease-in-out  ${openCategories ? "" : "rotate-180"}`} />
          </BaseButton>
        }
      >
        <ShopTree data={productsCategorey} />
      </Collapsible>
    </div>
  );
};

export default ProductCategory;
