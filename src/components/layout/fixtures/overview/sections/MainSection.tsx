import { HowWillWin } from "@/components/cards";
import { FixturesBox } from "@/components/layout/base-box";
import { AppContext } from "@/context/BaseBox";
import { FixtureDetailsTypes, StatisticsTypes } from "@/utils";
import React, { FC, useContext, useEffect } from "react";

interface Props {
  statistics: StatisticsTypes;
  details: FixtureDetailsTypes;
}

interface StatisticsDetailsProps {
  statistics: StatisticsTypes;
  details: FixtureDetailsTypes;
}

const StatisticsDetails: FC<StatisticsDetailsProps> = ({
  statistics,
  details,
}) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <span> Average Possession</span>
      </div>

      <div className="average-possession">
        <div
          style={{ width: `${statistics?.possession?.home}%` }}
          className="blue"
        >
          {statistics?.possession?.home}%
        </div>

        <div
          style={{ width: `${statistics?.possession?.away}%` }}
          className="brown"
        >
          {statistics?.possession?.away}%
        </div>
      </div>
      {statistics?.all?.map((item, i) => {
        return (
          <div key={i} className="results">
            <span>{item.home}</span>
            <span>{item.text}</span>
            <span>{item?.away}</span>
          </div>
        );
      })}
      <ul className="over">
        {details?.events?.map((item, i) => {
          return (
            <li
              key={i}
              className={`match-details ${item.team == "away" && "go-right"}`}
            >
              <div className=" time">
                <span>{item.minute}</span>
              </div>
              <div className="img-name">
                <div className="img-div">
                  <img
                    src={
                      item?.type == "YELLOWCARD"
                        ? "/YELLOWCARD.png"
                        : item?.type == "REDCARD"
                        ? "/REDCARD.png"
                        : item?.type == "GOAL"
                        ? "/GOAL.png"
                        : "/SUBSTITUTION.png"
                    }
                  />{" "}
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="name"
                >
                  <span>{item.player1}</span>
                  {item?.type == "SUBSTITUTION" && <span>{item?.player2}</span>}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const MainSection: FC<Props> = ({ statistics, details }) => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  return (
    <div>
      <ul className="fixture-info-list">
        <li>
          <img src="/star.svg" />
          <span>beIN Sports CONNECT MENA</span>
        </li>
      </ul>
      <HowWillWin />
      {details?.state != "NS" && (
        <StatisticsDetails statistics={statistics} details={details} />
      )}
    </div>
  );
};

export default MainSection;
