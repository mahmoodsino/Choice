import { useFetch } from "@/api/hooks/useFetch";
import { SeasonsTypes, TableData } from "@/utils";
import React, { FC, useState, useEffect } from "react";
import { Loading } from "../loading";
import TableTr from "./TableTr";

interface Props {
  season: SeasonsTypes[];
  leagueId: number;
  gameSeasonId?:number
}

const TeamsTable: FC<Props> = ({ season, leagueId,gameSeasonId }) => {
  const [selectedSeason, setSelectedSeason] = useState<number>();
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<TableData>(`v1/leagues/${leagueId}/${selectedSeason}/standings`);


    useEffect(() =>{
      if(gameSeasonId){
        setSelectedSeason(gameSeasonId)
      }else{
        setSelectedSeason(season[0].id)
      }

    },[season,gameSeasonId])

  const [tableType, setTableType] = useState<"home" | "away" | "overall">(
    "overall"
  );
  const handleSeasonChange = (event:any) => {
    setSelectedSeason(event.target.value);
  };

  console.log(selectedSeason);

  const type: ["home", "away", "overall"] = ["home", "away", "overall"];
  return (
    <div>
      <div>
        <div
          className="tabs-list"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ width: "200px" }}>
            <select onChange={handleSeasonChange}>
              {season.map((item, i) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
          </div>
          <div>
            {type.map((item, i) => {
              return (
                <button
                  className="btn-primary"
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={() => setTableType(item)}
                  key={i}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {!isLoading ? (
        <table className="leagues-table">
          <thead>
            <tr>
              <th style={{ width: "35px", textAlign: "center" }}>#</th>
              <th></th>
              <th style={{ width: "0" }}>
                <span className="number">PL</span>{" "}
              </th>
              <th style={{ width: "0" }}>
                {" "}
                <span className="number">GD</span>
              </th>
              <th style={{ width: "0" }}>
                <span className="number">Pts</span>{" "}
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.data?.[tableType]?.map((item, i) => {
              return <TableTr index={i} key={i} TableTr={item} />;
            })}
          </tbody>
        </table>
      ) : (
        <Loading style={{ width: "25px" }} />
      )}
    </div>
  );
};

export default TeamsTable;
