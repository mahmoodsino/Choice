import { TeamBox } from "@/components/layout/base-box";
import { TeamsTable } from "@/components/table";
import { AppContext } from "@/context/BaseBox";
import { useContext, useEffect, FC } from "react";

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
  return (
    <div>
      <TeamsTable leagueId={leagueId} selectedSeason={selectedSeason} />
    </div>
  );
};

export default MainSection;
