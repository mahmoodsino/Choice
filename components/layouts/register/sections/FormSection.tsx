import React, { useState } from "react";
import { BaseButton } from "../../../buttons";
import { BaseInput } from "../../../inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../../helper/validation";
import { handelRegister, TokenAtom, YouHaveItemsModalAtom } from "../../../../helper";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { YouHaveItemInCartModal } from "../../../you-have-item-modal";
import { Spinner } from "../../../spinner";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const FormSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [token,setToken]=useRecoilState(TokenAtom)
  const [guestUsrerId, setGuestUserId] = useState<number | null>(null);
  const{push}=useRouter()
  const [openYouHaveItemsModal, setYouHaveItemsModal] = useRecoilState(
    YouHaveItemsModalAtom
  );
  const [loading,setLoading]=useState(false)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const submitForm = async (data: IFormInputs) => {
    setLoading(true)
    const res = await handelRegister(data.firstName,data.lastName,data.email,data.password,token)
    console.log(res);
    
    if(res.message!=="Congratulation, you get your first  points"){
      alert(res.response.data.message)
      setLoading(false)
    }else{
      localStorage.setItem("token", res.result.token);
      localStorage.setItem("id", res.result.user.id);
      localStorage.setItem("email", res.result.user.email);
      localStorage.setItem("first_name", res.result.user.first_name);
      localStorage.setItem("last_name", res.result.user.last_name);
      localStorage.setItem("type", "user");
      setToken(res.result.token);
      if (res.result.guest_user_id === null) {
        push("./");
      } else if (res.result.guest_user_id !== null) {
        setGuestUserId(res.result.guest_user_id);
        setYouHaveItemsModal(true);
      }
      setLoading(false)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)} className="mt-10 space-y-2">
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
          <p className="text-xs text-red-950">{errors.firstName?.message}</p>
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
          <p className="text-xs text-red-950">{errors.lastName?.message}</p>
        </div>
        <div>
          <label htmlFor="Email" className="text-sm font-medium px-2">
            Email
          </label>
          <BaseInput
            name="email"
            register={register}
            id="Email"
            placeholder="johnsmith@hotmail.com"
            type="email"
          />
          <p className="text-xs text-red-950">{errors.email?.message}</p>
        </div>
        <div className="pb-8 relative">
          <label
            htmlFor="Create Password "
            className="text-sm font-medium px-2"
          >
            Create Password{" "}
          </label>
          <BaseInput
            name="password"
            register={register}
            id="Create Password "
            placeholder="***************"
            type={!showPassword ? `password` : "text"}
          />
          <BaseButton
            onClick={() => setShowPassword(!showPassword)}
            className="underline absolute top-8 right-8 "
            title="SHOW"
          />
          <p className="text-xs text-red-950">{errors.password?.message}</p>
        </div>

        <div className=" m-auto flex justify-center">
          {!loading ?
           <BaseButton
             type="submit"
             className=" px-7 py-1.5 rounded-full bg-blue-950 text-white font-semibold  "
             title="Create account"
           /> : 
           <div>
            <Spinner className="w-9" />
           </div>
           
          }

        </div>
      </form>
      <YouHaveItemInCartModal guest_user_id={guestUsrerId} />

    </div>
  );
};

export default FormSection;
