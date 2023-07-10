import { useFetch } from "@/api/hooks/useFetch";
import { Loading } from "@/components/loading";
import { H2HDataTypes, ScoreType, TeamTypes } from "@/utils";
import Link from "next/link";
import { FC } from "react";

interface H2hListProps {
  home: TeamTypes;
  away: TeamTypes;
  score: ScoreType;
  id: number;
}

const H2hList: FC<H2hListProps> = ({ away, home, score, id }) => {
  return (
    <Link className="fixture-mini-item" href={`/fixtures/${id}/overview`}>
      <span>{home.name}</span>
      <img src={home.image} />
      <span>
        {score.home}-{score.away}
      </span>
      <img src={away.image} />
      <span>{away.name}</span>
    </Link>
  );
};

interface Props {
  home: TeamTypes;
  away: TeamTypes;
}

const MainSection: FC<Props> = ({ away, home }) => {
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<H2HDataTypes>(`v1/fixtures/h2h/${away.id}/${home.id}`);
  console.log(data);

  return (
    <div>
      {!isLoading ? (
        <div className="row">
          {data?.data?.fixtures?.map((item, i) => {
            return (
              <div key={i} className="col-6">
                <H2hList
                  away={item.away}
                  home={item.home}
                  score={item.score}
                  id={item.id}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Loading style={{ width: "30px" }} />
      )}
    </div>
  );
};

export default MainSection;
