import { TransfersCard } from "@/components/cards";
import { LeagueBox } from "@/components/layout/base-box";
import { AppContext } from "@/context/BaseBox";
import { useContext, useEffect } from "react";

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  return <div></div>;
};

export default MainSection;
