"use client";

import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { ArrowDownIcon, ArrowUpIcon, MessageCircleIcon } from "./Icons";
import PopupPost from "./PopupPost";

interface PostCardProps {
  title: string;
  content: string;
  author: string;
  upvotes: number | null;
  downvotes: number | null;
  commentsCount: number;
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

const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  author,
  upvotes,
  downvotes,
  commentsCount,
  createdAt,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const formattedDate = formatDate(createdAt);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };


  return (
    <Card className="p-4 mb-4 w-auto max-w-[680px]">
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
          <p className="text-detail text-[#6B7280]">By {author}</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span>
                <ArrowUpIcon />
              </span>
              <span className="text-list">{upvotes}</span>
            </div>
            <div className="flex items-center">
              <span>
                <ArrowDownIcon />
              </span>
              <span className="text-text">{downvotes}</span>
            </div>
            <div className="flex items-center">
            <span className="mr-2 cursor-pointer" onClick={togglePopup}>
                <MessageCircleIcon />
              </span>
              <span className="text-text">{commentsCount}</span>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="text-common p-0 mb-4 ml-14">
        {content}
      </CardContent>
      <div className="flex items-center text-[#6B7280] text-detail ml-14">
        {formattedDate}
      </div>

      {isPopupVisible && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg relative w-80">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={togglePopup}
            >
              X
            </button>
            <p>{title}</p>
          <PopupPost 
          title={title}
          content={content}
          author={author}
          createdAt={formattedDate}
           /> 
          </div>
        </div>
      )}
    </Card>
  );
};

export default PostCard;
