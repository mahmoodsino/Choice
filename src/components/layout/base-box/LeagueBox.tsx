import { CustomBtn } from "@/components/buttons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LeagueBox: FC<Props> = ({ children }) => {
  const { pathname, push } = useRouter();
  const { query } = useRouter();

  return (
    <div className="card">
      <div className="box-title-2">
        <div className="left">
          <img src="/pa.png" />
          <div>
            <h3>Premier League</h3>
            <span>England</span>
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
            className={`${pathname == `/league/[id]/table` ? "active" : ""} }`}
            href={`/league/${query.id}/table`}
          >
            Table
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname == `/league/[id]/knockout` ? "active" : ""
            } }`}
            href={`/league/${query.id}/knockout`}
          >
            Knockout
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname == `/league/[id]/fixtures` ? "active" : ""
            } }`}
            href={`/league/${query.id}/fixtures`}
          >
            Fixtures
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname == `/league/[id]/news` ? "active" : ""} }`}
            href={`/league/${query.id}/news`}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname == `/league/[id]/transfers` ? "active" : ""
            } }`}
            href={`/league/${query.id}/transfers`}
          >
            Transfers
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname == `/league/[id]/seasons` ? "active" : ""
            } }`}
            href={`/league/${query.id}/seasons`}
          >
            Seasons
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default LeagueBox;
