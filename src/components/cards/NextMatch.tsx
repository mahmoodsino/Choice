import React from "react";

const NextMatch = () => {
  return (
    <li>
      <a href="#">
        <div className="left">17:00</div>
        <div className="middle">
          <span>Arsenal</span>
          <img src="/pa.png" />
          <span>-</span>
          <img src="/pa.png" />
          <span>Liverpool</span>
        </div>
        <div className="right">@</div>
      </a>
    </li>
  );
};

export default NextMatch;
