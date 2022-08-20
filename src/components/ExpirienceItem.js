import React from "react";

export default function ExpirienceItem(
  title,
  subTitle,
  dateTitle,
  description
) {
  return (
    <div className="sm:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
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
  );
}
