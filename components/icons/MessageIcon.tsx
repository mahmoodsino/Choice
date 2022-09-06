import React from "react";
interface Props {
    className:string
}
const MessageIcon = ({className}:Props) => {
  return (
    <svg
    className={className}
      viewBox="0 0 40 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3.16699C10.81 3.16699 3.33337 8.84958 3.33337 15.8337C3.33337 20.4364 6.49504 24.5673 11.6667 26.8125V34.8337L20.5667 28.4924C29.495 28.2692 36.6667 22.6737 36.6667 15.8337C36.6667 8.84958 29.19 3.16699 20 3.16699ZM15.5034 22.1448H12.505V19.298L20.7984 11.4288L23.795 14.2772L15.5034 22.1448ZM25.2084 12.9362L22.21 10.0893L24.4967 7.91858L27.495 10.7654L25.2084 12.9362Z"
      />
    </svg>
  );
};

export default MessageIcon;
