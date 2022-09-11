import React from "react";
import { ProductsType } from "../../../../helper";
import { BaseCard } from "../../../card";

interface Props {
  products: ProductsType[];
}

const RelatedProducts = ({ products }: Props) => {
  return (
    <div className="  mt-14">
      <span className="text-4xl block  text-center font-semibold">
        RELATED PRODUCTS
      </span>
      {products.length > 0 ? (
        <div className="sm:grid md:grid-cols-3 sm:grid-cols-2 lg:flex lg:justify-center mt-10 space-x-3">
          {products.map((item) => {
            return (
              <BaseCard
                key={item.id}
                description={item.short_description}
                id={item.id}
                name={item.name}
                img={item.images[0]?.path}
                price={item.variation.price}
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
