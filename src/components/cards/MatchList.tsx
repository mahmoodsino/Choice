import { useAuth } from "@/context/auth/AuthContext";
import { FixtureDetailsTypes, TeamUpcomingFixtureType } from "@/utils";
import moment from "moment";
import Link from "next/link";
import React, { FC } from "react";
import { CustomBtn } from "../buttons";

interface Props {
  fixtures: FixtureDetailsTypes[] | TeamUpcomingFixtureType[];
}

const MatchList: FC<Props> = ({ fixtures }) => {
  const { isAuth } = useAuth();
  return (
    <ul className="match-list">
      {fixtures?.map((item, i) => {
        return (
          <li key={i}>
            <div className="left">{item.state == "FT" && item.state}</div>
            <Link href={`/fixtures/${item.id}/overview`} className="middle">
              <img src={item.home.image} />
              <span>{item.home.name}</span>
              <span className="score">
                {item.state == "NS"
                  ? moment(item.starting_at).format("HH:mm")
                  : `${item.score.home} : ${item.score.away}`}
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
