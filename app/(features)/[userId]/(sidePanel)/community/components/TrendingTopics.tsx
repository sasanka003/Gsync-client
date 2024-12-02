import React from "react";
import { ArrowRight } from "lucide-react";
import { Calendar } from "lucide-react";

const TrendingTopics = () => {
  const topics = [
    <a href="#" className="underline">Bell pepper harvesting</a>,
    <a href="#" className="underline">Common pest troubles with ...</a>,
    <a href="#" className="underline">Tomato leaves get yellow on ...</a>,
    <a href="#" className="underline">These fertilizer tricks will sho...</a>,
    <a href="#" className="underline">November update make m...</a>,
  ];

  return (
    <div className="border border-text rounded-lg p-4 w-[344px]">
      <h2 className="font-semibold text-h2 mb-4 text-common">Trending Topics</h2>
      {topics.map((topic, index) => (
        <div key={index} className="flex justify-between items-center w-full">
          <div className="flex flex-col mb-2">
            <div className="font-medium text-large text-text">{topic}</div>
            <div className="text-p text-grey">View Related Posts</div>
          </div>
          <ArrowRight className="text-text" />
        </div>
      ))}
      {/* <div className="flex items-center mt-4">
        <Calendar className="w-5 h-5 mr-2 text-grey" />
        <div className="text-p text-grey">Alternate Text</div>
      </div> */}
    </div>
  );
};

export default TrendingTopics;
