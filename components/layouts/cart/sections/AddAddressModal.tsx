import React, { useState } from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
//@ts-ignore
import Select, { ActionMeta, StylesConfig } from "react-select";
import {
  addressBookSchema,
  CitiesAtom,
  CountriesAtom,
  countryType,
  handelAddAddAress,
  ShippingAddressIdAtom,
  StateAtom,
  TokenAtom,
} from "../../../../helper";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BaseInput } from "../../../inputs";
import {
  getCitesOfState,
  getStateOfCountry,
} from "../../../../helper/sever/address-info";
import { BaseButton } from "../../../buttons";
import { Spinner } from "../../../spinner";
import { toast } from "react-toastify";

export const AddAddressModalAtom = atom<boolean>({
  key: "AddAddressModalAtom",
  default: false,
});

interface IFormInputs {
  addressName: string;
  address: string;
  countries: string;
  cities: string;
  zipPostalCode: number;
  houseBuildingNo: number;
  states: number;
  cityId: number;
}

const AddAddressModal = () => {
  const [addAddress, setAddressModal] = useRecoilState(AddAddressModalAtom);
  const [countryId, setCountryId] = useState<number | undefined>();
  const contries = useRecoilValue(CountriesAtom);
  const [statesOfCountry, setStatesOfCountry] = useRecoilState(StateAtom);
  const [loading, setLoading] = useState(false);
  const [stateId, setStateId] = useState<number | undefined>();
  const [cities, setCities] = useRecoilState(CitiesAtom);
  const token = useRecoilValue(TokenAtom);
  const [saveLoading, setSaveLoading] = useState(false);
  const setShippingAddressId = useSetRecoilState(ShippingAddressIdAtom);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(addressBookSchema),
  });

  const customStyles: StylesConfig<countryType> = {
    option: (provided: ActionMeta, state: ActionMeta) => ({
      ...provided,
      borderBottom: "1px solid #F8F8F8",
      color: state.isSelected ? "#373737" : "#373737",
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
    setSaveLoading(true);
    const res = await handelAddAddAress(
      data.addressName,
      data.address,
      data.countries,
      data.states,
      data.cityId,
      data.cities,
      data.zipPostalCode,
      data.houseBuildingNo,
      token
    );

    if (res === null) {
      toast.error("some thing went wrong");
    } else {
      setShippingAddressId(res.data.id);
    }
    setAddressModal(false);
    setSaveLoading(false);
  };

  return (
    <div className={`2xl:container `}>
      <>
        <div
          className={`${
            addAddress ? "top-0 z-50 " : "-top-[200%] invisible"
          } inset-0 sm:w-[95%] rounded-xl sm:h-[70vh] md:h-[90vh] overflow-y-auto bg-white md:w-[60%] lg:w-[40%] w-[50vw] h-fit left-0 right-0 top-0 bottom-0 mx-auto my-auto shadow-lg z-50 fixed transition-all duration-300 ease-in-out`}
        >
          <div
            className={`sm:px-5 md:px-16 py-10 ${
              loading && "pointer-events-none"
            }`}
          >
            <form onSubmit={handleSubmit(submit)} className="space-y-5">
              <BaseInput
                title="Address Nickname"
                placeholder="Work, home, etc.."
                className={undefined}
                name="addressName"
                register={register}
              />
              <p className="text-xs text-red-900 ">
                {errors.addressName?.message}
              </p>

              <BaseInput
                title="Address"
                placeholder=""
                className={undefined}
                name="address"
                register={register}
              />
              <p className="text-xs text-red-900 ">{errors.address?.message}</p>

              <div className="">
                <div>
                  <label className="capitalize w-fit flex  ml-0 text-gray-950 tracking-wide text-sm font-semibold mb-2 ">
                    Country
                  </label>
                  <Controller
                    name="countries"
                    control={control}
                    render={({ field: { onChange, value, name, ref } }) => {
                      const handleSelectChange = async (
                        selectedOption: countryType | null
                      ) => {
                        setCountryId(undefined);
                        setStateId(undefined);
                        setStatesOfCountry([]);
                        setCities([]);
                        setLoading(true);
                        if (selectedOption?.value !== undefined) {
                          setCountryId(+selectedOption?.value);
                          setStatesOfCountry([]);
                          const res = await getStateOfCountry(
                            +selectedOption?.value
                          );
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
                  <p className="text-xs text-red-900 ">
                    {errors.countries?.message}
                  </p>
                </div>

                {typeof countryId === "number" && statesOfCountry.length > 0 ? (
                  <div>
                    <label className="capitalize w-fit flex  ml-0 text-gray-950 tracking-wide text-sm font-semibold mb-2 ">
                      States
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
                            const res = await getCitesOfState(
                              +selectedOption.value
                            );
                            let modifiedResponse = res.result;
                            modifiedResponse.map(
                              (item: { id: number; name: string }) => {
                                let cityValue = item.id.toString();
                                let cityLabel = item.name;
                                let newCitiesStructure = {
                                  label: cityLabel,
                                  value: cityValue,
                                };
                                setCities((prev) => [
                                  ...prev,
                                  newCitiesStructure,
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
                ) : typeof countryId === "number" &&
                  statesOfCountry.length === 0 ? (
                  <div>
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
                  <div className="">
                    <label className="capitalize w-fit flex  ml-0 text-gray-950 tracking-wide text-sm font-semibold mb-2 ">
                      cities
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
                  <div>
                    <BaseInput
                      title="YourCity"
                      placeholder="City"
                      className={undefined}
                      name="cities"
                      register={register}
                    />
                  </div>
                ) : null}
              </div>
              <div className="grid lg:grid-cols-2 gap-3">
                <div>
                  <BaseInput
                    title="House/Building No."
                    placeholder="House/Building.."
                    className={undefined}
                    name="houseBuildingNo"
                    register={register}
                  />
                  <p className="text-xs text-red-900 ">
                    {errors.houseBuildingNo?.message}
                  </p>
                </div>

                <div>
                  <BaseInput
                    title="Zip / Postal Code"
                    placeholder="Zip "
                    className={undefined}
                    name="zipPostalCode"
                    register={register}
                  />
                  <p className="text-xs text-red-900 ">
                    {errors.zipPostalCode?.message}
                  </p>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                {!saveLoading ? (
                  <BaseButton
                    type="submit"
                    title="Save"
                    className="md:px-6 sm:px-3 py-2 border bg-blue-950 text-white font-medium"
                  />
                ) : (
                  <Spinner className="w-10" />
                )}
                <BaseButton
                  onClick={() => setAddressModal(false)}
                  title="Cancel"
                  className="md:px-6 cursor-pointer sm:px-3 py-2 border border-black font-medium"
                  type="button"
                />
              </div>
            </form>
          </div>
        </div>
        {addAddress ? (
          <div
            onClick={() => setAddressModal(false)}
            className="opacity-25 fixed inset-0 z-40 bg-black "
          ></div>
        ) : null}
      </>
    </div>
  );
};

export default AddAddressModal;
