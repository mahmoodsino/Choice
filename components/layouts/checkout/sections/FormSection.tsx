import React, { useState } from "react";
import { BaseButton } from "../../../buttons";
import { BaseInput } from "../../../inputs";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  checkoutSchema,
  CitiesAtom,
  CountriesAtom,
  countryType,
  ErorrMessageAtom,
  OpenMessageModalAtom,
  StateAtom,
  TokenAtom,
} from "../../../../helper";
import { useRecoilState } from "recoil";
import {
  getCitesOfState,
  getStateOfCountry,
} from "../../../../helper/sever/address-info";
//@ts-ignore
import Select, { ActionMeta, StylesConfig } from "react-select";
import { toast } from "react-toastify";
import { Spinner } from "../../../spinner";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  cityId: string;
  state: string;
  postalCodel: number;
}

const FormSection = () => {
  const [countryId, setCountryId] = useState<number | undefined>();
  const [contries, setCountries] = useRecoilState(CountriesAtom);
  const [statesOfCountry, setStatesOfCountry] = useRecoilState(StateAtom);
  const [loading, setLoading] = useState(false);
  const [stateId, setStateId] = useState<number | undefined>();
  const [cities, setCities] = useRecoilState(CitiesAtom);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [payLoading, setPayLoading] = useState(false);
  const [openMessageModal, setOpenMassegModal] =
    useRecoilState(OpenMessageModalAtom);
  const [errorMessage, setErorrMessage] = useRecoilState(ErorrMessageAtom);

  const cardElementOptions = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
      base: {
        fontSize: "16px",
        fontSmoothing: "antialiased",
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238",
        },
      },
    },
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(checkoutSchema),
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

  const stripe = useStripe();
  const elements = useElements();

  const handelPay = async (data: IFormInputs) => {
    setPayLoading(true);
    const billingDetails = {
      name: `${data.firstName} ${data.lastName}`,
      email: `${data.email}`,
      address: {
        city: `${data.city}` || `${data.cityId}`,
        state: `${data.state}`,
        postal_code: `${data.postalCodel}`,
        // country:`${data.country}`
      },
    };
    const { data: clintSecrit } = await axios.post("/api/payment_intents", {
      amount: 5 * 100,
    });
    const cardElement = elements?.getElement(CardNumberElement);
    const paymentMethodReq = await stripe?.createPaymentMethod({
      type: "card",
      //@ts-ignore
      card: cardElement,
      billing_details: billingDetails,
    });

    const confirmCardPayment = await stripe?.confirmCardPayment(clintSecrit, {
      payment_method: paymentMethodReq?.paymentMethod?.id,
    });
    if (confirmCardPayment?.error) {
      //@ts-ignore
      setErorrMessage(confirmCardPayment?.error?.message);
      setOpenMassegModal(true);
    }
    if (confirmCardPayment?.paymentIntent) {
      toast.success(confirmCardPayment.paymentIntent.status);
    }
    setPayLoading(false);
  };

  return (
    <div className="text-left">
      <form
        onSubmit={handleSubmit(handelPay)}
        className={`space-y-5 ${loading && "pointer-events-none"}`}
      >
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
            name="email"
            register={register}
            id="Email"
            placeholder="johnsmith@hotmail.com"
            type="email"
          />
        </div>
        {/* <div>
          <label htmlFor="Company" className="text-sm font-medium px-2">
            Company
          </label>
          <BaseInput id="Company" placeholder="Company name" />
        </div> */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="State/Country" className="text-sm font-medium px-2">
              State/Country
            </label>
            <Controller
              name="country"
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
                  onChange(selectedOption?.label);
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
            <p className="text-xs text-red-900 ">{errors.country?.message}</p>
          </div>
          {typeof countryId === "number" && statesOfCountry.length > 0 ? (
            <div>
              <label className="text-sm font-medium px-2">States</label>
              <Controller
                name="state"
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
                    onChange(selectedOption?.label);
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
            <div>
              <BaseInput
                title="YourCity"
                placeholder="City"
                className={undefined}
                name="city"
                register={register}
              />
            </div>
          ) : null}
          {typeof stateId === "number" && cities.length > 0 ? (
            <div className="">
              <label className="text-sm font-medium px-2">cities</label>
              <Controller
                name="cityId"
                control={control}
                render={({ field: { onChange, value, name, ref } }) => {
                  const handleSelectChange = async (
                    selectedOption: countryType | null
                  ) => {
                    onChange(selectedOption?.label);
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
                name="city"
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
              name="postalCodel"
              register={register}
              id="Zip/postal code"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <label className="text-sm font-medium px-2">Card Number</label>
            <div className="border py-3 px-2 border-[#AEAEAE]">
              <CardNumberElement
              //@ts-ignore
              options={cardElementOptions} />
            </div>
          </div>
          <div className="">
            <label className="text-sm font-medium px-2">Expiry Date</label>
            <div className="border py-3 px-2 border-[#AEAEAE]">
              <CardExpiryElement />
            </div>
          </div>
          <div className="">
            <label className="text-sm font-medium px-2">CVC Number</label>
            <div className="border py-3 px-2 border-[#AEAEAE]">
              <CardCvcElement />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {!payLoading ? (
            <BaseButton
              type="submit"
              className="px-9 rounded-full bg-blue-950 text-white font-semibold py-2 mt-5 "
              title="Pay"
            />
          ) : (
            <Spinner className="w-16" />
          )}
        </div>
      </form>
    </div>
  );
};

export default FormSection;
