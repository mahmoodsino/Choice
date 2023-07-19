import { CustomBtn, ReloadButton } from "@/components/buttons";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useState, useEffect } from "react";
import {
  LeagueFixturesMainSection,
  LeagueNewsMainSection,
  LeagueTableMainSection,
  LeagueTransfersMainSection,
} from "../league";
import { LeaguesDataTypes } from "@/utils";
import { useFetch } from "@/api/hooks/useFetch";
import { SelectSeasons } from "@/components/select-seasons";
import { Loading } from "@/components/loading";
import { useAuth } from "@/context/auth/AuthContext";
import { usePost } from "@/api/hooks/usePost";
import { toast } from "react-toastify";

interface Props {
  children: ReactNode;
}

interface DataType {
  success: true;
  data: LeaguesDataTypes;
  message: "data sent";
  pagination: false;
}

const LeagueBox: FC<Props> = ({ children }) => {
  const { query, pathname } = useRouter();
  const {
    isLoading,
    refetch,
    data: detailsData,
    error,
    isError,
    isFetching,
  } = useFetch<DataType>(query.id ? `v1/leagues/details/${query.id}` : "");
  const [league, setLeague] = useState<LeaguesDataTypes>();
  const [selectedSeason, setSelectedSeason] = useState<number>();
  const { isAuth } = useAuth();
  const {
    isLoading: AddToFavoriteLoading,
    isError: AddToFavoriteISError,
    error: AddToFavoriteError,
    data: AddToFavoriteData,
    mutate,
  } = usePost<any, any>("favorite/store");
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (detailsData) {
      setLeague(detailsData.data);
      setSelectedSeason(detailsData?.data?.current_season?.id);
      setFirstTime(false);
    }
  }, [detailsData]);

  const handleAddToFavorite = (id: number, name: string, image: string) => {
    let formdata = new FormData();
    formdata.append("entity_id", id.toString());
    formdata.append("type", "league");
    formdata.append("entity_name", name);
    formdata.append("entity_image", image);
    mutate(formdata, {
      onSuccess: (data) => {
        if (data.data.data.favorite) {
          console.log("true add");
          toast.success("Added successfully");
          refetch();
        } else {
          console.log("true remove");
          toast.success("Removed successfully");
          refetch();
        }
      },
      onError: (error) => {
        toast.error(error.response?.data.message);
      },
    });
  };

  return (
    <div>
      {!isLoading && (
        <div className="card">
          <div className="box-title-2">
            <div className="left">
              <img src={league?.image} />
              <div>
                <h3>{league?.name}</h3>
                <span>{league?.country?.name}</span>
              </div>
            </div>
            <SelectSeasons
              seasons={league?.seasons!}
              setSelectedSeason={setSelectedSeason}
            />
            {isAuth() && (
              <div className="right">
                {!AddToFavoriteLoading ? (
                  <CustomBtn
                    onClick={() =>
                      handleAddToFavorite(
                        //@ts-ignore
                        league?.id,
                        league?.name,
                        league?.image
                      )
                    }
                    isFav
                  />
                ) : (
                  <Loading style={{ width: "40px" }} />
                )}
                <CustomBtn isNotif isFav={false} />
              </div>
            )}
          </div>
          <ul className="tabs-list">
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
            {league?.has_table && (
              <li>
                <Link
                  className={`${
                    pathname == `/league/[id]/table` ? "active" : ""
                  } }`}
                  href={`/league/${query.id}/table`}
                >
                  Table
                </Link>
              </li>
            )}
            {/* <li>
              <Link
                className={`${
                  pathname == `/league/[id]/knockout` ? "active" : ""
                } }`}
                href={`/league/${query.id}/knockout`}
              >
                Knockout
              </Link>
            </li> */}
            <li>
              <Link
                className={`${
                  pathname == `/league/[id]/news` ? "active" : ""
                } }`}
                href={`/league/${query.id}/news`}
              >
                News
              </Link>
            </li>
            {/* <li>
              <Link
                className={`${
                  pathname == `/league/[id]/transfers` ? "active" : ""
                } }`}
                href={`/league/${query.id}/transfers`}
              >
                Transfers
              </Link>
            </li> */}
            {/* <li>
              <Link
                className={`${
                  pathname == `/league/[id]/seasons` ? "active" : ""
                } }`}
                href={`/league/${query.id}/seasons`}
              >
                Seasons
              </Link>
            </li> */}
          </ul>

          {pathname.includes(`/league/[id]/table`) && (
            <LeagueTableMainSection
              leagueId={league?.id!}
              selectedSeason={selectedSeason!}
            />
          )}
          {pathname.includes(`/league/[id]/fixtures`) && (
            <LeagueFixturesMainSection selectedSeason={selectedSeason!} />
          )}
          {pathname.includes(`/league/[id]/news`) && <LeagueNewsMainSection />}
          {pathname.includes(`/league/[id]/transfers`) && (
            <LeagueTransfersMainSection />
          )}
        </div>
      )}
      {isLoading && firstTime && <Loading style={{ width: "40px" }} />}
      {isError && <ReloadButton refetch={refetch} />}
    </div>
  );
};

export default LeagueBox;
