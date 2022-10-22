import React, { useState } from "react";
import BaseButton from "../../../buttons/BaseButton";
import BaseInput from "../../../inputs/BaseInput";
import { handelSendMessage, sendMessageSchema } from "../../../../helper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spinner } from "../../../spinner";
import { toast } from "react-toastify";

interface IFormInputs {
  name: string;
  email: string;
  companyName: string;
  subject: string;
  message: string;
}

const SendMessage = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(sendMessageSchema),
  });

  const submit = async (data: IFormInputs) => {
    setLoading(true);
    const res = await handelSendMessage({
      email: data.email,
      message: data.message,
      name: data.name,
      subject: data.subject,
      company_name: data.companyName,
    });
    if (res === null) {
      setLoading(false);
      toast.error("some thing went wrong");
    } else {
      setLoading(false);
      toast.success(res.message);
    }
  };

  return (
    <div className="bg-gray-1450">
      <form onSubmit={handleSubmit(submit)}>
        <div className="px-5 py-5">
          <span className="block text-lg font-bold ">Send Message</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur{" "}
          </span>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 px-5 py-3 gap-4">
            <div>
              <BaseInput
                name="name"
                register={register}
                placeholder="Full Name "
              />
              <p className="text-xs text-red-950">{errors.name?.message}</p>
            </div>
            <div>
              <BaseInput
                name="email"
                register={register}
                placeholder="Email Address "
              />
              <p className="text-xs text-red-950">{errors.email?.message}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 px-5 pb-3 gap-4">
            <BaseInput
              name="companyName"
              register={register}
              placeholder="Company Name"
            />
            <BaseInput
              name="subject"
              register={register}
              placeholder="Subject "
            />
          </div>
          <div className="px-5">
            <textarea
              {...(register && { ...register("message") })}
              placeholder="Message"
              className="w-full resize-none h-20 px-5 py-3 border border-[#AEAEAE]  outline-none"
            />
            <p className="text-xs text-red-950">{errors.message?.message}</p>
          </div>
          {!loading ? (
            <BaseButton
              type="submit"
              className="px-4 rounded-full py-1 bg-yellow-950 mx-5 my-5 text-white text-lg font-bold"
              title="Send Message"
            />
          ) : (
            <Spinner className="w-[76px]" />
          )}
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
