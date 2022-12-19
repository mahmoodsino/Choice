import React from "react";
import { Latest, Offer } from "../../home";
import Attributes from "./Attributes";
import Brands from "./Brands";
import ProductCategory from "./ProductCategory";
import Promotions from "./Promotions";

const Fillters = () => {
  return (
    <div>
      <ProductCategory />
      <Promotions />
      <Brands />
      <Attributes />
      <div className="sm:hidden lg: block">
      <Latest />

      </div>
      <Offer />
    </div>
  );
};

export default Fillters;
