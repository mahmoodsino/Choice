import { NewsMainCard } from "@/components/cards";
import { LeagueBox } from "@/components/layout/base-box";
import { AppContext } from "@/context/BaseBox";
import React, { useContext, useEffect } from "react";

const MainSection = () => {
    const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <NewsMainCard />
        </div>
        <div className="col-md-6">
          <NewsMainCard />
        </div>
        <div className="col-md-6">
          <NewsMainCard />
        </div>
        <div className="col-md-6">
          <NewsMainCard />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
