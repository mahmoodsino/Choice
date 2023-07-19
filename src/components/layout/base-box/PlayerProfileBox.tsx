import { useFetch } from "@/api/hooks/useFetch";
import { CustomBtn } from "@/components/buttons";
import { TransfersCard } from "@/components/cards";
import { PlayerType } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useState, useEffect } from "react";
import { PlayerProfileMainSection } from "../player";

interface Props {
  children: ReactNode;
}

interface ApiResponse {
  success: boolean;
  data: PlayerType;
  message: string;
  pagination: boolean;
}

const PlayerProfileBox: FC<Props> = ({ children }) => {
  const { pathname, push, query } = useRouter();
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<ApiResponse>(query.id ? `v1/players/details/${query.id}` : "");
  const [player, setPlayer] = useState<PlayerType>();

  useEffect(() => {
    if (data) {
      setPlayer(data?.data);
    }
  }, [data]);

  return (
    <div className="card">
      <div className="box-title-2">
        <div className="left">
          <img src={player?.image} />
          <div>
            <h3>{player?.name}</h3>
            <span>{player?.country?.name}</span>
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
            className={`${
              pathname == `/player/[id]/player-profile` ? "active" : ""
            } }`}
            href={`/player/${query.id}/player-profile`}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname == `/player/[id]/player-fixtures` ? "active" : ""
            } }`}
            href={`/player/${query.id}/player-fixtures`}
          >
            Fixtures
          </Link>
        </li>
        <li>
          <Link
            className={`${
              pathname == `/player/[id]/player-transfers` ? "active" : ""
            } }`}
            href={`/player/${query.id}/player-transfers`}
          >
            Transfers
          </Link>
        </li>
      </ul>

      {pathname.includes("/player/[id]/player-profile") && (
        <PlayerProfileMainSection player={player!} />
      )}
      {pathname.includes("/player/[id]/player-transfers") && (
        <div>
          {player?.transfers?.map((item, i) => {
            return <TransfersCard transfers={item} key={i} />;
          })}
        </div>
      )}

      {/* {pathname.includes(`/player/[id]/player-profile`) && (
        <PlayerProfileMainSection />
      )} */}
    </div>
  );
};

export default PlayerProfileBox;
