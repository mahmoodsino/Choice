import React from "react";
import { BaseButton } from "../../../buttons";
import { BaseInput } from "../../../inputs";

const FormSection = () => {
  return (
    <div className="text-left">
      <form className="space-y-5">
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
            Email Address
          </label>
          <BaseInput
            id="Email"
            placeholder="johnsmith@hotmail.com"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="Company" className="text-sm font-medium px-2">
            Company
          </label>
          <BaseInput id="Company" placeholder="Company name" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="State/Country" className="text-sm font-medium px-2">
            State/Country
            </label>
            <BaseInput id="State/Country"  />
          </div>
          <div>
            <label htmlFor="Zip/postal code" className="text-sm font-medium px-2">
            Zip/postal code
            </label>
            <BaseInput id="Zip/postal code"  />
          </div>
        </div>
        <div className="flex justify-center">
          <BaseButton className='px-9 rounded-full bg-blue-950 text-white font-semibold py-2 mt-5 ' title='Save' />
        </div>

      </form>
    </div>
  );
};

export default FormSection;
