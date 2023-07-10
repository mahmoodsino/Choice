import { useFetch } from "@/api/hooks/useFetch";
import { TimeMatch } from "@/components/cards";
import { Loading } from "@/components/loading";
import { FixtureDetailsDataTypes } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import {
  FixturesH2HMainSection,
  FixturesLineupMainSection,
  FixturesOverviewMainSection,
  FixturesTableMainSection,
} from "../fixtures";

interface Props {
  children: ReactElement;
}

const FixturesBox: FC<Props> = ({ children }) => {
  const { pathname } = useRouter();
  const { query } = useRouter();
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<FixtureDetailsDataTypes>(`v1/fixtures/details/${query.id}`);

  return (
    <div>
      {!isLoading ? (
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
            <FixturesTableMainSection
              gameSeasonId={data?.data?.season_id!}
              season={data?.data?.league?.seasons!}
              leagueId={data?.data?.league?.id!}
            />
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
      ) : (
        <Loading style={{ width: "50px" }} />
      )}
    </div>
  );
};

export default FixturesBox;
