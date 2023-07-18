import { TableTrType, TeamTypes } from "@/utils";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  TableTr: TableTrType;
  index: number;
  tableShowType: "all" | "short";
}

const TableTr: FC<Props> = ({ TableTr, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Link href={`/team/${TableTr?.team?.id}/fixtures`} className="imsp">
          <img src={TableTr?.team?.image} /> <span>{TableTr?.team?.name}</span>
        </Link>
      </td>
      <td>
        <span className="number">{TableTr.details.played_matches}</span>{" "}
      </td>
      <td>
        <span className="number">{TableTr?.details?.difference}</span>
      </td>
      <td>
        <span className="number">{TableTr?.details?.points}</span>
      </td>
    </tr>
  );
};

export default TableTr;
