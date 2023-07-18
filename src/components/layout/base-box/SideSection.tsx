import { useFetch } from "@/api/hooks/useFetch";
import { Loading } from "@/components";
import { CountryTypes, LeaguesDataTypes } from "@/utils";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import Collapsible from "react-collapsible";

export interface LeaguesTypes {
  current_page: number;
  data: LeaguesDataTypes[];
  has_more: boolean;
  message: string;
  pagination: boolean;
  per_page: number;
  success: boolean;
}

const SideSection: FC = () => {
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<LeaguesTypes>("v1/leagues/all");

  return (
    <div className="home-left">
      <div className="card">
        <ul>
          {isLoading ? (
            <Loading />
          ) : (
            <li>
              <Collapsible
                open={true}
                trigger={
                  <h3 style={{ cursor: "pointer" }} className="text-title">
                    my leagues
                  </h3>
                }
              >
                <ul className="items-list-1">
                  {data?.data.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link href={`/league/${item.id}/news`}>
                          <img src={item.image} />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Collapsible>
            </li>
          )}
          <li>
            <h3 className="text-title">my team</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideSection;
