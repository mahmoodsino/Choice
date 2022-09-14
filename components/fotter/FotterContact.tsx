import React from "react";
import { BaseButton } from "../buttons";
import { BaseInput } from "../inputs";

const FotterContact = () => {
  return (
    <div>
      <form className=" w-[100%]  ">
        <div className=" space-y-3 ">
          <BaseInput
            placeholder="NAME"
            className="outline-none bg-[#616161] px-2 py-1 w-[100%] inline-block"
          />
          <BaseInput
            placeholder="EMAIL ADDRESS"
            className="outline-none bg-[#616161] px-2 py-1 w-[100%] inline-block"
          />
        </div>
        <textarea
          placeholder="TYPE YOUR MESSAGE..."
          className="outline-none mt-3 bg-[#616161] px-2 py-1 w-[100%] resize-none"
        />
        <BaseButton
          className="w-[100%] bg-gray-1150 text-gray-1300 font-bold py-1 my-4 "
          title="SEND IT NOW"
        />
      </form>
    </div>
  );
};

export default FotterContact;
