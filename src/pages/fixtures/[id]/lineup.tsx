import { FixturesLineupMainSection } from "@/components";
import React, { FC } from "react";

type Props = {
  string2?: string;
};

const lineup: FC<Props> = ({ string2 }) => {
  return (
    <div>
      {string2 ?? "D"}
      {/* <FixturesLineupMainSection /> */}
    </div>
  );
};

export default lineup;
