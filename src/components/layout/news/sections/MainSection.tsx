import { NewsMainCard } from "@/components/cards";
import { AppContext } from "@/context/BaseBox";
import { FC, useContext, useEffect } from "react";

const MainSection: FC = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  return (
    <div className="home-middle">
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <NewsMainCard />
          </div>
          <div className="col-md-6">
            <NewsMainCard />
          </div>
          <div className="col-md-6">
            <NewsMainCard />
          </div>
          <div className="col-md-6">
            <NewsMainCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
