import { useFetch } from "@/api/hooks/useFetch";
import { TableType } from "@/utils";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { ReloadButton } from "../buttons";
import { Loading } from "../loading";
import TableTr from "./TableTr";

interface Props {
  selectedSeason: number;
  leagueId: number;
}

const TeamsTable: FC<Props> = ({ selectedSeason, leagueId }) => {
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<any>(
      selectedSeason ? `v1/leagues/${leagueId}/${selectedSeason}/standings` : ""
    );
  const [table, setTable] = useState<TableType>();
  const [tableFirstArray, setTableFirstArray] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setTable(data?.data);
    }
  }, [data]);

  useEffect(() => {
    if (table) {
      const detailsObject = table?.overall[0].details;
      setTableFirstArray(Object?.keys(detailsObject));
    }
  }, [table]);

  const [tableType, setTableType] = useState<"home" | "away" | "overall">(
    "overall"
  );
  const [tableShowType, setTableShowType] = useState<"all" | "short">("short");
  const type: ["home", "away", "overall"] = ["home", "away", "overall"];
  const showType: ["all", "short"] = ["all", "short"];

  console.log(tableFirstArray);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="button-container">
          {type.map((item, i) => {
            const capitalizedItem =
              item.charAt(0).toUpperCase() + item.slice(1);
            return (
              <button
                key={i}
                className={
                  tableType === item ? "btn-primary selected" : "btn-primary"
                }
                onClick={() => setTableType(item)}
              >
                {capitalizedItem}
              </button>
            );
          })}
        </div>
        <div className="button-container">
          {showType.map((item, i) => {
            const capitalizedItem =
              item.charAt(0).toUpperCase() + item.slice(1);
            return (
              <button
                key={i}
                className={
                  tableShowType === item
                    ? "btn-primary selected"
                    : "btn-primary"
                }
                onClick={() => setTableShowType(item)}
              >
                {capitalizedItem}
              </button>
            );
          })}
        </div>
      </div>
      {!isLoading ? (
        <div>
          {tableShowType == "short" ? (
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
                {table?.[tableType]?.map((item, i) => {
                  return (
                    <TableTr
                      index={i}
                      key={i}
                      TableTr={item}
                      tableShowType={tableShowType}
                    />
                  );
                })}
              </tbody>
            </table>
          ) : (
            <table className="leagues-table">
              <thead>
                <tr>
                  <th style={{ width: "35px", textAlign: "center" }}>#</th>
                  <th></th>
                  {tableFirstArray.map((item, i) => {
                    return (
                      <th key={i} style={{ width: "0" }}>
                        <span className="number">{item.slice(0, 2)}</span>{" "}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {table?.[tableType]?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <Link
                          href={`/team/${item?.team?.id}/fixtures`}
                          className="imsp"
                        >
                          <img src={item?.team?.image} />{" "}
                          <span>{item?.team?.name}</span>
                        </Link>
                      </td>
                      <td>
                        <span className="number">
                          {item.details.played_matches}
                        </span>{" "}
                      </td>
                      <td>
                        <span className="number">{item.details.wins}</span>{" "}
                      </td>
                      <td>
                        <span className="number">{item.details.draw}</span>{" "}
                      </td>
                      <td>
                        <span className="number">{item.details.lost}</span>{" "}
                      </td>
                      <td>
                        <span className="number">{item.details.scored}</span>{" "}
                      </td>
                      <td>
                        <span className="number">{item.details.conceded}</span>{" "}
                      </td>
                      <td>
                        <span className="number">
                          {item.details.difference}
                        </span>{" "}
                      </td>
                      <td>
                        <span className="number">{item.details.points}</span>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <Loading style={{ width: "25px" }} />
      )}
      {isError && <ReloadButton refetch={refetch} />}
    </div>
  );
};

export default TeamsTable;
