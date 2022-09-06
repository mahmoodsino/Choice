import React from "react";

interface Props {
    className:string
}

const BlusIcon = ({className}:Props) => {
  return (
    <svg
    className={className}
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9937 3.75684H0.993652V5.75682H10.9937V3.75684Z"
      />
      <path
        d="M7.2439 8.75684L7.2439 0.756836L4.74388 0.756836V8.75684H7.2439Z"
      />
    </svg>
  );
};

export default BlusIcon;
