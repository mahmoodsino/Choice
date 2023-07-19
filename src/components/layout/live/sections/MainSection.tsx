import { useFetch } from "@/api/hooks/useFetch";
import { ReloadButton } from "@/components/buttons";
import { GetAppCard, MainCard } from "@/components/cards";
import { NoData } from "@/components/no-data";
import { AppContext } from "@/context/BaseBox";
import { LeaguesDataTypes } from "@/utils";
import { FC, useContext, useEffect, useState } from "react";

export interface MatchesDataType {
  message: string;
  pagination: boolean;
  per_page: number;
  current_page: number;
  has_more: boolean;
  data: LeaguesDataTypes[];
  success: boolean;
}

const MainSection: FC = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  const [firstTime, setFirstTime] = useState(true);
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<MatchesDataType>(`v1/fixtures/live`);

  useEffect(() => {
    if (data) {
      setFirstTime(false);
    }
  }, [data]);

  useEffect(() => {
    const minutesInterval = setInterval(() => {
      refetch();
    }, 60000);
    return () => {
      clearInterval(minutesInterval);
    };
  }, []);

  return (
    <div>
      <GetAppCard />
      <MainCard
        firstTime={firstTime}
        isLoading={isLoading}
        matches={data?.data!}
        canSelect={false}
        refetch={refetch}
      />
      {isError && <ReloadButton refetch={refetch} />}
      {!isLoading && data?.data?.length == 0 && <NoData />}
    </div>
  );
};

export default MainSection;
