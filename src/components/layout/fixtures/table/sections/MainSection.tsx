import { TeamsTable } from "@/components/table";
import { SeasonsTypes } from "@/utils";
import { FC } from "react";

interface Props {
  selectedSeason: number;
  leagueId: number;
}

const MainSection: FC<Props> = ({ selectedSeason, leagueId }) => {
  return (
    <div>
      <TeamsTable selectedSeason={selectedSeason} leagueId={leagueId} />
    </div>
  );
};

export default MainSection;
