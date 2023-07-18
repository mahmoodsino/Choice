import React, { FC } from "react";

interface Props {
  isFav?: boolean;
  isNotif?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

const CustomBtn: FC<Props> = ({
  isFav = true,
  isNotif = false,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn-circle ${isFav && "mark-fav-btn"} ${
        isNotif && "mark-noti-btn"
      } ${isActive && "active"} `}
    ></button>
  );
};

export default CustomBtn;
