import { useRouter } from "next/router";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AttributesProductsAtom,
  BrandsAtom,
  getProducts,
  handelFilterProduct,
  OrderByAtom,
  ProductsAtom,
  productsCategoreyAtom,
  PromotionsProductsAtom,
  QueryFiltersAtom,
  TokenAtom,
  totalPagesAtom,
} from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { BaseCard } from "../../../card";
import { Pagination } from "../../../pagination";
import { Spinner } from "../../../spinner";
import FillterProductsMobile, {
  showFillterProductAtom,
} from "./FillterProductsMobile";
import Fillters from "./Fillters";
import ProductSelect from "./ProductSelect";

const MainSection = () => {
  const [productsState, setProductsState] = useRecoilState(ProductsAtom);
  const [loading, setLoading] = useState(true);
  const token = useRecoilValue(TokenAtom);
  const setOrderByState = useSetRecoilState(OrderByAtom);
  const setProductsCategory = useSetRecoilState(productsCategoreyAtom);
  const setBrands = useSetRecoilState(BrandsAtom);
  const setAttributes = useSetRecoilState(AttributesProductsAtom);
  const setShowFillterProducts = useSetRecoilState(showFillterProductAtom);
  const [totalPages, setTotalPages] = useRecoilState(totalPagesAtom);
  const [queryFilter, setQueryFilter] = useRecoilState(QueryFiltersAtom);
  const timerRef = useRef() as MutableRefObject<NodeJS.Timeout>;
  const setPromotionsProducts = useSetRecoilState(PromotionsProductsAtom);

  const { replace, query, push } = useRouter();

  useEffect(() => {
    if (typeof query.page !== "undefined") {
      setQueryFilter((prev) => {
        return (
          //@ts-ignore
          { ...prev, page: +query.page }
        );
      });
    }
  }, [query.page]);

  useEffect(() => {
    if (typeof query.search !== "undefined") {
      setQueryFilter((prev) => {
        return { ...prev, search: query.search };
      });
    }
  }, [query.search]);

  useEffect(() => {
    const leave = () => {
      console.log("vndlk");
      setQueryFilter({
        SelectedBrands: [],
        SelectedCategories: [],
        page: 1,
        SelectedAttribute: {} as { [key: number]: number[] },
        search: "",
        orderby: "OrderByNewest",
        promotion: 0,
      });
    };
    return () => leave();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await handelFilterProduct();
      if (res === null) {
        toast.error("some thing went wrong");
      } else {
        const modifieOrderBy: string[] = [...res.result.order_by_clauses];
        const result = modifieOrderBy.map((item, index) => ({
          label: item,
          value: index,
        }));
        setOrderByState(result);
        setProductsCategory(res.result.categories);
        setAttributes(res.result.attributes);
        setBrands(res.result.brands);
        setPromotionsProducts(res.result.promotions);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await getProducts({
        token: token,
        //@ts-ignore
        product_name: queryFilter.search,
        categoryId: queryFilter.SelectedCategories,
        AttributeValues: queryFilter.SelectedAttribute,
        Brands: queryFilter.SelectedBrands,
        page: queryFilter.page,
        orderBy: queryFilter.orderby,
        promotion: queryFilter.promotion,
      });
      if (res === null) {
        toast.error("some thing went wrong");
      } else {
        setTotalPages(res.result.pages_count);
        setProductsState(res.result.items);
        setLoading(false);
      }
    };
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      getData();
    }, 700);
  }, [queryFilter]);

  const paginate = (pageNumber: number) => {
    replace({ query: { ...query, page: pageNumber } }, undefined, {
      scroll: true,
    });

    setQueryFilter((prev) => {
      return { ...prev, page: pageNumber };
    });
  };

  return (
    <div className="2xl:container m-auto lg:px-[75px] md:px-[35px] sm:px-[px] pb-10">
      <div>
        <div className="flex justify-between  mt-10 sm:ml-3 md:ml-0">
          <span className="font-medium block ">Products</span>
          <div className="border h-0 mt-3.5 sm:hidden lg:block border-yellow-950 w-[93%]"></div>
        </div>
        <div className="grid lg:grid-cols-4  md:ml-0 ">
          <div className="col-span-1 mt- ml-3 sm:hidden lg:block">
            <Fillters />
          </div>
          <div className="col-span-3 mt-5 ">
            <div className="flex justify-between ml-3 items-center ">
              <span className="text-lg font-semibold whitespace-nowrap">
                {productsState?.length * totalPages} Results
              </span>
              <div className="md:w-[30%] sm:w-[50%]">
                <ProductSelect />
              </div>
            </div>
            <BaseButton
              onClick={() => setShowFillterProducts(true)}
              className="px-4 ml-3 py-1 sm:block lg:hidden text-white font-semibold rounded-full bg-blue-950"
              title="Fillters"
            />
            {!loading ? (
              <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  mt-7 sm:gap-1 lg:gap-2">
                {productsState.map((item) => {
                  return (
                    <BaseCard
                      width="100%"
                      key={item.id}
                      description={item.short_description}
                      id={item.id}
                      name={item.name}
                      img={item.images}
                      price={item.variation.price}
                      variationId={item.variation.id}
                      available_quantity={item.variation.available_quantity}
                      inStock={item.variation.in_stock}
                      tracking_type={item.tracking_type}
                    />
                  );
                })}
              </div>
            ) : (
              <div>
                <Spinner className="w-32" />
              </div>
            )}
            {productsState.length == 0 && !loading && (
              <h4 className="text-center text-lg font-bold text-red-950 ">
                no products Available
              </h4>
            )}
            {totalPages > 1 && <Pagination paginate={paginate} />}
          </div>
        </div>
      </div>
      <FillterProductsMobile />
    </div>
  );
};

export default MainSection;
