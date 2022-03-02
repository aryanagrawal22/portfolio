import {Fade} from "react-awesome-reveal";
import { OrganizationCard } from "./OrganizationCard";
import React from "react";

const organizationsData = [
  {
    date: "FEBRUARY 2021 - PRESENT",
    position: "Core Web Team Developer",
    name: "PICT CSI Student Chapter",
    logo: "csi",
  },
  {
    date: "JANUARY 2022 - PRESENT",
    position: "Student Member",
    name: "PICT ACM Student Chapter",
    logo: "pasc",
  },
];


export default function Organizations() {
  return (
    <div className="mb-8 mt-20">
      <Fade up>
        <div>
          <h1 className="heading-main">Organizations</h1>
        </div>
      </Fade>
      <Fade up>
        <div className="flex flex-wrap w-full">
          {organizationsData.map((organization, index) => (
            <OrganizationCard organization={organization} key={index} />
          ))}
        </div>
      </Fade>
    </div>
  );
}
