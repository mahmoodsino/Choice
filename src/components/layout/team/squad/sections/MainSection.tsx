import { useFetch } from "@/api/hooks/useFetch";
import { ReloadButton } from "@/components/buttons";
import { TeamBox } from "@/components/layout/base-box";
import { Loading } from "@/components/loading";
import { NoData } from "@/components/no-data";
import { AppContext } from "@/context/BaseBox";
import { CountryTypes, TeamSquadType } from "@/utils";
import { useRouter } from "next/router";
import { useContext, useEffect, useState, FC } from "react";

interface SquadProps {
  image: string;
  name: string;
  country: CountryTypes;
}

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  const { query } = useRouter();
  const { isLoading, refetch, data, error, isError, isFetching } =
    useFetch<any>(query.id ? `v1/teams/squad/${query.id}` : "");
  const [squadInfo, setSquadInfo] = useState<TeamSquadType[]>();

  useEffect(() => {
    if (data) {
      setSquadInfo(data.data);
    }
  }, [data]);

  const Squad: FC<SquadProps> = ({ country, image, name }) => {
    return (
      <>
        <div className="im-sp-3">
          <div className="left">
            <img src={image} />
          </div>
          <div className="inform">
            <span className="title">{name}</span>

            <span>{country.name}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {!isLoading ? (
        <div>
          <div>
            <h3 className="h3-3">Goalkeeper</h3>
            {squadInfo?.map((item, i) => {
              return (
                <div key={i}>
                  {item.position == "Goalkeeper" && (
                    <Squad
                      country={item.country}
                      image={item.image}
                      name={item.name}
                    />
                  )}
                </div>
              );
            })}
            <hr></hr>
          </div>
          <div>
            <h3 className="h3-3">Defender</h3>
            {squadInfo?.map((item, i) => {
              return (
                <div key={i}>
                  {item.position == "Defender" && (
                    <Squad
                      country={item.country}
                      image={item.image}
                      name={item.name}
                    />
                  )}
                </div>
              );
            })}
            <hr></hr>
          </div>
          <div>
            <h3 className="h3-3">Midfielder</h3>
            {squadInfo?.map((item, i) => {
              return (
                <div key={i}>
                  {item.position == "Midfielder" && (
                    <Squad
                      country={item.country}
                      image={item.image}
                      name={item.name}
                    />
                  )}
                </div>
              );
            })}
            <hr></hr>
          </div>
          <div>
            <h3 className="h3-3">Attacker</h3>
            {squadInfo?.map((item, i) => {
              return (
                <div key={i}>
                  {item.position == "Attacker" && (
                    <Squad
                      country={item.country}
                      image={item.image}
                      name={item.name}
                    />
                  )}
                </div>
              );
            })}
            <hr></hr>
          </div>
        </div>
      ) : (
        <Loading style={{ width: "45px" }} />
      )}
      {isError && <ReloadButton refetch={refetch} />}
      {!isLoading && squadInfo?.length == 0 && <NoData />}
    </div>
  );
};

export default MainSection;
