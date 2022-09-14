import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  addToCart,
  AllCartsInfoAtom,
  CartItemsAtom,
  CouninueAsGuestModalAtom,
  DetailsAtom,
  DetailsType,
  getCartItems,
  itemsType,
  LocalCartAtom,
  TokenAtom,
  VariationsAtom,
} from "../../../../helper";
import BaseButton from "../../../buttons/BaseButton";
import { BlusIcon, CartIcon, MinusIcon } from "../../../icons";
//@ts-ignore
import Select, { StylesConfig, ActionMeta } from "react-select";
import { MoveToCartPageModalAtom } from "./MoveToCartPageModal";
import { Spinner } from "../../../spinner";

const DetailsCard = () => {
  const [detailsState, setDetailsState] = useRecoilState(DetailsAtom);
  const [variationsState, setVariationsState] = useRecoilState(VariationsAtom);
  const [attributeNames, setAttributeNames] = useState<{
    [key: string]: { value: number; parent_id: number; label: string }[];
  }>({});
  const [boolAttributeValue, setBoolAttributeValue] = useState<{
    [key: number]: boolean;
  }>({});
  const [attributeValueNumbers, setAttributeValueNumber] = useState<any>();
  const [selectedAttributes, setSelectedAttributes] = useState<number[]>([]);
  const [newArrayOFArray, setNewArrayOFArry] = useState<any>();
  const [attributeToSetVAriation, setAttributesToSetVAriation] = useState<{}[]>(
    []
  );
  const [localCart, setLocalCart] = useRecoilState(LocalCartAtom);
  const [ContinueAsGuestModal, setContinueAsGuestModal] = useRecoilState(
    CouninueAsGuestModalAtom
  );
  const [token, setToken] = useRecoilState(TokenAtom);
  const [allCartsInfo,setAllCartsInfo]=useRecoilState(AllCartsInfoAtom)
  const [cartItems,setCartItems]=useRecoilState(CartItemsAtom)
  const [loading,setLoading]=useState(false)
  const [MoveToCartPageModalState, setMoveToCartPageModalState] =
  useRecoilState(MoveToCartPageModalAtom);
  

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
    if (variationsState.available_quantity > 0) {
      setLocalCart([
        {
          type: 1,
          quantity: 1,
          product_id: detailsState.product.id,
          branch_id: 1,
          variation_id: variationsState.id,
        },
      ]);
    }
  }, [variationsState]);

  const CartButton = (id: number) => {
    if (variationsState.available_quantity === 0) {
      return (
        <p className="text-sm block text-red-950 h-[24px]">
          this product is not available now !!
        </p>
      );
    } else {
      let indexcart: number;
      indexcart = localCart.findIndex((item) => item.variation_id === id);
      if (indexcart >= 0) {
        return (
          <div className="flex mt-5 items-center">
                <div className="border space-x-5 flex items-center justify-between px-2 py-1">
                  <BaseButton
                  //@ts-ignore
                    onClick={() => handleRemoveFromCart(localCart[indexcart].id)}
                    className="rounded-full w-5 h-5 bg-yellow-950 flex items-center m-auto"
                    disabled={localCart[indexcart].quantity === 1 ? true : false}
                  >
                    <MinusIcon className="w-3 fill-black ml-1" />
                  </BaseButton>
                  <span className="block w-[40px] text-center"> {localCart[indexcart].quantity}</span>
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
  };

  useEffect(() => {
    const newNames = attributeNames;
    for (let i = 0; i < detailsState.variations?.length; i++) {
      const attributes = detailsState?.variations[i]?.attributes;
      if (attributes)
        for (let j = 0; j < attributes.length; j++) {
          const attribute = attributes[j];
          const Parent_id: number = attribute.id;

          let attribute_value = {
            value: attribute.attribute_values.id,
            label: attribute.attribute_values.name,
            parent_id: Parent_id,
          };
          if (newNames[`${attribute.name}`]) {
            newNames[`${attribute.name}`].map((item: any) => {
              if (item.name !== attribute.attribute_values.name) {
                newNames[`${attribute.name}`].push(attribute_value);
              }
            });
          } else {
            newNames[`${attribute.name}`] = [attribute_value];
          }
        }
    }
    setAttributeNames(newNames);
  }, [detailsState]);

  const customStyles: StylesConfig = {
    option: (provided: ActionMeta, state: ActionMeta) => ({
      ...provided,
      borderBottom: "1px solid #F8F8F8",
      color: state.isSelected ? "#373737" : "#373737",
    }),
    control: (base: ActionMeta) => ({
      ...base,
      "&:hover": { borderColor: "gray" },
      border: "1px solid black",
      boxShadow: "none",
    }),
  };

  const handelValue = (
    option: { value: number; label: string; parent_id: number } | null,
    actionMeta: ActionMeta<{ value: number; label: string; parent_id: number }>
  ) => {
    console.log(option?.value);

    let num: { id: number; parent: number }[] = [{ id: -1, parent: -1 }];
    //@ts-ignore
    num = [{ id: +option?.value, parent: +option?.parent_id }];

    setAttributesToSetVAriation(num);
  };

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
      if (variation.is_default) {
        setVariationsState(variation);
      }
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

  useEffect(() => {
    detailsState.variations?.map((variation) => {
      if (attributeToSetVAriation.length > 0) {
        attributeToSetVAriation.map((item: any) => {
          variation.attributes?.map((attribute) => {
            if (
              attribute.id === item.parent &&
              attribute.attribute_values.id === item.id
            ) {
              setVariationsState(variation);
            } else {
            }
          });
        });
      } else {
      }
    });
  }, [attributeToSetVAriation]);

  const getbg = (id: number) => {
    let isfound = false;
    let index;

    index = selectedAttributes.findIndex((item) => item === id);
    if (index > -1) {
      isfound = true;
    } else {
      isfound = false;
    }
    return isfound;
  };


  const finallAddtoCart = async () => {
    localCart.map(async (item) => {
      setLoading(true)
      if (item.variation_id) {
        const res = await addToCart(
          token,
          1,
          item.product_id,
          item.variation_id,
          1,
          1,
          item.quantity,
        );
      }
    });
    const response = await getCartItems(token);
    setCartItems(response.result.items);
    const res = await getCartItems(token);
    setAllCartsInfo(res.result)
    if(res){
      setLoading(false)
    }
    if(response){

      setMoveToCartPageModalState(true)
    }
    
  };
  return (
    <div>
      <span className="text-3xl font-medium block ">
        {detailsState.product?.name}
      </span>
      <div className="mt-5 border-b-2 space-y-2 pb-10">
        <div className="w-[40%] flex justify-between items-center">
          <span className="text-[22px] font-bold">
            ${variationsState.new_price}
          </span>
          <span className="line-through text-[#9098B1]">
            ${variationsState.price}
          </span>
          <span className="text-[#33A0FF] font-bold">24% Off</span>
        </div>
        <div className="w-[40%] flex justify-between items-center">
          <span className="text-gray-1400 text-sm">Availability:</span>
          <span className="text-gray-1400 text-sm">
            {variationsState.available_quantity}
          </span>
        </div>
        <div className="w-[40%] flex justify-between items-center">
          <span className="text-gray-1400 text-sm">Category:</span>
          <span className="text-gray-1400 text-sm">Accessories</span>
        </div>
      </div>
      <div className="mt-5 border-b-2 space-y-2 pb-10 w-[70%] ">
        {Object.keys(attributeNames).map((key, i) => {
          const value = attributeNames[key];
          return (
            <div key={i} className="flex justify-between items-center">
              <span className="text-gray-1400 text-sm whitespace-nowrap">
                {key} :
              </span>
              <div className="flex justify-end  w-72">
                <Select
                  theme={(theme: ActionMeta) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary: "#FFF1BF",
                    },
                  })}
                  className="w-full  "
                  placeholder={value.map((item) => {
                    if (getbg(item.value)) {
                      return item.label;
                    } else {
                      return key;
                    }
                  })}
                  options={value}
                  onChange={handelValue}
                  styles={customStyles}
                  isSearchable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex sm:flex-col md:flex-row justify-between items-center">
        {CartButton(variationsState.id)}
        <div className="font-medium space-x-2 h-24 flex items-center">
          {!loading ? 
              <BaseButton
              disabled={variationsState.available_quantity < 1 ? true : false}
              onClick={() =>
                      token.length > 1
                        ? finallAddtoCart()
                        : setContinueAsGuestModal(true)
                    } className="text-black whitespace-nowrap px-3 py-1 border border-black rounded-full disabled:cursor-not-allowed ">
                <CartIcon className="w-4 fill-black inline-block mr-2" />
                
                Add to cart
              </BaseButton> : 
              <div className=" inline-block justify-center items-center h-24 mt-9">
                <Spinner className="w-16 "/>
              </div>
          
        }
          <BaseButton
            className="px-7 py-1.5 whitespace-nowrap  bg-yellow-950 rounded-full"
            title="Buy Now"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
