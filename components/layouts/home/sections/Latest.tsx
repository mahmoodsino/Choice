import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { getLatestProducts, ProductsType, TokenAtom } from "../../../../helper";
import { LatestElement } from "../elements";

const Latest = () => {
  const token = useRecoilValue(TokenAtom);
  const [latestProducts, setLatestProducts] = useState<ProductsType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getLatestProducts(token);
      if (res === null) {
        toast.error("some thing went wrong");
      } else {
        setLatestProducts(res.result.items);
      }
    };
    getData();
  }, []);

  return (
    <div className="border  mt-8 w-[90%] ">
      <span className="font-bold block m-0.5 px-2 py-2 bg-gray-1100">
        LATEST
      </span>
      {latestProducts.map((item, i) => {
        return (
          <LatestElement
            key={i}
            name={item.name}
            description={item.short_description}
            price={item.variation.price}
            id={item.id}
            image={item?.images[0]?.path}
            variationId={item.variation.id}
          />
        );
      })}
    </div>
  );
};

export default Latest;
