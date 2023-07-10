import moment, { Moment } from "moment";
import React, { FC, useEffect, useState } from "react";

interface Props {
  timeInMoment: string;
  setTimeInMoment: React.Dispatch<React.SetStateAction<string>>;
}

const SelectDataBox: FC<Props> = ({ setTimeInMoment, timeInMoment }) => {
  const handleAddDay = () => {
    setTimeInMoment(moment(timeInMoment).add(1, "day").format("DD MMM, YYYY"));
  };

  const handleSubtractDay = () => {
    setTimeInMoment(
      moment(timeInMoment).subtract(1, "day").format("DD MMM, YYYY")
    );
  };

  return (
    <div className="select-date-box">
      <button onClick={handleSubtractDay} className="btn-circle">
        <i className="fi fi-rr-angle-left"></i>
      </button>
      <span className="current">
        {moment(timeInMoment).format("DD MMM, YYYY")}
      </span>
      <button onClick={handleAddDay} className="btn-circle">
        <i className="fi fi-rr-angle-right"></i>
      </button>
    </div>
  );
};

export default SelectDataBox;
