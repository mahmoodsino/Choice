import { TransfersType } from "@/utils";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  transfers: TransfersType;
}

const TransfersCard: FC<Props> = ({ transfers }) => {
  const { pathname } = useRouter();
  return (
    <div className="transfer-item">
      {!pathname.includes("player/[id]") && (
        <img className="t-img" src={transfers?.player?.image} />
      )}
      {!pathname.includes("player/[id]") && <h3>{transfers?.player?.name}</h3>}
      <div className="trans-box">
        <div className="left">
          <a href="#" className="p-name">
            {transfers?.from_team?.name}
          </a>
        </div>
        <div className="middle">
          <a href="#">
            <img className="p-img" src={transfers?.from_team?.image} />
          </a>
          <i className="fi fi-rr-angle-double-small-right"></i>
          <a href="#">
            <img className="p-img" src={transfers?.to_team?.image} />
          </a>
        </div>
        <div className="right">
          <a href="#" className="p-name">
            {transfers?.to_team?.name}
          </a>
        </div>
      </div>

      {/* <span className="date">{transfers?.player} - May 2024</span> */}
      {/* <span className="val">Market Value $274k</span> */}
    </div>
  );
};

export default TransfersCard;
