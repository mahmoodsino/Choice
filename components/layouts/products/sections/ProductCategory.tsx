import React from "react";
import Collapsible from "react-collapsible";
import { ArrowIcon } from "../../../icons";

const Category = [
  "Cat1",
  "Cat2",
  "Cat3",
  "Cat4",
  "Cat5",
  "Cat6",
  "Cat7",
  "Cat8",
];

const ProductCategory = () => {
  return (
    <div className="w-[90%] mt-14">
      <Collapsible
        trigger={
          <div className="flex justify-between items-center bg-gray-1350 py-1.5 px-3">
            <span>Categories</span>
            <ArrowIcon className="w-3 fill-black" />
          </div>
        }
      >
        {Category.map((item) => {
          return (
            <div className=" bg-gray-1350 px-3" >
              <label className="shopContainer flex items-center m-0   pt-2 py-2 font-semibold">
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
