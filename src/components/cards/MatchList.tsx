import { useAuth } from "@/context/auth/AuthContext";
import { FixtureDetailsTypes } from "@/utils";
import moment from "moment";
import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import { CustomBtn } from "../buttons";
import { FootballTimer } from "../timer/FootballTimer";

interface Props {
  fixtures: FixtureDetailsTypes[];
}

const MatchList: FC<Props> = ({ fixtures }) => {
  const { isAuth } = useAuth();
  return (
    <ul className="match-list">
      {fixtures?.map((item, i) => {
        return (
          <li key={i}>
            <div className="left">
              {(item.state == "FT" ||
                item.state == "PENDING" ||
                item.state == "CANCELLED" ||
                item.state == "HT" ||
                item.state == "POSTPONED" ||
                item.state == "SUSPENDED") &&
                item.state}
              {item?.is_live && (
                <FootballTimer
                  showSec={false}
                  minutes={item?.time?.minutes}
                  seconds={item?.time?.seconds}
                />
              )}
            </div>
            <Link href={`/fixtures/${item.id}/overview`} className="middle">
              <img src={item.home.image} />
              <span>{item.home.name}</span>
              <span className="score">
                {item?.score?.away == null || item?.score?.home == null
                  ? moment(item.starting_at).format("HH:mm")
                  : `${item?.score?.home} : ${item?.score?.away}`}
              </span>
              <span>{item.away.name}</span>
              <img src={item.away.image} />
            </Link>
            {item.state != "FT" && isAuth() && (
              <div className="right">
                <button className="btn-circle btn-sm btn-no-bg mark-noti-btn"></button>
              </div>
            )}
          </li>
        );
        // [active]
      })}
    </ul>
  );
};

export default MatchList;
