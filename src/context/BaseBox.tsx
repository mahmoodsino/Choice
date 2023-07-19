import {
  FixturesBox,
  SideSection,
  TrendingNews,
  LeagueBox,
  TeamBox,
  PlayerProfileBox,
} from "@/components";
import { useRouter } from "next/router";
import React, { createContext, FC, useEffect, useState } from "react";

interface Props {
  children: React.ReactElement;
}

interface AppContextProps {
  isLiftShow: boolean;
  isRightShow: boolean;
  setIsLiftShow: (value: boolean) => void;
  setIsRightShow: (value: boolean) => void;
}

const AppContext = createContext<AppContextProps>({
  isLiftShow: false,
  isRightShow: false,
  setIsLiftShow: () => {},
  setIsRightShow: () => {},
});

const BaseBox: FC<Props> = ({ children }) => {
  const [isLiftShow, setIsLiftShow] = useState(true);
  const [isRightShow, setIsRightShow] = useState(true);
  const { pathname } = useRouter();

  return (
    <AppContext.Provider
      value={{ isLiftShow, isRightShow, setIsLiftShow, setIsRightShow }}
    >
      <div className="home-layout">
        {isLiftShow && <SideSection />}
        <div className="home-middle">
          {pathname.includes("/fixtures/[id]/") ? (
            <FixturesBox>{children}</FixturesBox>
          ) : pathname.includes("/league/[id]/") ? (
            <LeagueBox>{children}</LeagueBox>
          ) : pathname.includes("/team/[id]/") ? (
            <TeamBox>{children}</TeamBox>
          ) : pathname.includes("/player/[id]") ? (
            <PlayerProfileBox>{children}</PlayerProfileBox>
          ) : (
            children
          )}
        </div>
        {isRightShow && <TrendingNews />}
      </div>
    </AppContext.Provider>
  );
};

export default BaseBox;
export { AppContext };
