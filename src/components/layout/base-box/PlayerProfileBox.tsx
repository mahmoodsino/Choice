import { CustomBtn } from "@/components/buttons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const routes = [
  { name: "profile", path: "/player/player-profile" },
  { name: "Fixtures", path: "" },
];

const PlayerProfileBox: FC<Props> = ({ children }) => {
  const { pathname, push } = useRouter();

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
        {routes.map((item, i) => {
          return (
            <li key={i}>
              <Link
                className={`${
                  pathname.slice(1) !== item.path.slice(1) ? "" : "active"
                } }`}
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

export default PlayerProfileBox;
