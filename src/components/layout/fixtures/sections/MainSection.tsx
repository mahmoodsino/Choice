import { useFetch } from "@/api/hooks/useFetch";
import { ReloadButton } from "@/components/buttons";
import { GetAppCard, MainCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { NoData } from "@/components/no-data";
import { AppContext } from "@/context/BaseBox";
import { LeaguesDataTypes } from "@/utils";
import moment, { Moment } from "moment";
import React, { FC, useContext, useEffect, useState } from "react";

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
  const [momentDate, setMomentDate] = useState<string>(moment().toString());
  // const { isLoading, refetch, data, error, isError, isFetching } =
  //   useFetch<MatchesDataType>(`v1/fixtures/all/2022-08-20/2022-08-20`);

  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<MatchesDataType>(
      `v1/fixtures/all/${moment(momentDate).format("YYYY-MM-DD")}/${moment(
        momentDate
      ).format("YYYY-MM-DD")}`
    );

  return (
    <div>
      <GetAppCard />
      <MainCard
        isLoading={isLoading}
        matches={data?.data!}
        canSelect
        setTimeInMoment={setMomentDate}
        timeInMoment={momentDate}
      />
      {isError && <ReloadButton refetch={refetch} />}
      {!isLoading && data?.data?.length == 0 && <NoData />}
    </div>
  );
};

export default MainSection;
