import { NewsMainCard, NewsSecondaryCard } from "@/components/cards";
import React, { FC } from "react";

const TrendingNews:FC = () => {
  return (
    <div className="home-right">
      <div className="card">
        <h3 className="text-title"> Trending News 🔥</h3>
        <NewsMainCard/>
        <NewsSecondaryCard/>
        <NewsSecondaryCard/>
        <NewsSecondaryCard/>
        <NewsSecondaryCard/>
        <NewsSecondaryCard/>
      </div>
    </div>
  );
};

export default TrendingNews;
