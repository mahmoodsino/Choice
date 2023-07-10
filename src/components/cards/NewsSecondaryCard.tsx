import Link from "next/link";
import React, { FC } from "react";

const NewsSecondaryCard: FC = () => {
  return (
    <div className="news">
      <div className=" box-news2">
        <Link href="#">
          {" "}
          <img className="img2" src="/mes.jfif" />{" "}
        </Link>
        <div>
          <a href="#">
            <h3> The squad for the trip to San Sebastion Xavi names ...</h3>
          </a>
          <span> 22 AUG 2022 14:16</span>
        </div>
      </div>
    </div>
  );
};

export default NewsSecondaryCard;
