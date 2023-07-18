import React, { FC } from "react";

const NoData: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        gap: "10px",
      }}
    >
      <img src="/no-data.png" />
      <span>No Data Available</span>
    </div>
  );
};

export default NoData;
