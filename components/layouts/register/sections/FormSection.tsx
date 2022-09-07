import React, { useState } from "react";
import { BaseButton } from "../../../buttons";
import { BaseInput } from "../../../inputs";

const FormSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <form className="mt-10 space-y-2">
        <div>
          <label htmlFor="First Name" className="text-sm font-medium px-2">
            First Name
          </label>
          <BaseInput id="First Name" placeholder="John" />
        </div>
        <div>
          <label htmlFor="Last Name" className="text-sm font-medium px-2">
            Last Name
          </label>
          <BaseInput id="Last Name" placeholder="Smith" />
        </div>
        <div>
          <label htmlFor="Email" className="text-sm font-medium px-2">
            Email
          </label>
          <BaseInput
            id="Email"
            placeholder="johnsmith@hotmail.com"
            type="email"
          />
        </div>
        <div className="pb-8 relative">
          <label
            htmlFor="Create Password "
            className="text-sm font-medium px-2"
          >
            Create Password{" "}
          </label>
          <BaseInput
            id="Create Password "
            placeholder="***************"
            type={!showPassword ? `password` : "text"}
          />
          <BaseButton
            onClick={() => setShowPassword(!showPassword)}
            className="underline absolute top-8 right-8 "
            title="SHOW"
          />
        </div>

        <div className=" m-auto flex justify-center">
          <BaseButton
            className=" px-7 py-1.5 rounded-full bg-blue-950 text-white font-semibold  "
            title="Create account"
          />
        </div>
      </form>
    </div>
  );
};

export default FormSection;
