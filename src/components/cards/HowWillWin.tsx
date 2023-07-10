import React, { FC } from "react";

const HowWillWin: FC = () => {
  return (
    <div className="ask-box">
      <h3>Who Will Win ?</h3>
      <button>
        <span>1</span>
        <b>Arsenal</b>
      </button>
      <button>
        <span>•</span>
        <b>Draw</b>
      </button>
      <button>
        <span>2</span>
        <b>Liverpool</b>
      </button>
    </div>
  );
};

export default HowWillWin;
