import { FixturesType } from "@/utils";
import Link from "next/link";
import React, { FC } from "react";
import { CustomBtn } from "../buttons";

interface Props {
  fixtures: FixturesType[];
}

const MatchList: FC<Props> = ({ fixtures }) => {
  return (
    <ul className="match-list">
      {fixtures?.map((item, i) => {
        return (
          <li key={i}>
            <div className="left">&quot;{item.time}&quot;</div>
            <Link href={`/fixtures/${item.id}/overview`} className="middle">
              <img src={item.home.image} />
              <span>{item.home.name}</span>
              <span className="score">
                {item.score.home} : {item.score.away}
              </span>
              <span>{item.away.name}</span>
              <img src={item.away.image} />
            </Link>
            <div className="right">
              <button className="btn-circle btn-sm btn-no-bg mark-noti-btn [active]"></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MatchList;
