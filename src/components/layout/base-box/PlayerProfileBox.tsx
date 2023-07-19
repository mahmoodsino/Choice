import { useFetch } from "@/api/hooks/useFetch";
import { usePost } from "@/api/hooks/usePost";
import { CustomBtn } from "@/components/buttons";
import { TransfersCard } from "@/components/cards";
import { Loading } from "@/components/loading";
import { NewsEntity } from "@/components/new";
import { NoData } from "@/components/no-data";
import { PlayerType } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useState, useEffect } from "react";
import { toast } from "react-toastify";
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
  const {
    isLoading: AddToFavoriteLoading,
    isError: AddToFavoriteISError,
    error: AddToFavoriteError,
    data: AddToFavoriteData,
    mutate,
  } = usePost<any, any>("favorite/store");

  useEffect(() => {
    if (data) {
      setPlayer(data?.data);
    }
  }, [data]);

  const handleAddToFavorite = (id: number, name: string, image: string) => {
    let formdata = new FormData();
    formdata.append("entity_id", id.toString());
    formdata.append("type", "player");
    formdata.append("entity_name", name);
    formdata.append("entity_image", image);
    mutate(formdata, {
      onSuccess: (data) => {
        if (data.data.data.favorite) {
          console.log("true add");
          toast.success("Added successfully");
        } else {
          console.log("true remove");
          toast.success("Removed successfully");
        }
      },
      onError: (error) => {
        toast.error(error.response?.data.message);
      },
    });
  };

  return (
    <div className="card">
      {!isLoading && (
        <div>
          <div className="box-title-2">
            <div className="left">
              <img src={player?.image} />
              <div>
                <h3>{player?.name}</h3>
                <span>{player?.country?.name}</span>
              </div>
            </div>

            <div className="right">
              {!AddToFavoriteLoading ? (
                <CustomBtn
                  onClick={() =>
                    handleAddToFavorite(
                      //@ts-ignore
                      player?.id,
                      player?.name,
                      player?.image
                    )
                  }
                  isFav
                />
              ) : (
                <Loading style={{ width: "40px" }} />
              )}
              <CustomBtn isNotif isFav={false} />
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
            <li>
              <Link
                className={`${
                  pathname == `/player/[id]/player-trophies` ? "active" : ""
                } }`}
                href={`/player/${query.id}/player-trophies`}
              >
                Trophies
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname == `/player/[id]/player-news` ? "active" : ""
                } }`}
                href={`/player/${query.id}/player-news`}
              >
                News
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
          {pathname.includes("/player/[id]/player-trophies") && (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {player?.trophies?.map((item, i) => {
                  return (
                    <div key={i} className="">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          borderBottom: "1px solid #ccc",
                          paddingBottom: "5px",
                        }}
                        className=""
                      >
                        <img
                          style={{ width: "50px" }}
                          src={item.league_image}
                        />
                        <div>
                          <h3 style={{ fontSize: "16px" }}>
                            {item.league_name}
                          </h3>
                        </div>
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "14px",
                            color: "rgba(206, 194, 194, 0.836)",
                          }}
                        >
                          Winner ({item?.winner?.length})
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {item.winner.map((winner, i) => {
                            return (
                              <p key={i}>
                                {winner} , {"  "}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                      {item.runnerup.length > 0 && (
                        <div>
                          <h3
                            style={{
                              fontSize: "14px",
                              color: "rgba(206, 194, 194, 0.836)",
                            }}
                          >
                            Runner-up ({item?.runnerup?.length})
                          </h3>
                          <div style={{ display: "flex", flexWrap: "wrap" }}>
                            {item.runnerup?.map((winner, i) => {
                              return (
                                <p key={i}>
                                  {winner} , {"  "}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {player?.trophies?.length == 0 && <NoData />}
            </div>
          )}
          {pathname.includes("/player/[id]/player-fixtures") && <div></div>}
          {pathname.includes("/player/[id]/player-news") && (
            <div>
              <NewsEntity entity_id={+query.id!} />{" "}
            </div>
          )}
        </div>
      )}
      {isLoading && <Loading style={{ width: "50px" }} />}
    </div>
  );
};

export default PlayerProfileBox;
