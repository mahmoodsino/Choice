import { useFetch } from "@/api/hooks/useFetch";
import { Loading } from "@/components";
import { LeaguesTypes } from "@/utils";
import React, { FC, useEffect } from "react";

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
              <h3 className="text-title">my leagues</h3>
              <ul className="items-list-1">
                {data?.data.map((item, i) => {
                  return (
                    <li key={i}>
                      <a href="#">
                        <img src={item.image} />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
          <li>
            <h3 className="text-title">my team</h3>
          </li>
          <li>
            <h3 className="text-title">countries</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideSection;
