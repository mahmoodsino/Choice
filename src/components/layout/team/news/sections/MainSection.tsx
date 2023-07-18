import { NewsEntity } from "@/components/new";
import { AppContext } from "@/context/BaseBox";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const MainSection = () => {
  const { setIsLiftShow, setIsRightShow } = useContext(AppContext);
  useEffect(() => {
    setIsLiftShow(true);
    setIsRightShow(true);
  }, []);
  const { query } = useRouter();

  return (
    <div>
      <NewsEntity entity_id={+query.id!} />
    </div>
  );
};

export default MainSection;
