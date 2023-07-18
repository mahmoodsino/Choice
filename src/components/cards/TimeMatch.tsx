import { useAuth } from "@/context/auth/AuthContext";
import { ScoreType, TeamTypes } from "@/utils";
import React, { FC } from "react";
import { CustomBtn } from "../buttons";

interface Props {
  homeTeam: TeamTypes;
  awayTeam: TeamTypes;
  time: string;
  startAt: string;
  score: ScoreType;
}

const TimeMatch: FC<Props> = ({ awayTeam, homeTeam, startAt, time, score }) => {
  const { isAuth } = useAuth();
  return (
    <div className="time-match">
      <div className="left">
        <img src={homeTeam?.image} />
        <span className="t-name">{homeTeam?.name}</span>
        <span className="t-name">{score?.home}</span>
      </div>
      <div className="middle">
        <h3>{startAt}</h3>
        {/* &quot;{time}&quot; */}
        <span className="timer"></span>
        {isAuth() && (
          <div>
            <CustomBtn isFav isNotif={false} />
            <CustomBtn isFav={false} isNotif={true} />
          </div>
        )}
      </div>
      <div className="right">
        <img src={awayTeam?.image} />
        <span className="t-name">{awayTeam?.name}</span>
        <span className="t-name">{score?.away}</span>
      </div>
    </div>
  );
};

export default TimeMatch;
