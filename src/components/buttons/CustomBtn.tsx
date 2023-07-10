import React, { FC } from "react";

interface Props {
  isFav?: boolean;
  isNotif?: boolean;
  isActive?: boolean;
}

const CustomBtn: FC<Props> = ({
  isFav = true,
  isNotif = false,
  isActive = false,
}) => {
  return (
    <button
      className={`btn-circle ${isFav && "mark-fav-btn"} ${
        isNotif && "mark-noti-btn"
      } ${isActive && "active"} `}
    ></button>
  );
};

export default CustomBtn;
