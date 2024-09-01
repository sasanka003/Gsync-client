"use client";

import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";

interface PostCardProps {
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const PopupPost: React.FC<PostCardProps> = ({
  title,
  content,
  author,
  createdAt,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const formattedDate = formatDate(createdAt);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const toggleContentExpand = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  return (
    <Card className="p-4 mb-4 w-auto max-w-[680px] border border-white shadow-lg">
      <div className="flex items-center mb-2">
        <Image
          src="/images/profile.png"
          width={40}
          height={40}
          alt="Profile picture"
          className="mr-4"
        />
        <div className="flex-1">
          <CardTitle className="text-lg font-bold text-common">
            {title}
          </CardTitle>
          <p className="text-detail text-muted-foreground">By {author}</p>
        </div>
      </div>
      <CardContent className="text-common p-0 mb-4 ml-14">
        <div
          className={`relative ${isContentExpanded ? "" : "line-clamp-3"}`}
          style={{ maxHeight: isContentExpanded ? "none" : "4.5rem" }}
        >
          {content}
        </div>
        {!isContentExpanded && (
          <button
            className="text-blue-500 hover:underline"
            onClick={toggleContentExpand}
          >
            See More...
          </button>
        )}
        {isContentExpanded && (
          <button
            className="mt-2 text-blue-500 hover:underline"
            onClick={toggleContentExpand}
          >
            See Less...
          </button>
        )}
      </CardContent>

      <div className="flex items-center text-[#6B7280] text-detail ml-14">
        {formattedDate}
      </div>

      
    </Card>
  );
};

export default PopupPost;
