import Link from "next/link";
import React, { FC } from "react";

interface Props {
  img: string;
  name: string;
  id: number;
}

const LeaguesCard: FC<Props> = ({ img, name, id }) => {
  return (
    <li>
      <Link href={`/league/${id}/table`}>
        <img src={img} />
      </Link>
      <span>{name}</span>
    </li>
  );
};

export default LeaguesCard;
