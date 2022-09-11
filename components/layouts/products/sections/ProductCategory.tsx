import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { ArrowIcon } from "../../../icons";
import { v4 } from "uuid";
import { BaseButton } from "../../../buttons";
const Category = ["Cat1","Cat2","Cat3","Cat4","Cat5","Cat6","Cat7","Cat8",
];

const ProductCategory = () => {
  const [openCategories,setOpenCategory]=useState(true)
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
        {Category.map((item) => {
          return (
            <div key={v4()} className=" bg-gray-1350 px-3" >
              <label className="shopContainer flex items-center   pt-3 py-2 font-semibold">
                {item}
                <input
                  className="checkbox"
                  type="checkbox"
                />
                <span className="text-sm  shopCheckmark"></span>
              </label>
            </div>
          );
        })}
      </Collapsible>
    </div>
  );
};

export default ProductCategory;
