import { LeagueBox } from "@/components/layout/base-box";
import { TeamsTable } from "@/components/table";
import { AppContext } from "@/context/BaseBox";
import { SeasonsTypes } from "@/utils";
import { useRouter } from "next/router";
import React, { useContext, useEffect, FC } from "react";

interface Props {
  selectedSeason: number;
  leagueId: number;
}

const MainSection: FC<Props> = ({ leagueId, selectedSeason }) => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  const { query } = useRouter();

  return (
    <div>
      <TeamsTable leagueId={leagueId} selectedSeason={selectedSeason} />
    </div>
  );
};

export default MainSection;
