import React, { ChangeEvent } from "react";

interface Props {
  type?: "search" | "email" | "password" | "number" | "date" | "text";
  value?: string;
  className?: string | undefined;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  title?: string | undefined;
  id?:any
  name?: string;
  register?:any
  disabled?:boolean
}

const BaseInput = ({
  type,
  value,
  className,
  placeholder,
  onChange,
  title,
  id,
  name,
  disabled,
  register
}: Props) => {
  return (
    <div className="w-full  ">
      {title &&  <label htmlFor={title} className="capitalize w-fit flex  ml-0 text-gray-950 tracking-wide text-sm font-semibold mb-2 ">
        {title}
      </label>}
      <input
      id={id}
        onChange={onChange}
        className={`${
          className
            ? className
            : " w-full border py-2 border-[#AEAEAE] px-3 outline-none"
        }`}
        value={value}
        type={type ? type : "text"}
        placeholder={placeholder}
        name={name}
        {...register && {...register(name)}}
        disabled={disabled}
      />
      
    </div>
  );
};

export default BaseInput;
