import { HowWillWin } from "@/components/cards";
import { FixturesBox } from "@/components/layout/base-box";
import { AppContext } from "@/context/BaseBox";
import { StatisticsTypes } from "@/utils";
import React, { FC, useContext, useEffect } from "react";

interface Props {
  statistics: StatisticsTypes;
}

interface StatisticsDetailsProps {
  statistics: StatisticsTypes;
}

const StatisticsDetails: FC<StatisticsDetailsProps> = ({ statistics }) => {
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
        <li className="match-details">
          <div className=" time">
            <span> 10</span>
          </div>
          <div className="img-name">
            <div className="img-div">
              <img src="/pa.png" />
            </div>
            <div className="name">
              <span> sdgfdxnxhngf dvdhfcj ( 1 - 0 )</span>
            </div>
          </div>
        </li>
        <li className="match-details go-right">
          <div className=" time">
            <span> 10</span>
          </div>
          <div className="img-name">
            <div className="img-div">
              <img src="/pa.png" />
            </div>
            <div className="name">
              <span> sdgfdxnxhngf dvdhfcj ( 1 - 0 )</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

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
      <StatisticsDetails statistics={statistics} />
    </div>
  );
};

export default MainSection;
