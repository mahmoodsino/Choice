import { useAuth } from "@/context/auth/AuthContext";
import { ScoreType, TeamTypes } from "@/utils";
import Link from "next/link";
import React, { FC } from "react";
import { CustomBtn } from "../buttons";
import { FootballTimer } from "../timer/FootballTimer";

interface Props {
  homeTeam: TeamTypes;
  awayTeam: TeamTypes;
  score: ScoreType;
  time: {
    minutes: number;
    seconds: number;
  };
  isLive: boolean;
  state:
    | "NS"
    | "INPLAY_1ST_HALF"
    | "HT"
    | "BREAK"
    | "FT"
    | "INPLAY_ET"
    | "AET"
    | "FT_PEN"
    | "INPLAY_PENALTIES"
    | "POSTPONED"
    | "SUSPENDED"
    | "CANCELLED"
    | "TBA"
    | "WO"
    | "ABANDONED"
    | "DELAYED"
    | "AWARDED"
    | "INTERRUPTED"
    | "AWAITING_UPDATES"
    | "DELETED"
    | "EXTRA_TIME_BREAK"
    | "INPLAY_2ND_HALF"
    | "PENDING";
}

const TimeMatch: FC<Props> = ({
  awayTeam,
  homeTeam,
  score,
  time,
  isLive,
  state,
}) => {
  const { isAuth } = useAuth();
  return (
    <div className="time-match">
      <div className="left">
        <Link href={`/team/${homeTeam.id}/fixtures`}>
          <img src={homeTeam?.image} />
          <span className="t-name">{homeTeam?.name}</span>
        </Link>
      </div>
      <div className="middle">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <h3>{score.home}</h3>-<h3>{score.away}</h3>
          </div>
          {isLive && state != "HT" && state !== "FT" && (
            <FootballTimer
              minutes={time?.minutes}
              seconds={time?.seconds}
              showSec
            />
          )}
          {(state == "FT" ||
            state == "PENDING" ||
            state == "CANCELLED" ||
            state == "HT" ||
            state == "POSTPONED" ||
            state == "SUSPENDED") &&
            state}
        </div>
        <span className="timer"></span>
        {isAuth() && (
          <div>
            <CustomBtn isFav isNotif={false} />
            <CustomBtn isFav={false} isNotif={true} />
          </div>
        )}
      </div>
      <div className="right">
        <Link href={`/team/${awayTeam.id}/fixtures`}>
          <img src={awayTeam?.image} />
          <span className="t-name">{awayTeam?.name}</span>
        </Link>
      </div>
    </div>
  );
};

export default TimeMatch;
