import React from "react";
//@ts-ignore
import Select, { StylesConfig, ActionMeta } from "react-select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderBySchema } from "../../../../helper/validation";

export interface optionType {
  value: string;
  label: string;
}

interface IFormInputs {
  orderBy: string;
}

const orderByState = [{
    value:1,
    label :"older"
},{
    value:2,
    label :"older"
},{
    value:3,
    label :"older"
},{
    value:3,
    label :"older"
}]

const ProductSelect = () => {
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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(orderBySchema),
  });
  return (
    <div className="inline-block sm:w-[100%] md:w-[25%]  lg:w-[22%]">
      <form>
        <Controller
          name="orderBy"
          control={control}
          render={({ field: { name, ref } }) => {
            const handleSelectChange = async (
              selectedOption: optionType | null
            ) => {
              console.log(selectedOption);
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
                placeholder="Order By"
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