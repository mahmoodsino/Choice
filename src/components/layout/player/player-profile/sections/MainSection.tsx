import { AppContext } from "@/context/BaseBox";
import { PlayerType } from "@/utils";
import { useContext, useEffect, FC } from "react";

interface Props {
  player: PlayerType;
}

const MainSection: FC<Props> = ({ player }) => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);

  // const PlayerProfileInfo = () => {
  //   return (

  //   );
  // };

  const PlayerTeam = () => {
    return (
      <div className="premier">
        <img src="/pa.png" />
        <span> Premier League 2023</span>
      </div>
      // background
    );
  };

  const Info = () => {
    return (
      <li>
        <span className="title"> Fixtures </span>
        <span> 6 </span>
      </li>
    );
  };

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="pic-details">
            <div className="left">
              <img src="/laliga.png" />
            </div>
            <div className="inform">
              <span> Hight</span>

              <h3>{player?.height}</h3>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="pic-details">
            <div className="left">
              <img src="/laliga.png" />
            </div>
            <div className="inform">
              <span> Position</span>

              <h3>{player?.position}</h3>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="pic-details">
            <div className="left">
              <img src="/laliga.png" />
            </div>
            <div className="inform">
              <span> Weight</span>

              <h3>{player?.weight}</h3>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="pic-details">
            <div className="left">
              <img src="/laliga.png" />
            </div>
            <div className="inform">
              <span> Date of birth</span>

              <h3>{player?.date_of_birth}</h3>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* <PlayerTeam /> */}
      {/* <ul className="premier-ul">
        <Info />
        <Info />
        <Info />
        <Info />
      </ul> */}
    </div>
  );
};

export default MainSection;
