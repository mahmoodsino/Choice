import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import BaseButton from "../../../buttons/BaseButton";

interface Props {
  name: string;
  description: string;
  price: number;
  id: number;
  variationId: number;
  image: string;
}
const LatestElement = ({
  name,
  description,
  price,
  id,
  variationId,
  image,
}: Props) => {
  console.log({ image });

  return (
    <Link href={`/details?product=${id}`}>
      <div className="py-3 border-b mx-3 cursor-pointer">
        <div className="flex  space-x-3">
          <div className="border w-24 h-24 product-slider-img">
            <img
              className="h-full product-slider-img"
              src={image ? image : "/alternative.png"}
              alt=""
            />
          </div>
          <div className="text-gray-1200 whitespace-nowrap">
            <span className="block font-semibold line-clamp w-[150px]">
              {name}{" "}
            </span>
            <span className="block font-semibold line-clamp w-[150px]">
              {description}
            </span>
            <span className="text-black font-bold block">${price}</span>
            <BaseButton className="font-medium" title="Add to Cart" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestElement;
