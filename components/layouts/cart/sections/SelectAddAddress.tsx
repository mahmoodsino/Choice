import React, {useEffect, useState } from "react";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
    getAddress,
  ShippingAddressIdAtom, TokenAtom,
} from "../../../../helper";
import { AddAddressModalAtom } from "./AddAddressModal";

export const OpenSelectAddressAtom = atom({
  key: "OpenSelectAddressAtom",
  default: false,
});

interface addressType {
    address: string;
    name: string;
    is_default: boolean;
    city_name: string;
    post_code:number,
    id: number ;
  }

const SelectAddAddress = () => {
  const [address, setaddress] = useState<addressType[]>([])
  const [openSelectAddress, setOpenSelectAddress] = useRecoilState(
    OpenSelectAddressAtom
  );
  const setShippingAddressId = useSetRecoilState(
    ShippingAddressIdAtom
  );
  const [addressName, setAddressName] = useState("SelectAddress");
  const token=useRecoilValue(TokenAtom)
  const [addAddress,setAddressModal]=useRecoilState(AddAddressModalAtom)


  useEffect(() => {
    const getData = async () => {
      const res = await getAddress(token);
      if (res === null) {
      } else {
        setaddress(res.result);
      }
    };
    if (token.length > 1) {
      getData();
    }
  }, [addAddress]);
   

  return (
    <div
      onClick={() => setOpenSelectAddress(!openSelectAddress)}
      className="underline  w-fit   "
    >
      <h1 className="z cursor-pointer   ">
        {addressName}
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
          openSelectAddress ? " absolute border w-fit bg-white" : "hidden"
        }`}
      >
        <div className="text-left ">
          {address.map((addres) => {
            return (
              <h4
                onClick={() => (
                  setShippingAddressId(addres.id), setAddressName(addres.name)
                )}
                key={addres.id}
                className="font-semibold  whitespace-nowrap px-3 py-2 border-b cursor-pointer hover:bg-blue-950 hover:text-white"
              >
                {addres.name}
              </h4>
            );
          })}
          <h4
            onClick={() => setAddressModal(true)}
            className="font-semibold  whitespace-nowrap px-3 py-2 border-b cursor-pointer hover:bg-blue-950 hover:text-white"
          >
            Add New Address
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SelectAddAddress;
