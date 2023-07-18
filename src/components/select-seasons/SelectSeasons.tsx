import { SeasonsTypes } from "@/utils";
import React, { FC } from "react";

interface Props {
  setSelectedSeason: (item: any) => void;
  seasons: SeasonsTypes[];
}

const SelectSeasons: FC<Props> = ({ seasons, setSelectedSeason }) => {
  const handleSeasonChange = (event: any) => {
    setSelectedSeason(event.target.value);
  };
  return (
    <div className="select-container">
      <select onChange={handleSeasonChange}>
        {seasons?.map((item, i) => {
          return (
            <option key={i} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectSeasons;
