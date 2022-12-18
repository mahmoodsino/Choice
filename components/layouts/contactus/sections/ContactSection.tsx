import React from "react";
import { LetterIcon, PhoneIcon } from "../../../icons";
import Location from "../../../icons/Location";
import { ContactElement } from "../elements";

const ContactSection = () => {
  return (
    <div className="space-y-2">
      <ContactElement
        icon={<PhoneIcon className="w-4 fill-white m-auto -rotate-45" />}
        title="Phone Number"
        info="+123-456-7899"
      />
      <ContactElement
        icon={<LetterIcon className="w-7 fill-white m-auto " />}
        title="Email Address"
        info="Choice@gmail.com"
      />
      <ContactElement
        icon={<Location className="w-7 rounded-full fill-white m-auto " />}
        title="Location "
        info="Lorem ipsum dolor sit amet, consectetur "
      />
    </div>
  );
};

export default ContactSection;
