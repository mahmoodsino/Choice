import { useRouter } from "next/router";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import {
  AttributesProductsAtom,
  BrandsAtom,
  getProducts,
  handelFilterProduct,
  OrderByAtom,
  ProductsAtom,
  productsCategoreyAtom,
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
  const [token, setToken] = useRecoilState(TokenAtom);
  const [orderByState, setOrderByState] = useRecoilState(OrderByAtom);
  const [productsCategorey, setProductsCategory] = useRecoilState(
    productsCategoreyAtom
  );
  const [brands, setBrands] = useRecoilState(BrandsAtom);
  const [attributes, setAttributes] = useRecoilState(AttributesProductsAtom);
  const [showFillterProducts, setShowFillterProducts] = useRecoilState(
    showFillterProductAtom
  );
  const [totalPages, setTotalPages] = useRecoilState(totalPagesAtom);
  const [queryFilter,setQueryFilter]=useRecoilState(QueryFiltersAtom)
  const timerRef = useRef() as MutableRefObject<NodeJS.Timeout>;

  const route = useRouter().query;

  useEffect(() => {
    const leave = () => {
      setQueryFilter({
        SelectedBrands: [],
        SelectedCategories: [],
        page: 1,
        SelectedAttribute: {} as { [key: number]: number[] },
        search: "",
        orderby: "OrderByNewest",
      });
    };
    return () => {
      leave();
    };
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await handelFilterProduct();
      if(res===null){
        toast.error("some thing went wrong")
      }else{
        const modifieOrderBy: string[] = [...res.result.order_by_clauses];
        const result = modifieOrderBy.map((item, index) => ({
          label: item,
          value: index,
        }));
        setOrderByState(result);
        setProductsCategory(res.result.categories);
        setAttributes(res.result.attributes);
        setBrands(res.result.brands);
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
        Brands:queryFilter.SelectedBrands,
        page: queryFilter.page,
        orderBy:queryFilter.orderby
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
    }, 1000);
  }, [
   queryFilter,
  ]);

  const paginate = (pageNumber: number) =>{
    setQueryFilter((prev) => {
      return { ...prev, page: pageNumber };
    })
  }

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
                  124 Results
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
              {!loading ? 
              <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  mt-7 sm:gap-1 lg:gap-4">
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
              </div> : 
              <div>
                <Spinner className="w-32" />
              </div>
              
            }
              <Pagination paginate={paginate} />
            </div>
          </div>
        </div>
      <FillterProductsMobile />
    </div>
  );
};

export default MainSection;
