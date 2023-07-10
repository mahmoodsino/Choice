import { GetAppCard, MainCard } from "@/components/cards";
import { AppContext } from "@/context/BaseBox";
import React, { FC, useContext, useEffect } from "react";

const MainSection: FC = () => {
  
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  return (
    <div>
      <GetAppCard />
      {/* <MainCard /> */}
      {/* <MainCard /> */}
    </div>
  );
};

export default MainSection;
