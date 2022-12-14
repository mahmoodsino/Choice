import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  addToCart,
  AllCartsInfoAtom,
  CartItemsAtom,
  CouninueAsGuestModalAtom,
  DetailsAtom,
  DetailsType,
  ErorrMessageAtom,
  itemsType,
  LocalCartAtom,
  OpenMessageModalAtom,
  TokenAtom,
  VariationsAtom,
} from "../../../../helper";
import BaseButton from "../../../buttons/BaseButton";
import { BlusIcon, CartIcon, MinusIcon } from "../../../icons";
//@ts-ignore
import { MoveToCartPageModalAtom } from "./MoveToCartPageModal";
import { Spinner } from "../../../spinner";
import { useRouter } from "next/router";

const DetailsCard = () => {
  const detailsState = useRecoilValue(DetailsAtom);
  const [variationsState, setVariationsState] = useRecoilState(VariationsAtom);
  const [attributeNames, setAttributeNames] = useState<{
    [key: string]: { id: number; parent_id: number; name: string }[];
  }>({});
  const [boolAttributeValue, setBoolAttributeValue] = useState<{
    [key: number]: boolean;
  }>({});
  const [attributeValueNumbers, setAttributeValueNumber] = useState<any>();
  const [selectedAttributes, setSelectedAttributes] = useState<number[]>([]);
  const [newArrayOFArray, setNewArrayOFArry] = useState<any>();
  const [attributeToSetVAriation, setAttributesToSetVAriation] = useState<{
    id: number;
    parent: number;
  }>();
  const [localCart, setLocalCart] = useRecoilState(LocalCartAtom);
  const setContinueAsGuestModal = useSetRecoilState(CouninueAsGuestModalAtom);
  const token = useRecoilValue(TokenAtom);
  const setAllCartsInfo = useSetRecoilState(AllCartsInfoAtom);
  const setCartItems = useSetRecoilState(CartItemsAtom);
  const [loading, setLoading] = useState(false);
  const setMoveToCartPageModalState = useSetRecoilState(
    MoveToCartPageModalAtom
  );
  const setOpenMassegModal = useSetRecoilState(OpenMessageModalAtom);
  const setErorrMessage = useSetRecoilState(ErorrMessageAtom);
  const { push } = useRouter();
  const [buyLoad, setBuyLoad] = useState(false);

  const handleAddToCart = async (clickedItem: DetailsType) => {
    setLocalCart((prev) => {
      const isItemInCarts = prev.find(
        (item) =>
          item.product_id === clickedItem.product.id &&
          item.variation_id === variationsState.id
      );
      if (isItemInCarts) {
        return prev.map((item) =>
          item.product_id === clickedItem.product.id &&
          item.variation_id === variationsState.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          type: 1,
          quantity: 1,
          product_id: clickedItem.product.id,
          branch_id: 1,
          variation_id: variationsState.id,
        },
      ];
    });
  };

  const handleRemoveFromCart = async (id: number, reomve?: string) => {
    setLocalCart((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          if (reomve) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as itemsType[])
    );
  };

  useEffect(() => {
    detailsState.variations.map((item) => {
      if (item.is_default === 1) {
        setVariationsState(item);
      }
    });
  }, [detailsState]);

  useEffect(() => {
    setLocalCart([]);
    if (variationsState.in_stock === 1) {
      if (detailsState.product?.tracking_type === 1) {
        setLocalCart([
          {
            type: 1,
            quantity: 1,
            product_id: detailsState.product.id,
            description: "item",
            variation_id: variationsState.id,
            branch_id: 1,
          },
        ]);
      } else if (
        detailsState.product?.tracking_type === 2 ||
        detailsState.product?.tracking_type === 3
      ) {
        if (variationsState.available_quantity !== 0) {
          setLocalCart([
            {
              type: 1,
              quantity: 1,
              product_id: detailsState.product.id,
              description: "item",
              variation_id: variationsState.id,
              branch_id: 1,
            },
          ]);
        }
      }
    }
  }, [variationsState]);

  const CartButton = (id: number) => {
    if (variationsState.in_stock < 1) {
      return (
        <p className="text-sm block text-red-950 h-[24px]">
          this product is not available now !!
        </p>
      );
    } else if (variationsState.in_stock === 1) {
      if (detailsState.product?.tracking_type === 1) {
        let indexcart: number;
        indexcart = localCart.findIndex((item) => item.variation_id === id);
        if (indexcart >= 0) {
          return (
            <div className="flex  items-center">
              <div className="border space-x-5 flex items-center justify-between px-2 py-1">
                <BaseButton
                  //@ts-ignore
                  onClick={() => handleRemoveFromCart(localCart[indexcart].id)}
                  className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                  disabled={localCart[indexcart].quantity === 1 ? true : false}
                >
                  <MinusIcon className="w-3 fill-black ml-1" />
                </BaseButton>
                <span className="block w-[40px] text-center">
                  {localCart[indexcart].quantity}
                </span>
                <BaseButton
                  onClick={() => handleAddToCart(detailsState)}
                  className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                >
                  <BlusIcon className="w-3 fill-black ml-1" />
                </BaseButton>
              </div>
            </div>
          );
        }
      } else if (
        detailsState.product?.tracking_type == 2 ||
        detailsState.product?.tracking_type == 3
      ) {
        if (variationsState.available_quantity === 0) {
          return (
            <p className="text-sm block text-red-950 h-[24px]">
              this product is not available now !!
            </p>
          );
        } else if (variationsState.available_quantity > 0) {
          let indexcart: number;
          indexcart = localCart.findIndex((item) => item.variation_id === id);
          if (indexcart >= 0) {
            return (
              <div className="flex  items-center">
                <div className="border space-x-5 flex items-center justify-between px-2 py-1">
                  <BaseButton
                    onClick={() =>
                      //@ts-ignore
                      handleRemoveFromCart(localCart[indexcart].id)
                    }
                    className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                    disabled={
                      localCart[indexcart].quantity === 1 ? true : false
                    }
                  >
                    <MinusIcon className="w-3 fill-black ml-1" />
                  </BaseButton>
                  <span className="block w-[40px] text-center">
                    {localCart[indexcart].quantity}
                  </span>
                  <BaseButton
                    onClick={() => handleAddToCart(detailsState)}
                    className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                    disabled={
                      localCart[indexcart].quantity ===
                      variationsState.available_quantity
                        ? true
                        : false
                    }
                  >
                    <BlusIcon className="w-3 fill-black ml-1" />
                  </BaseButton>
                </div>
              </div>
            );
          }
        }
      }
    }
  };
  useEffect(() => {
    let index: number;
    const newNames = attributeNames;
    for (let i = 0; i < detailsState.variations?.length; i++) {
      const attributes = detailsState?.variations[i]?.attributes;
      if (attributes)
        for (let j = 0; j < attributes.length; j++) {
          const attribute = attributes[j];
          const Parent_id: number = attribute.id;
          let attribute_value = {
            id: attribute.attribute_values.id,
            name: attribute.attribute_values.name,
            parent_id: Parent_id,
          };
          if (newNames[`${attribute.name}`]) {
            const value = newNames[attribute.name];
            index = value.findIndex(
              (val: { id: number; parent_id: number; name: string }) =>
                val.id === attribute_value.id
            );
            if (index < 0) {
              newNames[`${attribute.name}`].push(attribute_value);
            }
          } else {
            newNames[`${attribute.name}`] = [attribute_value];
          }
        }
    }
    setAttributeNames(newNames);
  }, [detailsState]);

  useEffect(() => {
    let attributValueID: number[] = [];
    let attributeValueNumber: any = [];
    detailsState.variations?.map((variation) => {
      if (variation.attributes && variation.attributes?.length > 0) {
        variation.attributes?.map((attribut) => {
          attributValueID.push(attribut.attribute_values.id);
          setBoolAttributeValue((prev) => ({
            ...prev,
            [attribut.attribute_values.id]: false,
          }));
        });

        attributeValueNumber.push(attributValueID);
        attributValueID = [];
      }
      // if (variation.is_default) {
      //   setVariationState(variation);
      // }
    });
    setAttributeValueNumber(attributeValueNumber);
  }, [detailsState]);

  useEffect(() => {
    setSelectedAttributes([]);
    variationsState.attributes?.map((attribute) => {
      setSelectedAttributes((prev) => [...prev, attribute.attribute_values.id]);
    });
  }, [variationsState]);

  useEffect(() => {
    let arrayOfArrays: any = [];
    let errorCount: number = 0;

    if (
      attributeValueNumbers &&
      attributeValueNumbers.length > 0 &&
      selectedAttributes &&
      selectedAttributes.length > 0
    ) {
      for (let i = 0; i < attributeValueNumbers.length; i++) {
        errorCount = 0;
        const attribute = [...attributeValueNumbers[i]];

        for (let j = 0; j < attribute.length; j++) {
          const selectedAttribute = selectedAttributes[j];
          const valueAttribute = attribute[j];
          if (selectedAttribute !== valueAttribute) {
            errorCount++;
          }
        }
        //most be ===1
        if (errorCount === 1) {
          arrayOfArrays.push(attribute);
        }
      }
    }
    setNewArrayOFArry(arrayOfArrays);
  }, [
    selectedAttributes,
    attributeValueNumbers,
    variationsState,
    attributeToSetVAriation,
  ]);

  useEffect(() => {
    detailsState.variations?.map((variation) => {
      if (variation.attributes && variation.attributes?.length > 0) {
        variation.attributes?.map((attribut) => {
          setBoolAttributeValue((prev) => ({
            ...prev,
            [attribut.attribute_values.id]: false,
          }));
        });
      }
    });
    Object.keys(boolAttributeValue).map((key) => {
      newArrayOFArray.map((array: number[]) => {
        array.map((attributeValue) => {
          if (attributeValue === +key) {
            setBoolAttributeValue((prev) => ({ ...prev, [key]: true }));
          }
        });
      });
    });
  }, [newArrayOFArray, variationsState, attributeToSetVAriation]);

  const handelAttribute = (value: { id: number; parent_id: number }) => {
    let num: { id: number; parent: number } = { id: -1, parent: -1 };
    num = { id: value.id, parent: value.parent_id };
    setAttributesToSetVAriation(num);

    let count = selectedAttributes.length;
    let countArray = 0;
    let checked: number[] = [];
    let index: number = -1;

    for (let i = 0; i < attributeValueNumbers?.length; i++) {
      const array: number[] = attributeValueNumbers[i];
      index = array.findIndex((value) => value === num?.id);
      if (index > -1) {
        break;
      }
    }
    selectedAttributes.map((item, i) => {
      if (index === i) {
        //@ts-ignore
        checked.push(num?.id);
      } else if (index !== i) {
        checked.push(item);
      }
    });
    for (let i = 0; i < attributeValueNumbers?.length; i++) {
      const array: number[] = attributeValueNumbers[i];
      countArray = 0;
      for (let j = 0; j < array.length; j++) {
        const element = array[j];
        const chec = checked[j];
        if (element === chec) {
          countArray++;
        }
      }
      if (countArray === count) {
        break;
      }
    }
    if (countArray === count) {
      let same: number = 1;
      detailsState.variations?.map((variation) => {
        same = 0;
        if (variation.attributes?.length !== 0) {
          //@ts-ignore
          for (let i = 0; i < variation.attributes?.length; i++) {
            //@ts-ignore
            const attribute = variation.attributes[i];
            if (attribute.attribute_values.id === checked[i]) {
              same++;
            }
          }
          if (same === count) {
            setVariationsState(variation);
          }
        }
      });
    }
    if (countArray < count) {
      detailsState.variations.map((variation) => {
        if (num?.id) {
          variation.attributes?.map((attribute) => {
            if (
              attribute.id === num.parent &&
              attribute.attribute_values.id === num.id
            ) {
              setVariationsState(variation);
            }
          });
        }
      });
    }
  };

  // useEffect(() => {

  // }, [attributeToSetVAriation]);

  const getbg = (id: number) => {
    let isfound = false;
    Object.keys(boolAttributeValue).forEach((key) => {
      const val = boolAttributeValue[+key];
      if (+key === id) {
        isfound = val;
      }
    });
    return isfound;
  };

  const finallAddtoCart = async () => {
    localCart.map(async (item) => {
      setLoading(true);
      if (item.variation_id) {
        const res = await addToCart(
          token,
          1,
          item.product_id,
          item.variation_id,
          1,
          1,
          item.quantity
        );
        if (res === null) {
          setErorrMessage("some thing went wrong");
          setOpenMassegModal(true);
          setLoading(false);
        } else if (res == 400) {
          setErorrMessage("you cant add any more of this product");
          setOpenMassegModal(true);
          setLoading(false);
        } else {
          setAllCartsInfo(res.result);
          setCartItems(res.result.items);
          setMoveToCartPageModalState(true);
          setLoading(false);
        }
      }
    });
  };

  const handelBuyNow = async () => {
    localCart.map(async (item) => {
      setBuyLoad(true);
      if (item.variation_id) {
        const res = await addToCart(
          token,
          1,
          item.product_id,
          item.variation_id,
          1,
          1,
          item.quantity
        );
        if (res === null) {
          setErorrMessage("some thing went wrong");
          setOpenMassegModal(true);
          setBuyLoad(false);
        } else if (res == 400) {
          setErorrMessage("you cant add any more of this product");
          setOpenMassegModal(true);
          setBuyLoad(false);
        } else {
          setAllCartsInfo(res.result);
          setCartItems(res.result.items);
          setBuyLoad(false);
          push("/cart");
        }
      }
    });
  };

  return (
    <div>
      <span className="text-3xl font-medium block ">
        {detailsState.product?.name}
      </span>
      <div className="mt-5 border-b-2 space-y-2 pb-10">
        <div className="w-[40%] flex justify-between items-center">
          <span className="text-[22px] font-bold">
            ${variationsState?.new_price?.toFixed(1)}
          </span>
          <span className="line-through text-[#9098B1]">
            ${variationsState?.price?.toFixed(1)}
          </span>
          <span className="text-[#33A0FF] font-bold">24% Off</span>
        </div>
        <div className="w-[40%] flex justify-between items-center">
          <span className="text-gray-1400 text-sm">Availability:</span>
          <span className="text-gray-1400 text-sm">
            {variationsState?.available_quantity}
          </span>
        </div>
        <div className="w-[40%] flex justify-between items-center">
          <span className="text-gray-1400 text-sm">Category:</span>
          <span className="text-gray-1400 text-sm">Accessories</span>
        </div>
      </div>
      <div className={`mt-5 border-b-2 space-y-2 pb-10 w-[100%] ${detailsState?.variations?.length<2 && "hidden"}`} >
        {Object.keys(attributeNames).map((key, i) => {
          const values = attributeNames[key];
          return (
            <div key={i}>
              <div>
                <h1 className="font-bold mt-5">{key}</h1>
                <div className="flex space-x-3">
                  {values.map((value: any, index: number) => {
                    return (
                      <BaseButton
                        key={index}
                        onClick={() => handelAttribute(value)}
                        className={`
                        ${
                          selectedAttributes.findIndex(
                            (item: number) => item === value.id
                          ) > -1 &&
                          " text-yellow-1000 bg-yellow-950/25 font-semibold"
                        } 
                        ${
                          getbg(value.id) &&
                          selectedAttributes.findIndex(
                            (item: number) => item === value.id
                          ) === -1
                            ? "bg-[#f5f5f5] text-blue-950 font-semibold"
                            : selectedAttributes.findIndex(
                                (item: number) => item === value.id
                              ) === -1 &&
                              "bg-[#f8f8f8] text-[#aaa] line-through"
                        }
                          mt-2 rounded-md cursor-pointer px-3 py-0.5 hover:border-black`}
                      >
                        {value.name}
                      </BaseButton>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex sm:flex-col md:flex-row justify-between items-center">
        {CartButton(variationsState.id)}
        <div className="font-medium space-x-2 h-24 flex items-center">
          {!loading ? (
            <BaseButton
              disabled={
                variationsState.in_stock === 0
                  ? true
                  : detailsState.product?.tracking_type === 1
                  ? false
                  : detailsState.product?.tracking_type === 2 &&
                    variationsState.available_quantity === 0
                  ? true
                  : detailsState.product?.tracking_type === 3 &&
                    variationsState.available_quantity === 0
                  ? true
                  : false
              }
              onClick={() =>
                token.length > 1
                  ? finallAddtoCart()
                  : setContinueAsGuestModal(true)
              }
              className="text-black whitespace-nowrap px-3 py-1 border border-black rounded-full disabled:cursor-not-allowed "
            >
              <CartIcon className="w-4 fill-black inline-block mr-2" />
              Add to cart
            </BaseButton>
          ) : (
            <div className=" inline-block justify-center items-center h-24 mt-9">
              <Spinner className="w-16 " />
            </div>
          )}
          {!buyLoad ? (
            <BaseButton
              disabled={
                variationsState.in_stock === 0
                  ? true
                  : detailsState.product?.tracking_type === 1
                  ? false
                  : detailsState.product?.tracking_type === 2 &&
                    variationsState.available_quantity === 0
                  ? true
                  : detailsState.product?.tracking_type === 3 &&
                    variationsState.available_quantity === 0
                  ? true
                  : false
              }
              onClick={() =>
                token.length > 1
                  ? handelBuyNow()
                  : setContinueAsGuestModal(true)
              }
              className="px-7 py-1.5 whitespace-nowrap  bg-yellow-950 rounded-full disabled:cursor-not-allowed"
              title="Buy Now"
            />
          ) : (
            <div className=" inline-block justify-center items-center h-24 mt-9">
              <Spinner className="w-16 " />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
