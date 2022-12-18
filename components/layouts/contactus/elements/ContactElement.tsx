import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  info: string;
}

const ContactElement = ({ icon, title, info }: Props) => {
  return (
    <div className="bg-gray-1450 flex px-3 py-2 space-x-3 items-center">
      <div className="w-14 h-14 bg-yellow-950 rounded-full flex items-center ">
        {icon}
      </div>
      <div>
        <span className="block text-lg font-bold ">{title}</span>
        <span className="block text-sm font-medium text-gray-1200">{info}</span>
      </div>
    </div>
  );
};

export default ContactElement;
