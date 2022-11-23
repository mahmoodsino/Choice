import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { atom, useRecoilState } from "recoil";
import { v4 as uuidv4 } from 'uuid';
import { categoriesType, QueryFiltersAtom } from "../../../../helper";
import { BaseButton } from "../../../buttons";


interface data {
  data: categoriesType[] | categoriesType;
}




const HomeTree = ({ data }: data) => {
  const [selectedParentId, setParentId] = useState(-1);
  if (Array.isArray(data)) {
    return (
        <ul onMouseLeave={() => setParentId(-1)} className="">
          {data.map((tree) => (
            <TreeNode
            key={uuidv4()}
              node={tree}
              selectedParentId={selectedParentId}
              setParentId={setParentId}
            />
          ))}
        </ul>
    );
  } else
    return (
        <ul onMouseLeave={() => setParentId(-1)} className="h-[350px] overflow-y-auto ">
          {data.categories.map((tree) => (
            <TreeNode
            key={uuidv4()}
              node={tree}
              selectedParentId={selectedParentId}
              setParentId={setParentId}
            />
          ))}
        </ul>
    );
};
interface node {
  node: categoriesType;
  selectedParentId: number;
  setParentId: (value: number) => void;
}
const TreeNode = ({ node, selectedParentId, setParentId }: node) => {
  const [queryFilter,setQueryFilter]=useRecoilState(QueryFiltersAtom)

  const hasChild = node.categories?.length > 0 ? true : false;
  const push = useRouter().push
  const handelSearch = async (categoreyID: number) => {
    setQueryFilter(prev => {
      return(
        {...prev,SelectedCategories:[categoreyID]}
      )
    })
    push({
      pathname: '/products',
      query: { category:categoreyID},
  });
  };
  return (
    <li className="">
      <div
        className=""
        onMouseEnter={() => (
          setParentId(node.id),
          selectedParentId === node.id ? setParentId(-1) : null
        )}
      >
       
        <Link href={`/products?category=${node.id}`}  >
          <a className={`block w-full text-left hover:bg-yellow-950/25 px-2 py-3 text-xs border-b text-gray-1200 ${selectedParentId===node.id && "bg-yellow-950/25"}`} >
          {node.name}
            
          </a>
        </Link>
        {hasChild && selectedParentId === node.id && (
          <div className=" bg-white ">
            <ul className={` absolute  text-black bg-white  w-64  text-left  border border-t-2 border-t-yellow-950  -top-[2px] left-[95.5%]  z-50`}>
              <HomeTree data={node} />
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export default HomeTree;