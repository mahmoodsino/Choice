import moment from "moment";
import React, { FC, MutableRefObject, useRef, useState } from "react";

interface Props {
  timeInMoment: string;
  setTimeInMoment: React.Dispatch<React.SetStateAction<string>>;
}

const SelectDataBox: FC<Props> = ({ setTimeInMoment, timeInMoment }) => {
  const timerRef = useRef() as MutableRefObject<NodeJS.Timeout>;
  const [momentDate, setMomentDate] = useState<string>(moment().toString());

  const handleAddDay = () => {
    let newTime = momentDate;
    newTime = moment(newTime).add(1, "day").format("DD MMM, YYYY");
    setMomentDate(moment(momentDate).add(1, "day").format("DD MMM, YYYY"));
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setTimeInMoment(newTime);
    }, 700);
  };

  const handleSubtractDay = () => {
    let newTime = momentDate;
    newTime = moment(newTime).subtract(1, "day").format("DD MMM, YYYY");
    setMomentDate(moment(momentDate).subtract(1, "day").format("DD MMM, YYYY"));
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setTimeInMoment(newTime);
    }, 700);
  };

  return (
    <div className="select-date-box">
      <button onClick={handleSubtractDay} className="btn-circle">
        <i className="fi fi-rr-angle-left"></i>
      </button>
      <span className="current">
        {moment(momentDate).format("DD MMM, YYYY")}
      </span>
      <button onClick={handleAddDay} className="btn-circle">
        <i className="fi fi-rr-angle-right"></i>
      </button>
    </div>
  );
};

export default SelectDataBox;
