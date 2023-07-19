import { AppContext } from "@/context/BaseBox";
import { LineupsTypes, PlayerTypes } from "@/utils";
import Link from "next/link";
import { FC, useContext, useEffect } from "react";

// interface LineupProps {
//   top: string;
//   left: string;
// }

interface Props {
  lineups: LineupsTypes;
}

const MainSection: FC<Props> = ({ lineups }) => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);

  const Lineup: FC<PlayerTypes> = ({ image, id, name, short_name }) => {
    return (
      <a className="img-span" href="#">
        <img style={{ borderRadius: "10000px" }} src={image} />
        <div className="sp">
          <span>{short_name}</span>
        </div>
      </a>
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="stad"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "46%",
          }}
        >
          {lineups?.home?.field?.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                {item.map((player, i) => {
                  return (
                    <Link href={`/player/${player.id}/player-profile`} key={i}>
                      <Lineup
                        image={player?.image}
                        id={player?.id}
                        name={player?.name}
                        short_name={player?.short_name}
                      />
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            height: "46%",
          }}
        >
          {lineups?.away?.field?.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                {item.map((player, i) => {
                  return (
                    <Link href={`/player/${player.id}/player-profile`} key={i}>
                      <Lineup
                        image={player?.image}
                        id={player?.id}
                        name={player?.name}
                        short_name={player?.short_name}
                      />
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
