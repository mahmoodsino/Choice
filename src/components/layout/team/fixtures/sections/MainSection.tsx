import { NextMatch } from "@/components/cards";
import { TeamBox } from "@/components/layout/base-box";
import { AppContext } from "@/context/BaseBox";
import { useContext, useEffect } from "react";
import MatchTr from "./MatchTr";
import TopPlayersCard from "./TopPlayersCard";

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  return (
    <div>
      <h3 className="box-title-3"> Next Match</h3>
      <div className="row">
        <div className="col-4">
          <div className="pre-emi">
            <img src="/pa.png" />
            <span> Premier league</span>
          </div>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <span> Emirates Stadium</span>
        </div>
      </div>
      <ul className="match-list-2">
        <NextMatch />
      </ul>
      <hr />
      <h3 className="box-title-3"> Last Fixtures</h3>
      <table className="last-matches-table">
        <MatchTr />
        <MatchTr />
      </table>
      <hr />

      <h3 className="box-title-3"> Top Players</h3>
      <div className="box">
       <TopPlayersCard/>
       <TopPlayersCard/>
       <TopPlayersCard/>
      </div>
    </div>
  );
};

export default MainSection;
