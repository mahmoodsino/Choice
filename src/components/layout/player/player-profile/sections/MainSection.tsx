import { PlayerProfileBox } from "@/components/layout/base-box";
import { AppContext } from "@/context/BaseBox";
import { useContext, useEffect } from "react";

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);

  const PlayerProfileInfo = () => {
    return (
      <div className="col-6">
        <div className="pic-details">
          <div className="left">
            <img src="/laliga.png" />
          </div>
          <div className="inform">
            <span> Hight</span>

            <h3> 188 cm </h3>
          </div>
        </div>
      </div>
    );
  };

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
    <PlayerProfileBox>
      <div className="row">
        <PlayerProfileInfo />
        <PlayerProfileInfo />
        <PlayerProfileInfo />
      </div>
      <hr />
      <PlayerTeam />
      <ul className="premier-ul">
        <Info />
        <Info />
        <Info />
        <Info />
      </ul>
    </PlayerProfileBox>
  );
};

export default MainSection;
