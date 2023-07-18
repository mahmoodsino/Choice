import { NewsType } from "@/utils";
import Link from "next/link";
import React, { FC } from "react";

interface NewsSecondaryCard {
  news: NewsType;
}

const NewsSecondaryCard: FC<NewsSecondaryCard> = ({ news }) => {
  return (
    <div className="news">
      <div className=" box-news2">
        <Link href={`/news/${news.slug}`}>
          <img className="img2" src={news?.image} />{" "}
        </Link>
        <div>
          <a href={`/news/${news.slug}`}>
            <h3>{news?.title}</h3>
          </a>
          {/* <span> 22 AUG 2022 14:16</span> */}
        </div>
      </div>
    </div>
  );
};

export default NewsSecondaryCard;
