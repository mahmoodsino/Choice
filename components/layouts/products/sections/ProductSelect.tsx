import React, { useEffect } from "react";
//@ts-ignore
import Select, { StylesConfig, ActionMeta } from "react-select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderBySchema } from "../../../../helper/validation";
import { useRecoilState } from "recoil";
import {
  getProducts,
  OrderByAtom,
  ProductsAtom,
  QueryFiltersAtom,
} from "../../../../helper";
import { useRouter } from "next/router";

export interface optionType {
  value: string;
  label: string;
}
interface IFormInputs {
  orderBy: string;
}
const ProductSelect = () => {
  const [orderByState, setOrderByState] = useRecoilState(OrderByAtom);
  const [productsState, setProductsState] = useRecoilState(ProductsAtom);
  const [queryFilter,setQueryFilter]=useRecoilState(QueryFiltersAtom)
  const {replace,query}= useRouter()

  useEffect(() => {
    if(typeof(query.orderby)==="string"){
      //@ts-ignore
      setQueryFilter(prev => {
        return (
          {...prev,orderby: query.orderby}
        )
      })
    }

  },[query.orderby])



  const customStyles: StylesConfig<optionType> = {
    option: (provided: ActionMeta, state: ActionMeta) => ({
      ...provided,
      borderBottom: "1px solid #F8F8F8",
      color: state.isSelected ? "#373737" : "#373737",
    }),
    control: (base: ActionMeta) => ({
      ...base,
      "&:hover": { borderColor: "gray" },
      border: "1px solid black",
      boxShadow: "none",
      paddingTop: 5,
      paddingBottom: 5,
    }),
  };
  const {
    control,
  } = useForm<IFormInputs>({
    resolver: yupResolver(orderBySchema),
  });
  const route = useRouter().query;

  return (
    <div className="inline-block w-[100%]">
      <form>
        <Controller
          name="orderBy"
          control={control}
          render={({ field: { name, ref } }) => {
            const handleSelectChange = async (
              selectedOption: optionType | null
            ) => {
              const res = await getProducts({
                orderBy: selectedOption?.label,
                AttributeValues: queryFilter.SelectedAttribute,
                Brands: queryFilter.SelectedBrands,
                categoryId: queryFilter.SelectedCategories,
                page: queryFilter.page,
                //@ts-ignore
                product_name: queryFilter.search,
              });
              if(selectedOption?.label!=null){
                replace(
                  {
                    query: { ...query, orderby: selectedOption?.label },
                  },
                  undefined,
                  {
                    scroll: false,
                  }
                );

                setQueryFilter(prev => {
                  return (
                    {...prev,orderby: selectedOption?.label}
                  )
                })
              }
            };
            return (
              <Select
                theme={(theme: ActionMeta) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: "gray",
                  },
                })}
                className="w-full  "
                ref={ref}
                name={name}
                placeholder="OrderByNewest"
                options={orderByState}
                onChange={handleSelectChange}
                styles={customStyles}
                isSearchable={false}
              />
            );
          }}
        />
      </form>
    </div>
  );
};

export default ProductSelect;
