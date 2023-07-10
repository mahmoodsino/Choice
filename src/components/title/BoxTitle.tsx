import { CountryTypes } from "@/utils";
import React, { FC } from "react";

interface Props {
  ligTitle: string;
  ligImage: string;
  ligCountry: CountryTypes;
}

const BoxTitle: FC<Props> = ({ ligImage, ligCountry, ligTitle }) => {
  return (
    <div className="box-title-1">
      <div className="left">
        <img src={ligImage} />
        <div>
          <h3>{ligTitle}</h3>
          <span>{ligCountry.name}</span>
        </div>
      </div>

      <div className="right">
        <button className="btn-circle mark-fav-btn [active]"></button>
        <button className="btn-circle mark-noti-btn [active]"></button>
      </div>
    </div>
  );
};

export default BoxTitle;
