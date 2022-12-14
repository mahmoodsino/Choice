import React, { useEffect } from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { ShippingAddressIdAtom } from "../../../../helper";

export const SelectDelivaryTypeAtom = atom({
  key: "SelectDelivaryTypeAtom",
  default: false,
});

const delivaryMethods: string[] = ["PICKUP", "DELIVERY"];

export const selctedMethodAtom = atom({
  key: "selctedMethodAtom",
  default: "PICKUP",
});

const SelectDelivaryType = () => {
  const [selectDelivaryTypeState, setSelectDelivaryTypeState] = useRecoilState(
    SelectDelivaryTypeAtom
  );
  const [selectedMethod, setSelectedMethod] = useRecoilState(selctedMethodAtom);
  const setShippingAddressId = useSetRecoilState(ShippingAddressIdAtom);

  useEffect(() => {
    if (selectedMethod === "PICKUP") {
      setShippingAddressId(-1);
    }
  }, [selectedMethod]);

  return (
    <div
      onClick={() => setSelectDelivaryTypeState(!selectDelivaryTypeState)}
      className="underline relative w-fit   "
    >
      <h1 className=" cursor-pointer   ">
        {selectedMethod}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-down-short inline-block"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
          />
        </svg>
      </h1>
      <div
        className={`${
          selectDelivaryTypeState ? " absolute border w-fit bg-white" : "hidden"
        }`}
      >
        <div className="text-left  ">
          {delivaryMethods.map((item) => {
            return (
              <h1
                key={item}
                onClick={() => setSelectedMethod(item)}
                className="font-semibold px-5 py-2 border-b bg-white cursor-pointer hover:bg-blue-950 hover:text-white"
              >
                {item}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectDelivaryType;
