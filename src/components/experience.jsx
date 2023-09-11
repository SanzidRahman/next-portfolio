'use client'
import { experiencesData } from "@/lib/data";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SectionDivider from "./sectionDivider";




export default function Experience() {
  return (
    <section>
        <SectionDivider>MyExperience</SectionDivider>
      
      <VerticalTimeline lineColor="rgba(0, 0, 0,0.3)">
        {
            experiencesData.map((item, index) =>(
                <React.Fragment key={index}>
                  <VerticalTimelineElement
                  contentStyle={{
                    background: "#f3f4f6",
                    border: "1px solid black",
                    textAlign: "left",
                    zIndex: "-11"
                    
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid red",
                        zIndex: "-11"
                    }}
                    iconStyle={{ background: 'rgba(0, 0, 0,0.3)', color: 'white' , zIndex: "-11" }}
                    date={item.date}
                    icon= {item.icon}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.location}</p>
                    <p>{item.description}</p>
                  </VerticalTimelineElement>
                </React.Fragment>
            ))
        }
      </VerticalTimeline>
      

    </section>
  )
}
