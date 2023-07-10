import React, { FC } from "react";

const GetAppCard: FC = () => {
  return (
    <div className="download-app-box">
      <h3>Download and Get App</h3>
      <p>
        For an even better LiveScores experience
        <br /> on your mobile device.
      </p>
      <a href="#">
        <img height="50" src="/play.webp" alt="" />
      </a>
      <a href="#">
        <img height="50" src="/apple.webp" alt="" />
      </a>
    </div>
  );
};

export default GetAppCard;
