import { useFetch } from "@/api/hooks/useFetch";
import { GetAppCard, MainCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { AppContext } from "@/context/BaseBox";
import { MatchesDataType } from "@/utils";
import moment, { Moment } from "moment";
import React, { FC, useContext, useEffect, useState } from "react";

const MainSection: FC = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  const [momentDate, setMomentDate] = useState<string>(moment().toString());
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<MatchesDataType>(`v1/fixtures/all/2022-08-20/2022-08-20`);
    

    // const { isLoading, refetch, data, error, isError, isFetching } =
    // useFetch<MatchesDataType>(
    //   `v1/fixtures/${moment(momentDate).format("YYYY-MM-DD")}/${moment(
    //     momentDate
    //   ).format("YYYY-MM-DD")}`
    // );


  useEffect(() => {
    console.log(data);
  }, [data]);

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
    </div>
  );
};

export default MainSection;
