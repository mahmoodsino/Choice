import { CustomBtn } from "@/components/buttons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}



const TeamBox: FC<Props> = ({ children }) => {
  const { pathname, push } = useRouter();
  const { query } = useRouter();

  return (
    <div className="card">
      <div className="box-title-2">
        <div className="left">
          <img src="/pa.png" />
          <div>
            <h3>Paris Sant</h3>
            <span>France</span>
          </div>
        </div>

        <div className="right">
          <CustomBtn />
          <CustomBtn isNotif isFav={false} isActive />
        </div>
      </div>
      <ul className="tabs-list">
        <li>
          <Link
            className={`${pathname == `/team/[id]/fixtures` ? "active" : ""} }`}
            href={`/team/${query.id}/fixtures`}
          >
            Fixtures
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname == `/team/[id]/news` ? "active" : ""} }`}
            href={`/team/${query.id}/news`}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname == `/team/[id]/table` ? "active" : ""} }`}
            href={`/team/${query.id}/table`}
          >
            Table
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname == `/team/[id]/squad` ? "active" : ""} }`}
            href={`/team/${query.id}/squad`}
          >
            Squad
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname == `/team/[id]/transfers` ? "active" : ""
            } }`}
            href={`/team/${query.id}/transfers`}
          >
            Transfers
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default TeamBox;
