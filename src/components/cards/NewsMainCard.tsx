import { NewsType } from "@/utils";
import Link from "next/link";
import React, { FC } from "react";

interface NewsMainCardProps {
  news: NewsType;
}

const NewsMainCard: FC<NewsMainCardProps> = ({ news }) => {
  return (
    <div className=" box-news1">
      <Link href={`/news/${news.slug}`}>
        {" "}
        <img className="img1" src={news?.image} />{" "}
      </Link>
      <a href={`/news/${news.slug}`}>
        <h3>{news?.title}</h3>
      </a>

      {/* <span>{news.}</span> */}
    </div>
  );
};

export default NewsMainCard;
