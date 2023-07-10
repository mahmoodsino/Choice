import React from "react";

const TransfersCard = () => {
  return (
    <div className="transfer-item">
      <img className="t-img" src="/pa.png" />
      <h3>Cedric Soares</h3>
      <div className="trans-box">
        <div className="left">
          <a href="#" className="p-name">
            Man Utd
          </a>
        </div>
        <div className="middle">
          <a href="#">
            <img className="p-img" src="/pa.png" />
          </a>
          <i className="fi fi-rr-angle-double-small-right"></i>
          <a href="#">
            <img className="p-img" src="/pa.png" />
          </a>
        </div>
        <div className="right">
          <a href="#" className="p-name">
            Atletico Madrid
          </a>
        </div>
      </div>

      <span className="date">jul 2023 - May 2024</span>
      <span className="val">Market Value $274k</span>
    </div>
  );
};

export default TransfersCard;
