import  { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { categoriesType, OpenCategoryModalAtom, SelectedProductsCategoryAtom } from "../../helper";
import { RightArrowIcons } from "../icons";

interface data {
  data: categoriesType[] | categoriesType;
}

const MobailTree = ({ data }: data) => {
  const [MobailselectedParentId, setMobailParentId] = useState<number>(-1);
  if (Array.isArray(data)) {
    return (
      <div className=" ">
        <ul className="">
          {data.map((tree) => (
            <MobailTreeNode key={uuidv4()} node={tree} MobailselectedParentId={MobailselectedParentId} setMobailParentId={setMobailParentId} />
          ))}
        </ul>
      </div>
    );
  } else
    return (
      <div className=" ">
        <ul className="">
          {data.categories.map((tree) => (
            <MobailTreeNode key={uuidv4()} node={tree} MobailselectedParentId={MobailselectedParentId} setMobailParentId={setMobailParentId}/>
          ))}
        </ul>
      </div>
    );
};

interface node {
  node: categoriesType,
  MobailselectedParentId:number,
  setMobailParentId:(value:number)=>void

}

const MobailTreeNode = ({ node,MobailselectedParentId,setMobailParentId }: node) => {
  const [openCategoryModal, setOpencategoryModal] = useRecoilState(
    OpenCategoryModalAtom
  );
  const [selecterCategory,setSelectedCategory]=useRecoilState(SelectedProductsCategoryAtom)
 

  const hasChild = node.categories?.length>0 ? true : false;
  const push = useRouter().push


  const handelSearch = async (categoreyID: number) => {
    push({
      pathname: '/products',
      query: { categorey: encodeURI(`${categoreyID}`) },
  });
  setOpencategoryModal(false)
  };
  return (
    <li className=" relative ">
      <div className="">
        

        <div className=" flex justify-between py-3 text-sm font-medium tracking-[0.03em] cursor-pointer  border-t border-b border-t-white">
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
            <h1 className="text-[10px] mt-2 inline-block text-[#7A797B] tracking-[0.03em]"></h1>
            <div
              onClick={() => (
                setMobailParentId(node.id),
                MobailselectedParentId === node.id
                  ? setMobailParentId(-1)
                  : null
              )}
              className={`w-fit  ${hasChild ? "" : "hidden"}`}
            >
              <RightArrowIcons className="w-4 fill-black" />
            </div>
          </div>
        </div>
        {hasChild && MobailselectedParentId === node.id && (
          <div className=" ">
            <ul className="px-5 z-50">
              <MobailTree data={node} />
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export default MobailTree;
