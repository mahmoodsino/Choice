import Link from "next/link";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import {
  AllCartsInfoAtom,
  CartItemsAtom,
  getCartItems,
  TokenAtom,
} from "../../../../helper";
import { Spinner } from "../../../spinner";
import CartItemTable from "./CartItemTable";
import CartSummary from "./CartSummary";

const MainSection = () => {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useRecoilState(CartItemsAtom);
  const [allCartsInfo, setAllCartsInfo] = useRecoilState(AllCartsInfoAtom);
  const [token, setToken] = useRecoilState(TokenAtom);
  const timerRef = useRef() as MutableRefObject<NodeJS.Timeout>;


  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getCartItems(token);
      if(res===null){
        toast.error("some thing went wrong")
      }else{
        setAllCartsInfo(res.result);
        setCartItems(res.result.items);
      }
        setLoading(false);
    };
    if (token.length > 1) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        getData();
      }, 1000);
    }
  }, []);

  return (
    <div className="lg:px-[75px] md:px-[35px] sm:px-[10px] 2xl:container m-auto py-10">
      {!loading ? (
        <div>
          {cartItems.length !== 0 ? (
            <div>
              <span className="text-2xl font-bold block ">Shpping Cart</span>
              <CartItemTable />
              <CartSummary />
            </div>
          ) : (
            <div className="text-center">
              <span>your cart is empty thart</span>
              <Link href="/products">
              <a className="font-bold hover:text-yellow-950 duration-300"> shopping</a>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Spinner className="w-72" />
        </div>
      )}
    </div>
  );
};

export default MainSection;
