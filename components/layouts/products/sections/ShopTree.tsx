import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";
import { categoriesType, SelectedProductsCategoryAtom } from "../../../../helper";
import { ArrowIcon, RightArrowIcons } from "../../../icons";

interface data {
  data: categoriesType[] | categoriesType;

}



const ShopTree = ({ data }: data) => {
  const [ShopselectedParentId, setShopParentId] = useState(-1);
  if (Array.isArray(data)) {
    return (
      <div className=" ">
        <ul className="">
          {data.map((tree) => (
            <ShopTreeNode
              key={uuidv4()}
              node={tree}
              ShopselectedParentId={ShopselectedParentId}
              setShopParentId={setShopParentId}
            />
          ))}
        </ul>
      </div>
    );
  } else
    return (
      <div className=" ">
        <ul className="">
          {data.categories.map((tree) => (
            <ShopTreeNode
              key={uuidv4()}
              node={tree}
              ShopselectedParentId={ShopselectedParentId}
              setShopParentId={setShopParentId}
            />
          ))}
        </ul>
      </div>
    );
};

interface node {
  node: categoriesType;
  ShopselectedParentId: number;
  setShopParentId: (value: number) => void;

}



const ShopTreeNode = ({
  node,
  ShopselectedParentId,
  setShopParentId,
}: node) => {
  const [selecterCategory,setSelectedCategory]=useRecoilState(SelectedProductsCategoryAtom)

  const hasChild = node.categories?.length > 0 ? true : false;

  const handelSearch = async (categoreyID: number) => {
    const index = selecterCategory.findIndex((category) => category === categoreyID);
    if (index < 0) {
      setSelectedCategory(prev => [...prev,categoreyID])
    } else if (index >= 0) {
      setSelectedCategory(prev => prev.filter(item => item!==categoreyID))
    }
  };


  return (
    <li className=" relative ">
      <div className="">
        

        <div className=" flex justify-between  text-sm tracking-[0.03em] cursor-pointer bg-gray-1350 px-3 border-t border-b border-t-white pr-3">
          <label  className="shopContainer flex items-center mt-0 mb-0 py-2">
            {node.name}
            <input
            checked={selecterCategory.findIndex(categorey => categorey===node.id)>-1 ? true : false }
              onChange={() => handelSearch(node.id)}
              className="checkbox"
              type="checkbox"
            />
            <span className="text-sm  shopCheckmark"></span>
          </label>
          <div className="flex items-center space-x-1">
            <div
              onClick={() => (
                setShopParentId(node.id),
                ShopselectedParentId === node.id ? setShopParentId(-1) : null
              )}
              className={` mt-1 ${hasChild ? "block w-fit" : "hidden"}`}
            >
              <RightArrowIcons className="w-4 fill-black " />
            </div>
          </div>
        </div>
        {hasChild && ShopselectedParentId === node.id && (
          <div className=" ">
            <ul className="px-3 z-50">
              <ShopTree  data={node} />
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export default ShopTree;