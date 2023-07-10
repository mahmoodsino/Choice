import { TableTrType, TeamTypes } from "@/utils";
import React,{FC} from "react";



interface Props{
  TableTr:TableTrType
  index:number
}

const TableTr:FC<Props> = ({TableTr,index}) => {
  return (
    <tr>
      <td>{index+1}</td>
      <td>
        <a href="team.html" className="imsp">
          <img src={TableTr?.team?.image} /> <span>{TableTr?.team?.name}</span>
        </a>
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
