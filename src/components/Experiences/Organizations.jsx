import {Fade} from "react-awesome-reveal";
import { OrganizationCard } from "./OrganizationCard";
import React from "react";


export default function Organizations(props) {
  const organizationsData = props.data;
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
