import Link from "next/link";
import React, { FC } from "react";

const NewsMainCard: FC = () => {
  return (
    <div className=" box-news1">
      <Link href="#">
        {" "}
        <img className="img1" src="/mes.jfif" />{" "}
      </Link>
      <a href="#">
        <h3> Real Sociedad 1-4 FC Barclona:Its all starting to click</h3>
      </a>

      <span> about 2 hours ago</span>
    </div>
  );
};

export default NewsMainCard;
