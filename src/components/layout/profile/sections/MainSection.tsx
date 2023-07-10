import React from "react";

const MainSection = () => {
  const FavPlayer = () => {
    return (
      <div className="col-6">
        <div className="bg-green">
          <div className="profile">
            <img src="/laliga.png" />
            <br />
            <span className="name">
              Karim
              <br /> Benzema
            </span>

            <span> Real Madrid</span>
            <span> France</span>
          </div>
        </div>
      </div>
    );
  };

  const Suggested = () => {
    return (
      <div className="sugg">
        <div className="left">
          <img src="/laliga.png" />
        </div>
        <div className="inform">
          <span className="title"> Cedric Soares</span>

          <span> Liverpool, Spain </span>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="row">
        <FavPlayer />
        <FavPlayer />
        <FavPlayer />
        <h3 className="h3-2"> Suggested</h3>
        <Suggested/>
        <Suggested/>
        <Suggested/>
      </div>
    </div>
  );
};

export default MainSection;
