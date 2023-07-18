import { TrophiesType } from "@/utils";
import React, { FC } from "react";

interface Props {
  trophies: TrophiesType[];
}

const MainSection: FC<Props> = ({ trophies }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {trophies?.map((item, i) => {
        return (
          <div key={i} className="">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #ccc",
                paddingBottom: "5px",
              }}
              className=""
            >
              <img style={{ width: "50px" }} src={item.league_image} />
              <div>
                <h3 style={{ fontSize: "16px" }}>{item.league_name}</h3>
              </div>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "14px",
                  color: "rgba(206, 194, 194, 0.836)",
                }}
              >
                Winner ({item?.winner?.length})
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {item.winner.map((winner, i) => {
                  return (
                    <p key={i}>
                      {winner} , {"  "}
                    </p>
                  );
                })}
              </div>
            </div>
            {item.runnerup.length > 0 && (
              <div>
                <h3
                  style={{
                    fontSize: "14px",
                    color: "rgba(206, 194, 194, 0.836)",
                  }}
                >
                  Runner-up ({item?.runnerup?.length})
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {item.runnerup?.map((winner, i) => {
                    return (
                      <p key={i}>
                        {winner} , {"  "}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MainSection;
