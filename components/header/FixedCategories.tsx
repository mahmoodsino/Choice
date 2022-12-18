import React from "react";
import { useRecoilValue } from "recoil";
import { HomePageAtom } from "../../helper";
import HomeTree from "../layouts/home/sections/HomeTree";

const FixedCategories = () => {
  const homePageState = useRecoilValue(HomePageAtom);
  return (
    <div className="border w-[250px]">
      <HomeTree data={homePageState.featured_categories} />
    </div>
  );
};

export default FixedCategories;
