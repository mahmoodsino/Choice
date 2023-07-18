import { useFetch } from "@/api/hooks/useFetch";
import { ReloadButton } from "@/components/buttons";
import { MainCard } from "@/components/cards";
import { LeagueBox } from "@/components/layout/base-box";
import { NoData } from "@/components/no-data";
import { AppContext } from "@/context/BaseBox";
import { FixtureDetailsTypes } from "@/utils";
import moment from "moment";
import { FC, useContext, useEffect, useState } from "react";

interface DataType {
  success: boolean;
  data: FixtureDetailsTypes[];
  message: string;
  pagination: string;
  per_page: number;
  current_page: number;
  has_more: boolean;
}

interface Props {
  selectedSeason: number;
}

const MainSection: FC<Props> = ({ selectedSeason }) => {
  const [momentDate, setMomentDate] = useState<string>(moment().toString());
  const [fixtures, setFixtures] = useState<FixtureDetailsTypes[]>([]);

  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<DataType>(
      selectedSeason
        ? `v1/leagues/fixtures/${moment(momentDate).format(
            "YYYY-MM-DD"
          )}/${moment(momentDate).format("YYYY-MM-DD")}/${selectedSeason}`
        : ""
    );

  useEffect(() => {
    if (data) {
      setFixtures(data?.data);
    }
  }, [data]);
  return (
    <div>
      <MainCard
        isLoading={isLoading}
        fixtures={fixtures!}
        canSelect
        setTimeInMoment={setMomentDate}
        timeInMoment={momentDate}
      />
      {isError && <ReloadButton refetch={refetch} />}
      {!isLoading && !isError && fixtures?.length == 0 && <NoData />}
    </div>
  );
};

export default MainSection;
