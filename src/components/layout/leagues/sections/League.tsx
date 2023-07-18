import { useFetch } from "@/api/hooks/useFetch";
import { ReloadButton } from "@/components/buttons";
import { LeaguesCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { NoData } from "@/components/no-data";
import { LeaguesDataTypes } from "@/utils";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  countryId: number;
  setSelectedCountry: (item: number) => void;
}

export interface LeaguesTypes {
  current_page: number;
  data: LeaguesDataTypes[];
  has_more: boolean;
  message: string;
  pagination: boolean;
  per_page: number;
  success: boolean;
}

const League: FC<Props> = ({ countryId, setSelectedCountry }) => {
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<LeaguesTypes>(
      countryId ? `v1/leagues/all/country/${countryId}` : ""
    );
  const { replace, pathname } = useRouter();

  return (
    <div>
      {!isLoading ? (
        <ul className="leagues-ul2">
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => (replace({ pathname }), setSelectedCountry(0))}
          >
            <button
              style={{ fontSize: "20px", color: "white", cursor: "pointer" }}
            >
              Return
            </button>
          </li>
          {data?.data.map((item, i) => {
            return (
              <LeaguesCard
                href={`/league/${item.id}/fixtures`}
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
      {isError && <ReloadButton refetch={refetch} />}
      {!isLoading && data?.data?.length == 0 && <NoData />}
    </div>
  );
};

export default League;
