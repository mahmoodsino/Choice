import { FixtureDetailsTypes, LeaguesDataTypes } from "@/utils";
import moment, { Moment } from "moment";
import React, { FC, useState } from "react";
import { Loading } from "../loading";
import { SelectDataBox } from "../select";
import { BoxTitle } from "../title";
import MatchList from "./MatchList";

interface Props {
  canSelect?: boolean;
  timeInMoment?: string;
  setTimeInMoment?: React.Dispatch<React.SetStateAction<string>>;
  matches?: LeaguesDataTypes[];
  isLoading: Boolean;
  fixtures?: FixtureDetailsTypes[];
  firstTime?: boolean;
}

const MainCard: FC<Props> = ({
  canSelect = false,
  setTimeInMoment,
  timeInMoment,
  matches,
  isLoading,
  fixtures,
  firstTime = true,
}) => {
  return (
    <div className="card">
      {canSelect && (
        <SelectDataBox
          setTimeInMoment={setTimeInMoment!}
          timeInMoment={timeInMoment!}
        />
      )}

      <div>
        {matches &&
          matches?.map((item, i) => {
            return (
              <div key={i}>
                <BoxTitle league={item} />
                <MatchList fixtures={item.fixtures!} />
              </div>
            );
          })}
        {fixtures && <MatchList fixtures={fixtures} />}
      </div>
      {isLoading && firstTime && <Loading style={{ width: "70px" }} />}
    </div>
  );
};

export default MainCard;
