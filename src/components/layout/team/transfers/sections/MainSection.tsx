import { TransfersCard } from "@/components/cards";
import { TeamBox } from "@/components/layout/base-box";
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
      <TransfersCard />
      <TransfersCard />
      <TransfersCard />
    </div>
  );
};

export default MainSection;
