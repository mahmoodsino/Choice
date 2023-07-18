import React, { FC } from "react";

interface Props {
  refetch: any;
}

const ReloadButton: FC<Props> = ({ refetch }) => {
  return (
    <div
      onClick={refetch}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        gap: "10px",
      }}
    >
      <img style={{ width: "150px" }} src="/error.png" />
      <button className="reload">reload</button>
    </div>
  );
};

export default ReloadButton;
