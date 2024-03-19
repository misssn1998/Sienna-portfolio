import SectionTitle from "./SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../assets/data";
import React from "react";

const Exp = () => {
  return (
    <section id="exp" className="scroll-mt-44">
      <SectionTitle text="Experience" />
      <VerticalTimeline lineColor="" >
        {experiences.map((el) => {
          const { id, company, title, time, texts, icon, course } = el;
          return (
            <React.Fragment key={id}>
              <VerticalTimelineElement
                className="text-black max-w-7xl mx-auto"
                contentStyle={{
                  backgroundColor: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  borderRadius: "10px",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #F09A95",
                }}
                date={time}
                icon={icon}
                iconStyle={{
                  background: "#ECE3CB",
                  fontSize: "1.5rem",
                  color: "#3d4451",
                }}
              >
                <h3 className="text-lg font-bold text-neutral">{title}</h3>
                <p className="font-normal !mt-0 text-neutral">{company}</p>
                {course ? (
                  <ul className="list-disc pl-10 leading-loose !font-normal text-gray-700 !mt-1">
                    <li>{course}</li>
                  </ul>
                ) : (
                  ""
                )}
                <ul className="list-disc leading-loose pl-10 !mt-1 !font-normal text-gray-700">
                  {texts
                    ? texts.map((text, index) => <li key={index}>{text}</li>)
                    : ""}
                </ul>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Exp;
