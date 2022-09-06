import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { SearchAtom } from "../../helper";
import BaseButton from "../buttons/BaseButton";
import { SearchIcon } from "../icons";
import BaseInput from "../inputs/BaseInput";
import { v4 } from 'uuid' 


export const routse = [
  { path: "/", name: "Home" },
  { path: "/products", name: "PRODUCTS" },
  { path: "/brand", name: "BRAND NAME" },
  { path: "/aboutus", name: "ABOUT US" },
  { path: "/contactus", name: "CONTACT US" },
];

const Navbar = () => {
  const [searchState, setSearchState] = useRecoilState(SearchAtom);
  const { pathname } = useRouter();



  return (
    <div className="  bg-blue-950  ">
      <div className="px-[75px]  flex   justify-between m-auto 2xl:container items-center h-fit">
        <div className=" py-3 flex items-center text-sm space-x-4">
          {routse.map(route => {
            return(
              <Link key={v4()} href={route.path}>
            <a className={`text-white  border-r pr-4 ${pathname.slice(1) !== route.path.slice(1) ? "" : "font-bold"}`}>{route.name}</a>
          </Link>
            )
          })}
        </div>
        <div className="  flex justify-start   items-center">
          <form className="flex ">
            <BaseInput
              placeholder="Search"
              className="outline-none  w-full  py-1 px-2"
              onChange={(e) => setSearchState(e.target.value)}
              value={searchState}
              type="search"
            />
            <BaseButton
              className="px-5 py-0.5 bg-yellow-950"
              onClick={() => console.log("")}
            >
              <SearchIcon className="w-5 fill-blue-950 " />
            </BaseButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
