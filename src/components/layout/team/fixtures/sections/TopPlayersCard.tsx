import React from "react";

const TopPlayersCard = () => {
  return (
    <div className="box-player">
      <h3> Goals</h3>
      <div className="box-title-4">
        <img src="/pa.png" />
        <div>
          <span>Cedric Soares</span>
          <h3>14</h3>
        </div>
      </div>
      <div className="im-sp-h3">
        <div className="im-sp">
          <img src="/pa.png" />
          <h3>Cedric Soares </h3>
        </div>
        <h3>11</h3>
      </div>
      <div className="im-sp-h3">
        <div className="im-sp">
          <img src="/pa.png" />
          <h3>Cedric Soares </h3>
        </div>
        <h3>9</h3>
      </div>
    </div>
  );
};

export default TopPlayersCard;
