import { MainCard } from "@/components/cards";
import { LeagueBox } from "@/components/layout/base-box";
import { AppContext } from "@/context/BaseBox";
import { FC, useContext, useEffect } from "react";

const MainSection: FC = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  return (
    <div>
      {/* <MainCard canSelect /> */}
    </div>
  );
};

export default MainSection;
