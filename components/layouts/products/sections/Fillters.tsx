import React from "react";
import { Latest, Offer } from "../../home";
import Attributes from "./Attributes";
import Brands from "./Brands";
import ProductCategory from "./ProductCategory";

const Fillters = () => {
  return (
    <div>
      <ProductCategory />
      <Brands />
      <Attributes />
      <Latest />
      <Offer />
    </div>
  );
};

export default Fillters;
