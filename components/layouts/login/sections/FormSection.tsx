import React, { useState } from "react";
import { BaseButton } from "../../../buttons";
import { BaseInput } from "../../../inputs";
import GoogleButton from "react-google-button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState } from "recoil";
import {
  handelLogin,
  TokenAtom,
  YouHaveItemsModalAtom,
} from "../../../../helper";
import { useRouter } from "next/router";
import { loginSchema } from "../../../../helper/validation";
import { YouHaveItemInCartModal } from "../../../you-have-item-modal";
import { Spinner } from "../../../spinner";

interface IFormInputs {
  email: string;
  password: string;
}

const FormSection = () => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const [guestUsrerId, setGuestUserId] = useState<number | null>(null);
  const [openYouHaveItemsModal, setYouHaveItemsModal] = useRecoilState(
    YouHaveItemsModalAtom
  );
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const handelLog = async (data: IFormInputs) => {
    setLoading(true)
    const res = await handelLogin(data.password, data.email, token);
    if (!res.ok) {
      alert(res?.message);
      setLoading(false)
    } else {
      if (res?.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("id", res.user.id);
        localStorage.setItem("email", res.user.email);
        localStorage.setItem("type", res.user.type);
        localStorage.setItem("first_name", res.user.first_name);
        localStorage.setItem("last_name", res.user.last_name);

        setToken(res.token);
        if (res.guest_user_id === null) {
          push("./");
        } else if (res.guest_user_id !== null) {
          setGuestUserId(res.guest_user_id);
          setYouHaveItemsModal(true);
        }
        setLoading(false)
      }
    }
  };

  return (
    <div className="mt-5 borderb">
        <div>
          <form onSubmit={handleSubmit(handelLog)} className="border-b pb-5">
            <div className="text-left">
              <label htmlFor="Email" className="text-sm font-medium  py-2">
                Email
              </label>
              <BaseInput
                name="email"
                register={register}
                id="Email"
                type="email"
              />
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
            <div className="flex justify-between mt-6 items-center ">
              <Link href="/resetpassword">
                <a className="text-xs font-medium text-gray-1500">
                  Forgot your password?
                </a>
              </Link>
              {!loading ? 
              <BaseButton
                type="submit"
                className="px-7 py-1.5  bg-blue-950 text-white rounded-full"
                title="Sign in"
              /> : 
              <div>
                <Spinner className="w-9" />
              </div>
            }
            </div>
          </form>
          <div className="mt-5 flex justify-center">
            <GoogleButton
              type="light"
              onClick={() => {
                console.log("Google button clicked");
              }}
            />
          </div>

          <div className="mt-10  m-auto text-center space-y-4">
            <span className="block font-bold tracking-[0.08em]">
              Already have an account?
            </span>
            <Link href="/register">
              <a className="w-[100%] block tracking-[0.08em] border border-black py-2 font-semibold ">
                SIign up now
              </a>
            </Link>
          </div>
          <YouHaveItemInCartModal guest_user_id={guestUsrerId} />
        </div> 
      
    </div>
  );
};

export default FormSection;
