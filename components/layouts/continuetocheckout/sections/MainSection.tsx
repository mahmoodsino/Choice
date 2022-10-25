import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  ErorrMessageAtom,
  handelCrateOrder,
  OpenMessageModalAtom,
  ShippingAddressIdAtom,
  TokenAtom,
} from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { Spinner } from "../../../spinner";
import { selctedMethodAtom } from "../../cart/sections/SelectDelivaryType";
import FormSection from "./FormSection";

const MainSection = () => {
  const [selectedMethod, setSelectedMethod] = useRecoilState(selctedMethodAtom);
  const { push } = useRouter();
  const [loadind, setLoading] = useState(false);
  const [openMessageModal, setOpenMassegModal] =
    useRecoilState(OpenMessageModalAtom);
  const [errorMessage, setErorrMessage] = useRecoilState(ErorrMessageAtom);
  const [savedOrderId, setSavedOrderId] = useState<number>();
  const [token, setToken] = useRecoilState(TokenAtom);
  const [shippingAddressId, setShippingAddressId] = useRecoilState(
    ShippingAddressIdAtom
  );

  const createOrder = async () => {
    if (selectedMethod === "PICKUP") {
      setLoading(true);
      const res = await handelCrateOrder({
        shipping_method: selectedMethod,
        token: token,
      });
      if (res === null) {
        setErorrMessage("some thing went wrong");
        setOpenMassegModal(true);
        setLoading(false);
      } else {
        setSavedOrderId(res.result.saved_order_id);
        push({
          pathname: "/checkout",
          query: { savedOrder: encodeURI(res.result.saved_order_id) },
        });
        setLoading(false);
      }
    } else {
      setLoading(true);
      const res = await handelCrateOrder({
        shipping_method: selectedMethod,
        token: token,
        address_id: shippingAddressId,
      });
      if (res === null) {
        setErorrMessage("some thing went wrong");
        setOpenMassegModal(true);
        setLoading(false);
      } else {
        setSavedOrderId(res.result.saved_order_id);
        push({
          pathname: "/checkout",
          query: { savedOrder: encodeURI(res.result.saved_order_id) },
        });
        setLoading(false);
      }
    }
  };

  return (
    <div className="px-[75px] 2xl:container m-auto py-10">
      <div className="grid grid-cols-2">
        <div className=" border-r">
          <Link href="/cart">
            <a className="text-lg underline">Back to My Cart</a>
          </Link>
          <span className="text-gray-1500 text-xl mt-10 font-semibold block">
            Returning Customer
          </span>
          <div className="w-[60%] mt-5">
            <FormSection />
          </div>
        </div>
        <div className="space-y-7 px-10 mt-20">
          <span className="block font-semibold text-xl text-gray-1500">
            Checkout as Guest
          </span>
          {!loadind ? (
            <BaseButton
            onClick={() =>createOrder() }
              className="px-7 py-1.5  bg-yellow-950 rounded-full"
              title="Continue"
            />
          ) : (
            <Spinner className="w-10" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
