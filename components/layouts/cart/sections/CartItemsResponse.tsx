import React from "react";
import { useRecoilState } from "recoil";
import { CartItemsAtom, FetchedItemsType } from "../../../../helper";
import { BaseButton } from "../../../buttons";
import { BlusIcon, MinusIcon, TrashIcon } from "../../../icons";
import { CartLoading } from "./CartItemTable";

interface Props {
  handleAddToCart: (clickedItem: FetchedItemsType) => void;
  handleRemoveFromCart: (id: number, reomve?: string) => void;
}

const CartItemsResponse = ({
  handleAddToCart,
  handleRemoveFromCart,
}: Props) => {
  const [cartItems, setCartItems] = useRecoilState(CartItemsAtom);
  const [loading, setLoading] = useRecoilState(CartLoading);

  return (
    <div
      className={`mt-5 lg:hidden sm:block ${loading && "pointer-events-none"}`}
    >
      {cartItems.map((item, i) => {
        return (
          <div key={i} className="border px-5">
            <div className="flex justify-end mt-2">
              <BaseButton
                onClick={() =>
                  item.id && handleRemoveFromCart(item.id, "remove")
                }
                className="w-6 h-6 bg-red-950/10 rounded-full"
              >
                <TrashIcon className="w-5 fill-red-950 m-auto mt-0.5" />
              </BaseButton>
            </div>
            <div className="flex md:justify-between sm:justify-center items-center mt-3 border-b pb-2">
              <span className="font-semibold sm:hidden md:block">
                {item.product?.name}
              </span>
              <div className=" border product-slider-img">
                <img className="w-20 h-20" src={item.product?.image?.path ? item.product?.image?.path :"/alternative.png"} />
              </div>
            </div>
            <div className="flex md:justify-between sm:justify-center font-semibold py-5 border-b">
              <span className="font-semibold sm:hidden md:block">price</span>
              <span>${item.variation?.price}</span>
            </div>
            <div className="flex md:justify-between sm:justify-center font-semibold items-center py-5 border-b">
              <span className="sm:hidden md:block">QUANTITY</span>
              <div className="border flex w-fit items-center space-x-8 px-2 py-1">
                <BaseButton
                  onClick={() => item.id && handleRemoveFromCart(item.id)}
                  className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                >
                  <MinusIcon className="w-3 fill-black ml-1" />
                </BaseButton>
                <span>{item.quantity}</span>
                {item.in_stock === 1 &&
                          item.product?.tracking_type === 1 && (
                            <BaseButton
                              onClick={() => handleAddToCart(item)}
                              className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                            >
                              <BlusIcon className="w-3 fill-black  ml-1 mr-1" />
                            </BaseButton>
                          )}
                        {item.in_stock === 1 &&
                          (item.product?.tracking_type === 2 ||
                            item.product?.tracking_type === 3) && (
                            <BaseButton
                              onClick={() => handleAddToCart(item)}
                              className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                              disabled={
                                item.actual_quantity === item.available_quantity
                                  ? true
                                  : false
                              }
                            >
                              <BlusIcon className="w-3 fill-black  ml-1 mr-1" />
                            </BaseButton>
                          )}
              </div>
            </div>
            <div className="flex md:justify-between sm:justify-center items-center py-5 font-semibold">
              <span className="sm:hidden md:block">TOTAL PRICE</span>
              <span>${item.variation?.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItemsResponse;
