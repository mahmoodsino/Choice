import { TeamBox } from "@/components/layout/base-box";
import { TeamsTable } from "@/components/table";
import { AppContext } from "@/context/BaseBox";
import { useContext, useEffect } from "react";

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  return (
    <div>
      <TeamsTable />
    </div>
  );
};

export default MainSection;
