import React from "react";
// import ExpirienceItem from "../components/ExpirienceItem";

export function ExpirienceItem(title, subTitle, dateTitle, description) {
  return (
    <div className="container mx-auto px-5 py-5 items-left">
      <div className="sm:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
        <h1 className="title-font sm:text-base text-lg font-medium text-pink-600">
          {title}
        </h1>
        <h2 className="title-font sm:text-sm text-md font-medium text-pink-600">
          {subTitle}
        </h2>
        <h2 className="title-font sm:text-sm text-md font-medium text-grey-200">
          {dateTitle}
        </h2>
        <p className="sm:text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Expirience() {
  return (
    <section id="expirience">
      {
        // Education
      }
      <div className="container mx-auto flex flex-wrap px-7 py-7 md:flex-row flex-col items-left">
        {ExpirienceItem(
          "Masters degree",
          "Reichman University",
          "September 2021 - Now",
          "Studying towards Master in Computer science, searching for subjects for Thesis"
        )}
        {ExpirienceItem(
          "Bachelor's Degree - Computer Science and Visual Communications Design",
          "Bezalel Academy of arts and The Hebrew University",
          "September 2016 - July 2021",
          "Engineer and Designer, aspiring science Researcher. A multi-disciplinary person at nature. Strong in the k-wave"
        )}
        {
          // Expirience
        }
        {ExpirienceItem(
          "Software Engineer ~ Product",
          "Now You Know, Tel Aviv, Israel",
          "September 2021 - Now",
          "First local software engineer, building systems from scratch. Designed and architected complex systems Mostly worked with Typescript, AWS, neo4j, MongoDB."
        )}
        {ExpirienceItem(
          "Software Engineer Intern",
          "Microsoft Security, Herzelyia, Israel",
          "September 2019 - September 2021",
          "Software engineering mostly used Python, C#, Azure dev ops, Kusto. Created several crawlers, worked with large amounts of data"
        )}
        {ExpirienceItem(
          "Data Analyst",
          "Israel Defence Forces, Intelligence force",
          "February 2019 - April 2019",
          "SQL Engineering, worked with large scale data bases"
        )}
        {ExpirienceItem(
          "Software Engineer Intern",
          "Unite Us, New York, US",
          "September 2018 - October 2018",
          "Was the first intern there, worked using mostly with Python and Ruby. Implemented documentation migrator to SWAGGER. Participated in writing an internal service for costumer care team."
        )}
        {ExpirienceItem(
          "Java Instructor",
          "Queen B, Jerusalem, Israel",
          "October 2017 - July 2018",
          "Conducted Java classes to groups of 13 teenage students"
        )}
        <h1>Download the full CV here.</h1>
        {/*{ExpirienceItem("", "", "", "")}*/}
      </div>
    </section>
  );
}
