import React, { useState } from "react";
import { BaseButton } from "../buttons";
import { BaseInput } from "../inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema, handelSendMessage } from "../../helper";
import { Spinner } from "../spinner";
import { toast } from "react-toastify";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const FotterContact = () => {
  const [loading,setLoading]=useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(contactSchema),
  });

  const submit = async (data:IFormInputs) => {
    setLoading(true)
    const res = await handelSendMessage({email:data.email,message:data.message,name:data.name})
    if(res===null){
      setLoading(false)
      toast("some thing went wrong")
    }else{
      setLoading(false)
      toast.success(res.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)} className=" sm:w-fit md:w-[100%]  ">
        <div className=" space-y-3 ">
          <BaseInput
            name="name"
            register={register}
            placeholder="NAME"
            className="outline-none bg-[#616161] px-2 py-1 w-[100%] inline-block"
          />
          <p className="text-xs text-red-950 ">{errors.name?.message}</p>
          <BaseInput
            name="email"
            register={register}
            placeholder="EMAIL ADDRESS"
            className="outline-none bg-[#616161] px-2 py-1 w-[100%] inline-block"
          />
          <p className="text-xs text-red-950 ">{errors.email?.message}</p>

        </div>
        <textarea
          {...(register && { ...register("message") })}
          placeholder="TYPE YOUR MESSAGE..."
          className="outline-none mt-3 bg-[#616161] px-2 py-1 w-[100%] resize-none"
        />
        
        <p className="text-xs text-red-950 ">{errors.message?.message}</p>
        {!loading ? 
        <BaseButton
          type="submit"
          className="w-[100%] bg-gray-1150 text-gray-1300 font-bold py-1 my-4 "
          title="SEND IT NOW"
        /> : 
        <div>
          <Spinner className="w-16" />
        </div>
        
      }
      </form>
    </div>
  );
};

export default FotterContact;
