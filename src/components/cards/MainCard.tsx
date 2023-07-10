import { MatchesType } from "@/utils";
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
  matches: MatchesType[];
  isLoading: Boolean;
}

const MainCard: FC<Props> = ({
  canSelect = false,
  setTimeInMoment,
  timeInMoment,
  matches,
  isLoading,
}) => {
  return (
    <div className="card">
      {canSelect && (
        <SelectDataBox
          setTimeInMoment={setTimeInMoment!}
          timeInMoment={timeInMoment!}
        />
      )}
      {!isLoading ? (
        <div>
          {matches?.map((item,i) => {
            return (
              <div key={i}>
                <BoxTitle
                  ligCountry={item.country}
                  ligImage={item.image}
                  ligTitle={item.name}
                />
                <MatchList fixtures={item.fixtures} />
              </div>
            );
          })}
        </div>
      ) : (
        <Loading style={{ width: "70px" }} />
      )}
    </div>
  );
};

export default MainCard;
