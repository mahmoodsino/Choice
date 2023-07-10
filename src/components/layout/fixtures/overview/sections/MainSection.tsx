import { HowWillWin } from "@/components/cards";
import { FixturesBox } from "@/components/layout/base-box";
import { AppContext } from "@/context/BaseBox";
import { StatisticsTypes } from "@/utils";
import React, { FC, useContext, useEffect } from "react";

interface Props {
  statistics: StatisticsTypes;
}

const MainSection: FC<Props> = ({ statistics }) => {
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
    </div>
  );
};

export default MainSection;
