import Link from "next/link";
import React, { FC } from "react";

interface Props {
  img: string;
  name: string;
  id: number;
  onClick?: () => void;
}

// href={`/league/${id}/table`}
const LeaguesCard: FC<Props> = ({ img, name, id, onClick }) => {
  return (
    <li onClick={onClick}>
      <Link href="#">
        <img src={img} />
      </Link>
      <span>{name}</span>
    </li>
  );
};

export default LeaguesCard;
