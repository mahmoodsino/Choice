import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accountSchema, UserInfoAtom } from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { BaseInput } from "../../../inputs";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  state: string;
  zipCode: string;
}

const FormSection = () => {
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);

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
    if(userInfo?.id){
      setValue("firstName",userInfo.first_name)
      setValue("lastName",userInfo.last_name)
      setValue("email",userInfo.email)
    }
  },[])

  const submit = async (data: IFormInputs) => {
    console.log(data);
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
            <label htmlFor="State/Country" className="text-sm font-medium px-2">
              State/Country
            </label>
            <BaseInput name="state" register={register} id="State/Country" />
          </div>
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
          <BaseButton
            type="submit"
            className="px-9 rounded-full bg-blue-950 text-white font-semibold py-2 mt-5 "
            title="Save"
          />
        </div>
      </form>
    </div>
  );
};

export default FormSection;
