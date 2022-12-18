import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ChechoutMainSection, Spinner } from "../components";
import { getPaymentProvidor, PaymentProviderType } from "../helper";
import { Elements } from "@stripe/react-stripe-js";
import { useRecoilState } from "recoil";
import { PaymentProvidorAtom, paymentProvidorIdAtom, publicKeyAtom } from "../helper/state/payment";

let stripePromise: any;

const Checkout = () => {
  const [paymentProvidorState, setPaymentProvidorState] = useRecoilState(PaymentProvidorAtom)
  const [paymentProvidorId, setPaymenProvidorId] = useRecoilState(paymentProvidorIdAtom)
  const [publicKey, setPublicKey] = useRecoilState(publicKeyAtom)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getPaymentProvidor();
      if (res === null) {
        toast.error("something went wrong");
      } else {
        setPaymentProvidorState(res.result.payment_providers);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    paymentProvidorState.map((providor) => {
      if (providor.name === "stripe") {
        setPaymenProvidorId(providor.id);
        setPublicKey(providor.public_key);
      }
    });
  }, [paymentProvidorState]);

  useEffect(() => {
    if (publicKey) {
      stripePromise = loadStripe(publicKey);
      setLoading(false);
    }
  }, [publicKey]);

  return (
    
    <div>
      {!loading ? (
        <Elements stripe={stripePromise}>
          <ChechoutMainSection />
        </Elements>
      ) : (
        <Spinner className="w-20" />
      )}
    </div>
  );
};

export default Checkout;
