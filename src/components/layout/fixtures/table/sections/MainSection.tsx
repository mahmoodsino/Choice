import { TeamsTable } from "@/components/table";
import { SeasonsTypes } from "@/utils";
import { FC } from "react";

interface Props {
  season:SeasonsTypes[]
  leagueId:number
  gameSeasonId:number
}

const MainSection:FC<Props> = ({season,leagueId,gameSeasonId}) => {

  
  return (
    <div>
      <TeamsTable season={season} leagueId={leagueId} gameSeasonId={gameSeasonId} />
    </div>
  );
};

export default MainSection;
