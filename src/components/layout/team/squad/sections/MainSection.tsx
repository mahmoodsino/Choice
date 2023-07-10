import { TeamBox } from "@/components/layout/base-box";
import { AppContext } from "@/context/BaseBox";
import { useContext, useEffect } from "react";

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);

  const Squad = () => {
    return (
      <>
        <h3 className="h3-3"> Coach</h3>
        <div className="im-sp-3">
          <div className="left">
            <img src="/pa.png" />
          </div>
          <div className="inform">
            <span className="title"> Patrick Winqvist</span>

            <span> England </span>
          </div>
        </div>
        <hr></hr>
      </>
    );
  };

  return (
    <div>
      <Squad />
      <Squad />
      <Squad />
    </div>
  );
};

export default MainSection;
