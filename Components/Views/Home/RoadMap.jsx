import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Fade from "react-reveal/Fade";
const RoadMap = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-32">
        <Fade bottom>
          <p className="text-[44px] font-[700]  text-dark text-center mb-12">
            About Us
          </p>
        </Fade>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1992"
          >
            <h3 className="text-xl font-semibold">RSI Founded</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1993"
          >
            <h3 className="text-xl font-semibold">
              Established Client- Server Consulting
            </h3>
            <p className="text-sm font-normal text-dark">
              Established Canadian operations
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1995"
          >
            <h3 className="text-xl font-semibold">
              U.S. Resource Training Center{" "}
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1996"
          >
            <h3 className="text-xl font-semibold">Off- shore Operations</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1997"
          >
            <h3 className="text-xl font-semibold">ERP/CRM Practice</h3>
            <p className="text-sm font-normal text-dark">
              Engineering Practice
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1998"
          >
            <h3 className="text-xl font-semibold">Web Technology Practice</h3>
            <p className="text-sm font-normal text-dark">
              Data Warehousing & Business Intelligence Practice
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1999"
          >
            <h3 className="text-xl font-semibold">
              Government & Public Sector Unit{" "}
            </h3>
            <p className="text-sm font-normal text-dark">Security Solutions</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2000"
          >
            <h3 className="text-xl font-semibold">Healthcare IT </h3>
            <p className="text-sm font-normal text-dark">
              Launched CTS / eHire™
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2002"
          >
            <h3 className="text-xl font-semibold">Healthcare & HIPPA</h3>
            <p className="text-sm font-normal text-dark">
              Security Product Line
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2003"
          >
            <h3 className="text-xl font-semibold"> eLearning Multi-Media </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2004"
          >
            <h3 className="text-xl font-semibold">MSP / VPO </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2005"
          >
            <h3 className="text-xl font-semibold">
              {" "}
              Recruitment Process Outsourcing{" "}
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006"
          >
            <h3 className="text-xl font-semibold">BPO </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2007"
          >
            <h3 className="text-xl font-semibold">SOA</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006"
          >
            <h3 className="text-xl font-semibold">BPO </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2007"
          >
            <h3 className="text-xl font-semibold">SOA</h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008"
          >
            <h3 className="text-xl font-semibold"> Mobile Applications </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2009"
          >
            <h3 className="text-xl font-semibold">
              Collaborative & Cloud Computing{" "}
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Now"
          >
            <h3 className="text-xl font-semibold">Advanced</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default RoadMap;
