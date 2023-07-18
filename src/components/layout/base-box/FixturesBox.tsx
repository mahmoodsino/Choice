import { useFetch } from "@/api/hooks/useFetch";
import { ReloadButton } from "@/components/buttons";
import { TimeMatch } from "@/components/cards";
import { Loading } from "@/components/loading";
import { SelectSeasons } from "@/components/select-seasons";
import { FixtureDetailsTypes } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement, useState, useEffect } from "react";
import {
  FixturesH2HMainSection,
  FixturesLineupMainSection,
  FixturesOverviewMainSection,
  FixturesTableMainSection,
} from "../fixtures";

interface Props {
  children: ReactElement;
}
export interface FixtureDetailsDataTypes {
  message: string;
  pagination: boolean;
  success: boolean;
  data: FixtureDetailsTypes;
}

const FixturesBox: FC<Props> = ({ children }) => {
  const { pathname } = useRouter();
  const { query } = useRouter();
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<FixtureDetailsDataTypes>(
      query.id ? `v1/fixtures/details/${query.id}` : ""
    );
  const [selectedSeason, setSelectedSeason] = useState<number>();

  useEffect(() => {
    if (data) {
      setSelectedSeason(data?.data?.season_id);
    }
  }, [data]);

  return (
    <div>
      {!isLoading && !isError && (
        <div className="card">
          <TimeMatch
            awayTeam={data?.data?.away!}
            homeTeam={data?.data?.home!}
            startAt={data?.data?.starting_at!}
            time={data?.data?.time!}
            score={data?.data?.score!}
          />
          <ul className="tabs-list">
            <li>
              <Link
                className={`${
                  pathname == `/fixtures/[id]/overview` ? "active" : ""
                } }`}
                href={`/fixtures/${query.id}/overview`}
              >
                Overview
              </Link>
            </li>
            {data?.data?.lineups?.away?.field?.length! > 0 && (
              <li>
                <Link
                  className={`${
                    pathname == `/fixtures/[id]/lineup` ? "active" : ""
                  } }`}
                  href={`/fixtures/${query.id}/lineup`}
                >
                  Lineup
                </Link>
              </li>
            )}
            {data?.data?.league?.has_table && (
              <li>
                <Link
                  className={`${
                    pathname == `/fixtures/[id]/table` ? "active" : ""
                  } }`}
                  href={`/fixtures/${query.id}/table`}
                >
                  Table
                </Link>
              </li>
            )}
            <li>
              <Link
                className={`${
                  pathname == `/fixtures/[id]/h2h` ? "active" : ""
                } }`}
                href={`/fixtures/${query.id}/h2h`}
              >
                H2h
              </Link>
            </li>
          </ul>

          {pathname.includes(`/fixtures/[id]/table`) && (
            <div>
              <SelectSeasons
                seasons={data?.data?.league?.seasons!}
                setSelectedSeason={setSelectedSeason}
              />
              <FixturesTableMainSection
                selectedSeason={selectedSeason!}
                leagueId={data?.data?.league?.id!}
              />
            </div>
          )}

          {pathname.includes(`/fixtures/[id]/lineup`) && (
            <FixturesLineupMainSection lineups={data?.data.lineups!} />
          )}
          {pathname.includes(`/fixtures/[id]/overview`) && (
            <FixturesOverviewMainSection statistics={data?.data?.statistics!} />
          )}
          {pathname.includes(`/fixtures/[id]/h2h`) && (
            <FixturesH2HMainSection
              away={data?.data?.away!}
              home={data?.data?.home!}
            />
          )}
        </div>
      )}
      {isLoading && <Loading style={{ width: "50px" }} />}
      {isError && <ReloadButton refetch={refetch} />}
    </div>
  );
};

export default FixturesBox;
