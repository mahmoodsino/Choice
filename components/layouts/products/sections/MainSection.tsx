import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  AttributesProductsAtom,
  BrandsAtom,
  getProducts,
  handelFilterProduct,
  OrderByAtom,
  ProductsAtom,
  productsCategoreyAtom,
  SearchAtom,
  selectBrandAtom,
  SelectedAttributeAtom,
  SelectedProductsCategoryAtom,
  TokenAtom,
} from "../../../../helper";
import { BaseCard } from "../../../card";
import { Spinner } from "../../../spinner";
import { Latest, Offer } from "../../home";
import Attributes from "./Attributes";
import Brands from "./Brands";
import ProductCategory from "./ProductCategory";
import ProductSelect from "./ProductSelect";

const MainSection = () => {
  const [productsState, setProductsState] = useRecoilState(ProductsAtom);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [orderByState, setOrderByState] = useRecoilState(OrderByAtom);
  const [productsCategorey, setProductsCategory] = useRecoilState(
    productsCategoreyAtom
  );
  const [brands, setBrands] = useRecoilState(BrandsAtom);
  const [attributes, setAttributes] = useRecoilState(AttributesProductsAtom);

  const [selecterCategory, setSelectedCategory] = useRecoilState(
    SelectedProductsCategoryAtom
  );
  const [selectBrand, setSelectBrand] = useRecoilState(selectBrandAtom);
  const [selectedAttribute, setSelectedAttribute] = useRecoilState(
    SelectedAttributeAtom
  );

  const route = useRouter().query;

  useEffect(() => {
    const getData = async () => {
      const res = await handelFilterProduct();
      const modifieOrderBy: string[] = [...res.result.order_by_clauses];
      const result = modifieOrderBy.map((item, index) => ({
        label: item,
        value: index,
      }));
      setOrderByState(result);
      setProductsCategory(res.result.categories);
      setAttributes(res.result.attributes);
      setBrands(res.result.brands);
    };
    getData();
  }, []);

  useEffect(() => {
    if (typeof route.categorey !== "undefined") {
      //@ts-ignore
      setSelectedCategory((prev) => [...prev, +route.categorey]);
    }
  }, [route.categorey]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getProducts({
        token: token,
      //@ts-ignore
        product_name: route.search,
        categoryId: selecterCategory,
        AttributeValues: selectedAttribute,
        Brands: selectBrand,
      });
      if (res === null) {
        alert("some thing went wrong");
      } else {
        setProductsState(res.result.items);
        setLoading(false);
      }
    };
    getData();
  }, [route.search, selecterCategory, selectBrand, selectedAttribute]);
  return (
    <div className="2xl:container m-auto px-[75px] pb-10">
      {!loading ? (
        <div>
          <div className="flex justify-between  mt-10">
            <span className="font-medium block ">Products</span>
            <div className="border h-0 mt-3.5 border-yellow-950 w-[93%]"></div>
          </div>
          <div className="grid grid-cols-4 ">
            <div className="col-span-1 mt-10">
              <ProductCategory />
              <Brands />
              <Attributes />
              <Latest />
              <Offer />
            </div>
            <div className="col-span-3 mt-5 ">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">124 Results</span>
                <ProductSelect />
              </div>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mt-7 gap-4">
                {productsState.map((item) => {
                  return (
                    <BaseCard
                      key={item.id}
                      description={item.short_description}
                      id={item.id}
                      name={item.name}
                      img={item.images[0]?.path}
                      price={item.variation.price}
                      variationId={item.variation.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Spinner className="w-72" />
        </div>
      )}
    </div>
  );
};

export default MainSection;
