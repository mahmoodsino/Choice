import { AppContext } from "@/context/BaseBox";
import React, { FC, useContext, useEffect } from "react";
import FormSection from "./FormSection";
import LogoBox from "./LogoBox";

const MainSection: FC = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(false);
    setIsRightShow(false);
  }, []);
  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <FormSection />
          <LogoBox />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
