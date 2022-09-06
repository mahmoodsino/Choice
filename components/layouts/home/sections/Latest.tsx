import React from "react";
import BaseButton from "../../../buttons/BaseButton";
import { LatestElement } from "../elements";

const Latest = () => {
  return (
    <div className="border  mt-14 w-[90%] ">
      <span className="font-bold block m-0.5 px-2 py-2 bg-gray-1100">
        LATEST
      </span>
      <LatestElement />
      <LatestElement />
      <LatestElement />
    </div>
  );
};

export default Latest;
