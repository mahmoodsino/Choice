import { useFetch } from "@/api/hooks/useFetch";
import { LeaguesCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { LeaguesTypes } from "@/utils";
import React, { FC } from "react";

interface Props {
  countryId: number;
}

const League: FC<Props> = ({ countryId }) => {
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<LeaguesTypes>(`v1/leagues/all/country/${countryId}`);
  return (
    <div>
      {!isLoading ? (
        <ul className="leagues-ul2">
          {data?.data.map((item, i) => {
            return (
              <LeaguesCard
                key={i}
                id={item.id}
                img={item.image}
                name={item.name}
              />
            );
          })}
        </ul>
      ) : (
        <Loading style={{ width: "40px" }} />
      )}
    </div>
  );
};

export default League;
