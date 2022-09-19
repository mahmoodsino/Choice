import React from "react";
import { ProductsType } from "../../../../helper";
import { BaseCard } from "../../../card";

interface Props {
  products: ProductsType[];
}

const RelatedProducts = ({ products }: Props) => {
  return (
    <div className="  lg:mt-14 sm:mt-5">
      <span className="text-4xl block  text-center font-semibold">
        RELATED PRODUCTS
      </span>
      {products.length > 0 ? (
        <div className="grid lg:grid-cols-5 sm:gap-2 lg:gap-4 md:grid-cols-3 sm:grid-cols-2  mt-10 ">
          {products.map((item) => {
            return (
              <BaseCard
                width="300px"
                key={item.id}
                description={item.short_description}
                id={item.id}
                name={item.name}
                img={item.images}
                price={item.variation.price}
                variationId={item.variation.id}
              />
            );
          })}
        </div>
      ) : (
        <span className="text-lg font-semibold text-center block tracking-[0.11em] mt-10 uppercase">
          there are no related products
        </span>
      )}
    </div>
  );
};

export default RelatedProducts;
