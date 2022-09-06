import React from "react";

interface Props {
  className: string;
}

const MinusIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      viewBox="0 0 11 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.9333 0.947266H0.93335V2.94727H10.9333V0.947266Z" />
    </svg>
  );
};

export default MinusIcon;
