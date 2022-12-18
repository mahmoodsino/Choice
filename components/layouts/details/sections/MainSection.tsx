import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import {
  DetailsAtom,
  getProductDetails,
  getSimilarProducts,
  ProductsType,
} from "../../../../helper";
import { Spinner } from "../../../spinner";
import DetailsCard from "./DetailsCard";
import DetailsProductPhoto from "./DetailsProductPhoto";
import MoveToCartPageModal from "./MoveToCartPageModal";
import RelatedProducts from "./RelatedProducts";

const MainSection = () => {
  const [detailsState, setDetailsState] = useRecoilState(DetailsAtom);
  const [loading, setLoading] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState<ProductsType[]>([]);

  const route = useRouter().query;
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      if (route.product) {
        const res = await getProductDetails(+route.product);
        if (res === null) {
          toast.error("some thing went wrong");
        } else {
          setDetailsState(res.result);
        }
        const response = await getSimilarProducts(+route.product);
        if (response === null) {
          toast.error("some thing went wrong");
        } else {
          setRelatedProducts(response.result);
        }
      }
      setLoading(false);
    };
    getData();
  }, [route.product]);

  return (
    <div className="lg:px-[75px] md:px-[35px] sm:px-[10px] 2xl:container m-auto pb-40">
      {!loading ? (
        <div>
          <div className="lg:flex">
            <div className="lg:w-1/2 mt-10">
              <DetailsProductPhoto />
            </div>
            <div className="lg:w-1/2 sm:mt-40 lg:mt-10  lg:px-5">
              <DetailsCard />
            </div>
          </div>
          <div
            className={`lg:mt-28 bg-[#FBFBFB] py-5 px-5 ${
              detailsState.product?.description?.length !== 0 &&
              detailsState.product?.description !== null
                ? "block"
                : "hidden"
            }`}
          >
            <span className="font-bold text-lg">Product Infomation</span>
            <div className="h-0 w-[70%] border mt-2">
              <div className="ml-10 h-0 border border-black w-[15%]"></div>
            </div>
            <span className="text-sm  block mt-5">
              {detailsState.product?.description}
            </span>
          </div>
          <RelatedProducts products={relatedProducts} />
        </div>
      ) : (
        <div className="flex justify-center">
          <Spinner className="w-72" />
        </div>
      )}

      <MoveToCartPageModal />
    </div>
  );
};

export default MainSection;
