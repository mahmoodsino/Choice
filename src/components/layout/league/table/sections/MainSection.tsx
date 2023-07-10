import { LeagueBox } from "@/components/layout/base-box";
import { TeamsTable } from "@/components/table";
import { AppContext } from "@/context/BaseBox";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  const {query} = useRouter()


  return (
    <div>
      {/* <TeamsTable  /> */}
    </div>
  );
};

export default MainSection;
