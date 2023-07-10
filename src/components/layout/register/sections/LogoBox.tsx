import React, { FC } from "react";

const LogoBox: FC = () => {
  return (
    <div className="col-md-6 logo-box">
      <img className="login-logo" src="/logo.svg" alt="" />
      <div className="download-box">
        <h3>Download Our App</h3>
        <a href="#">
          <img height="60" src="/play.webp" alt="" />
        </a>
        <a href="#">
          <img height="60" src="/apple.webp" alt="" />
        </a>
      </div>
    </div>
  );
};

export default LogoBox;
