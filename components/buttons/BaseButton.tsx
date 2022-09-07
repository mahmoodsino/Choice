import { MouseEvent, ReactNode } from "react";

interface Props {
  type?: "submit" | "button";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  className: string | undefined;
  children?: ReactNode;
}

const BaseButton = ({ onClick, title, className, type, children }: Props) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick}
      className={`${
        className ? className : "bg-green-950 text-white px-7 py-2 rounded-sm"
      }`}
    >
      {title}
      {children}
    </button>
  );
};

export default BaseButton;