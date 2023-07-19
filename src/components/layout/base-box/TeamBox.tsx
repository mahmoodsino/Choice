import { useFetch } from "@/api/hooks/useFetch";
import { CustomBtn, ReloadButton } from "@/components/buttons";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import {
  FixturesTeamMainSection,
  NewsTeamMainSection,
  SquadTeamMainSection,
  TableTeamMainSection,
  TransfersTeamMainSection,
  TrophiesTeamsMainSection,
} from "../team";
import { TeamDetailsType } from "@/utils";
import { Loading } from "@/components/loading";
import { useAuth } from "@/context/auth/AuthContext";
import { usePost } from "@/api/hooks/usePost";
import { toast } from "react-toastify";

interface Props {
  children: ReactNode;
}

const TeamBox: FC<Props> = ({ children }) => {
  const { pathname, push } = useRouter();
  const { query } = useRouter();
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<any>(query.id ? `v1/teams/details/${query.id}` : "");
  const [teamDetails, setTeamDetails] = useState<TeamDetailsType>();
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
    if (data) {
      setTeamDetails(data?.data);
      setFirstTime(false);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      setSelectedSeason(teamDetails?.league_season[0]?.season_id);
    }
  }, [teamDetails]);

  const handleAddToFavorite = (id: number, name: string, image: string) => {
    let formdata = new FormData();
    formdata.append("entity_id", id.toString());
    formdata.append("type", "team");
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
              <img src={teamDetails?.image} />
              <div>
                <h3>{teamDetails?.name}</h3>
                <span>{teamDetails?.country?.name}</span>
              </div>
            </div>
            {isAuth() && (
              <div className="right">
                {!AddToFavoriteLoading ? (
                  <CustomBtn
                    onClick={() =>
                      handleAddToFavorite(
                        //@ts-ignore
                        teamDetails?.id,
                        teamDetails?.name,
                        teamDetails?.image
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
                  pathname == `/team/[id]/fixtures` ? "active" : ""
                } }`}
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
                className={`${
                  pathname == `/team/[id]/table` ? "active" : ""
                } }`}
                href={`/team/${query.id}/table`}
              >
                Table
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname == `/team/[id]/squad` ? "active" : ""
                } }`}
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
            <li>
              <Link
                className={`${
                  pathname == `/team/[id]/trophies` ? "active" : ""
                } }`}
                href={`/team/${query.id}/trophies`}
              >
                Trophies
              </Link>
            </li>
          </ul>
          {pathname.includes(`/team/[id]/table`) && (
            <TableTeamMainSection leagueId={82} selectedSeason={19744} />
          )}
          {pathname.includes(`/team/[id]/fixtures`) && (
            <FixturesTeamMainSection />
          )}
          {pathname.includes(`/team/[id]/news`) && <NewsTeamMainSection />}
          {pathname.includes(`/team/[id]/trophies`) && (
            <TrophiesTeamsMainSection trophies={teamDetails?.trophies!} />
          )}
          {pathname.includes(`/team/[id]/squad`) && <SquadTeamMainSection />}
          {pathname.includes(`/team/[id]/transfers`) && (
            <TransfersTeamMainSection />
          )}
        </div>
      )}
      {isLoading && firstTime && <Loading style={{ width: "35px" }} />}
      {isError && <ReloadButton refetch={refetch} />}
    </div>
  );
};

export default TeamBox;
