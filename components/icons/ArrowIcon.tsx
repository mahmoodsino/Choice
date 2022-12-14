import React from "react";
interface Props {
    className:string
}

const ArrowIcon = ({className}:Props) => {
  return (
    <svg
    className={className}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z"
      />
    </svg>
  );
};

export default ArrowIcon;
