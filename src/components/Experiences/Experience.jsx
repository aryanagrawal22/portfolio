import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import {Fade} from "react-awesome-reveal";
import React from "react";


export default function Experience(props) {
  const experienceData = props.data;
  return (
    <div className="mb-8 mt-20 mx-4">
      <Fade up>
        <div>
          <h1 className="heading-main mb-8">Experience</h1>
        </div>
      </Fade>
      <VerticalTimeline>
        {experienceData.map((experience, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education text-left"
              contentStyle={{ background: "white", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #1F2937" }}
              date={experience.date}
              dateClassName="font-secondary font-medium text-white"
              iconStyle={{
                background: "#00e5ff",
                color: "#1F2937",
              }}
              icon={
                <svg
                  className="mx-auto fill-current text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M 21.5 4 C 19.585045 4 18 5.5850452 18 7.5 L 18 9 L 9.5 9 C 6.468 9 4 11.467 4 14.5 L 4 35.5 C 4 38.533 6.468 41 9.5 41 L 38.5 41 C 41.532 41 44 38.533 44 35.5 L 44 14.5 C 44 11.467 41.532 9 38.5 9 L 30 9 L 30 7.5 C 30 5.5850452 28.414955 4 26.5 4 L 21.5 4 z M 21.5 7 L 26.5 7 C 26.795045 7 27 7.2049548 27 7.5 L 27 9 L 21 9 L 21 7.5 C 21 7.2049548 21.204955 7 21.5 7 z"></path>
                </svg>
              }
            >
              <div className="flex flex-row justify-between gap-8">
                <h3 className="mb-2 font-primary text-xl font-bold text-black">
                  {experience.title}
                </h3>
                {experience.website ? (
                  <a href={experience.website} target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt fa-md my-auto text-black"></i>
                  </a>
                ) : null}
              </div>
              <h4 className="mb-4 font-secondary text-md font-semibold text-black">
                {experience.subtitle}
              </h4>
              <h6 className="font-secondary text-md font-medium text-gray-500">
                {experience.details}
              </h6>
              <div className="mb-2">
                <div className="align-middle items-start mt-2 space-y-2">
                  {experience.techStack.map((stack, index) => {
                    return (
                      <span
                        className="inline-block rounded-full bg-[#00e5ff] mr-2 my-auto font-secondary font-normal text-black text-center px-4 py-1 text-sm"
                        key={index}
                      >
                        {stack}
                      </span>
                    );
                  })}
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{
            background: "#00e5ff",
            color: "#1F2937",
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              className="mx-auto fill-current text-gray-900"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" />
            </svg>
          }
        />
      </VerticalTimeline>
    </div>
  );
}
