import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  accountSchema,
  CitiesAtom,
  CountriesAtom,
  countryType,
  StateAtom,
  TokenAtom,
  UserInfoAtom,
} from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { BaseInput } from "../../../inputs";
//@ts-ignore
import Select, { ActionMeta, StylesConfig } from "react-select";
import {
  getCitesOfState,
  getStateOfCountry,
} from "../../../../helper/sever/address-info";
import { handelUpdateUserInfo } from "../../../../helper/sever/user/update-user-info";
import { toast } from "react-toastify";
import { Spinner } from "../../../spinner";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  zipCode: string;
  countries: number;
  states: number;
  cities: string;
  cityId: number;
}

const FormSection = () => {
  const userInfo= useRecoilValue(UserInfoAtom);
  const [countryId, setCountryId] = useState<number | undefined>();
  const contries= useRecoilValue(CountriesAtom);
  const [statesOfCountry, setStatesOfCountry] = useRecoilState(StateAtom);
  const [loading, setLoading] = useState(false);
  const [stateId, setStateId] = useState<number | undefined>();
  const [cities, setCities] = useRecoilState(CitiesAtom);
  const token= useRecoilValue(TokenAtom);
  const [updateLoading, setUpdateLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(accountSchema),
  });

  useEffect(() => {
    if (userInfo?.id) {
      setValue("firstName", userInfo.first_name);
      setValue("lastName", userInfo.last_name);
      setValue("email", userInfo.email);
      setValue("company", userInfo.company_name);
      setValue("zipCode", userInfo?.address?.post_code);
      setValue("zipCode", userInfo?.address?.post_code);
    }
  }, []);

  const customStyles: StylesConfig<countryType> = {
    option: (provided: ActionMeta, state: ActionMeta) => ({
      ...provided,
      borderBottom: "1px solid #F8F8F8",
      color: state.isSelected ? "#373737" : "#373737",
      // paddingRight: 40,
    }),
    control: (base: ActionMeta) => ({
      ...base,
      "&:hover": { borderColor: "gray" },
      border: "1px solid #CCCCCC",
      boxShadow: "none",
      paddingTop: 3,
      paddingBottom: 4,
    }),
  };

  const submit = async (data: IFormInputs) => {
    setUpdateLoading(true);
    const res = await handelUpdateUserInfo({
      city_id: data.cityId,
      city_name: data.cities,
      country_id: data.countries,
      firstName: data.firstName,
      lastName: data.lastName,
      post_code: data.zipCode,
      token: token,
      company: data.company,
      state_id: data.states,
    });
    if (res === null) {
      toast.error("some thing went wrong");
    } else {
      toast.success("youy information has been updated succesfully");
    }
    setUpdateLoading(false);
  };

  return (
    <div className="text-left">
      <form onSubmit={handleSubmit(submit)} className="space-y-5">
        <div>
          <label htmlFor="First Name" className="text-sm font-medium px-2">
            First Name
          </label>
          <BaseInput
            name="firstName"
            register={register}
            id="First Name"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="Last Name" className="text-sm font-medium px-2">
            Last Name
          </label>
          <BaseInput
            name="lastName"
            register={register}
            id="Last Name"
            placeholder="Smith"
          />
        </div>
        <div>
          <label htmlFor="Email" className="text-sm font-medium px-2">
            Email Address
          </label>
          <BaseInput
            disabled={true}
            name="email"
            register={register}
            id="Email"
            placeholder="johnsmith@hotmail.com"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="Company" className="text-sm font-medium px-2">
            Company
          </label>
          <BaseInput
            name="company"
            register={register}
            id="Company"
            placeholder="Company name"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="Company" className="text-sm font-medium px-2">
              country
            </label>
            <Controller
              name="countries"
              control={control}
              render={({ field: { onChange, value, name, ref } }) => {
                const handleSelectChange = async (
                  selectedOption: countryType | null
                ) => {
                  setLoading(true);
                  if (selectedOption?.value !== undefined) {
                    setCountryId(+selectedOption?.value);
                    setStatesOfCountry([]);
                    const res = await getStateOfCountry(+selectedOption?.value);
                    let modifiedResponse = res.result;
                    modifiedResponse.map(
                      (item: { id: number; name: string }) => {
                        let statesValue = item.id.toString();
                        let StatesLabel = item.name;
                        let newStateStructure = {
                          label: StatesLabel,
                          value: statesValue,
                        };
                        setStatesOfCountry((prev) => [
                          ...prev,
                          newStateStructure,
                        ]);
                      }
                    );
                  }
                  setLoading(false);
                  onChange(selectedOption?.value);
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
                    placeholder="Countries"
                    options={contries}
                    onChange={handleSelectChange}
                    isSearchable={true}
                    styles={customStyles}
                  />
                );
              }}
            />
          </div>
          {typeof countryId === "number" && statesOfCountry.length > 0 ? (
            <div className={`${loading && "pointer-events-none"}`}>
              <label htmlFor="Company" className="text-sm font-medium px-2">
                State
              </label>
              <Controller
                name="states"
                control={control}
                render={({ field: { onChange, value, name, ref } }) => {
                  const handleSelectChange = async (
                    selectedOption: countryType | null
                  ) => {
                    setLoading(true);
                    if (selectedOption?.value !== undefined) {
                      setStateId(+selectedOption.value);
                      setCities([]);
                      const res = await getCitesOfState(+selectedOption.value);
                      let modifiedResponse = res.result;
                      modifiedResponse.map(
                        (item: { id: number; name: string }) => {
                          let cityValue = item.id.toString();
                          let cityLabel = item.name;
                          let newCitiesStructure = {
                            label: cityLabel,
                            value: cityValue,
                          };
                          setCities((prev) => [...prev, newCitiesStructure]);
                        }
                      );
                    }
                    setLoading(false);
                    onChange(selectedOption?.value);
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
                      placeholder="states"
                      options={statesOfCountry}
                      onChange={handleSelectChange}
                      isSearchable={true}
                      styles={customStyles}
                    />
                  );
                }}
              />
            </div>
          ) : typeof countryId === "number" && statesOfCountry.length === 0 ? (
            <div className={`${loading && "pointer-events-none"}`}>
              <BaseInput
                title="YourCity"
                placeholder="City"
                className={undefined}
                name="cities"
                register={register}
              />
            </div>
          ) : null}
          {typeof stateId === "number" && cities.length > 0 ? (
            <div className={`${loading && "pointer-events-none"}`}>
              <label htmlFor="Company" className="text-sm font-medium px-2">
                City
              </label>
              <Controller
                name="cityId"
                control={control}
                render={({ field: { onChange, value, name, ref } }) => {
                  const handleSelectChange = async (
                    selectedOption: countryType | null
                  ) => {
                    onChange(selectedOption?.value);
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
                      placeholder="cities"
                      options={cities}
                      onChange={handleSelectChange}
                      isSearchable={true}
                      styles={customStyles}
                    />
                  );
                }}
              />
            </div>
          ) : typeof stateId === "number" && cities.length === 0 ? (
            <div className={`${loading && "pointer-events-none"}`}>
              <BaseInput
                title="YourCity"
                placeholder="City"
                className={undefined}
                name="cities"
                register={register}
              />
            </div>
          ) : null}
          <div>
            <label
              htmlFor="Zip/postal code"
              className="text-sm font-medium px-2"
            >
              Zip/postal code
            </label>
            <BaseInput
              name="zipCode"
              register={register}
              id="Zip/postal code"
            />
          </div>
        </div>
        <div className="flex justify-center">
          {!updateLoading ? (
            <BaseButton
              type="submit"
              className="px-9 rounded-full bg-blue-950 text-white font-semibold py-2 mt-5 "
              title="Save"
            />
          ) : (
            <Spinner className="w-[60px]" />
          )}
        </div>
      </form>
    </div>
  );
};

export default FormSection;
