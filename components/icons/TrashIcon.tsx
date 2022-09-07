import React from "react";

interface Props {
    className:string
}

const TrashIcon = ({className}:Props) => {
  return (
    <svg
    className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 14.4004H17.6V27.2004H16V14.4004ZM19.2 14.4004H20.8V27.2004H19.2V14.4004ZM22.4 14.4004H24V27.2004H22.4V14.4004ZM9.59998 9.60039H30.4V11.2004H9.59998V9.60039ZM24 9.60039H22.4V8.80039C22.4 8.32039 22.08 8.00039 21.6 8.00039H18.4C17.92 8.00039 17.6 8.32039 17.6 8.80039V9.60039H16V8.80039C16 7.44039 17.04 6.40039 18.4 6.40039H21.6C22.96 6.40039 24 7.44039 24 8.80039V9.60039Z"
      />
      <path
        d="M24.8 32.0003H15.2C13.92 32.0003 12.8 30.9603 12.64 29.6803L11.2 10.4803L12.8 10.3203L14.24 29.5203C14.24 30.0003 14.72 30.4003 15.2 30.4003H24.8C25.28 30.4003 25.68 30.0003 25.76 29.5203L27.2 10.3203L28.8 10.4803L27.36 29.6803C27.2 30.9603 26.08 32.0003 24.8 32.0003Z"
      />
    </svg>
  );
};

export default TrashIcon;