import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  ErorrMessageAtom,
  handelItemGuestToUser,
  handelLogin,
  loginCheckSchema,
  OpenMessageModalAtom,
  TokenAtom,
} from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { BaseInput } from "../../../inputs";
import { Spinner } from "../../../spinner";

interface IFormInputs {
  email: string;
  password: string;
}

const FormSection = () => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const [loading, setLoading] = useState(false);
  const setOpenMassegModal = useSetRecoilState(OpenMessageModalAtom);
  const setErorrMessage = useSetRecoilState(ErorrMessageAtom);
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(loginCheckSchema),
  });

  const handelLog = async (data: IFormInputs) => {
    setLoading(true);
    const res = await handelLogin(data.password, data.email, token);
    if (!res.ok) {
      setErorrMessage(res?.message);
      setOpenMassegModal(true);
      setLoading(false);
    } else {
      if (res?.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("id", res.user.id);
        localStorage.setItem("email", res.user.email);
        localStorage.setItem("type", res.user.type);
        localStorage.setItem("first_name", res.user.first_name);
        localStorage.setItem("last_name", res.user.last_name);

        if (res.guest_user_id === null) {
          push("./cart");
        } else if (res.guest_user_id !== null) {
          const response = await handelItemGuestToUser(
            token,
            res.guest_user_id
          );
          if (response === null) {
            setErorrMessage("some thing went wrong");
            setOpenMassegModal(true);
          } else {
            push("./cart");
          }
        }
      }
      setToken(res.token);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handelLog)}>
        <div className="text-left">
          <label htmlFor="Email" className="text-sm font-medium  py-2">
            Email
          </label>
          <BaseInput name="email" register={register} id="Email" type="email" />
          <p className="text-xs text-red-950">{errors.email?.message}</p>
        </div>
        <div className="text-left mt-5">
          <label htmlFor="Password" className="text-sm font-medium  py-2">
            Password
          </label>
          <BaseInput
            name="password"
            register={register}
            id="Password"
            type="password"
          />
          <p className="text-xs text-red-950">{errors.password?.message}</p>
        </div>
        <div className="flex justify-between mt-3 items-center ">
          <Link href="/resetpassword">
            <a className="text-xs font-medium text-gray-1500">
              Forgot your password?
            </a>
          </Link>
          {!loading ? (
            <BaseButton
              type="submit"
              className="px-7 py-1.5  bg-yellow-950 rounded-full"
              title="Checkout"
            />
          ) : (
            <Spinner className="w-8" />
          )}
        </div>
      </form>
    </div>
  );
};

export default FormSection;
