"use client";

import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { ArrowBigUp, ArrowBigDown, MessageSquare } from "lucide-react";
import Image from "next/image";
import PopupPost from "./PopupPost";

interface PostCardProps {
  title: string;
  content: string;
  author: string;
  upvotes: number;
  downvotes: number;
  commentsCount: number;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  author,
  upvotes,
  downvotes,
  commentsCount,
  date,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
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
          <div className="flex">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center">
                <span>
                  <ArrowBigUp fill="#0E462C" size={30} />
                </span>
                <span className="text-text">{upvotes}</span>
              </div>
              <div className="flex items-center">
                <span>
                  <ArrowBigDown size={30} />
                </span>
                <span className="text-text">{downvotes}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 cursor-pointer" onClick={togglePopup}>
                  <MessageSquare style={{ color: "#105535" }} />
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
          {date}
        </div>
      </Card>

      {/* Popup Component */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 w-full">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[500px]">
            <h2 className="text-lg font-bold">Comments</h2>
            <PopupPost
              title={title}
              content={content}
              author={author}
              upvotes={upvotes}
              downvotes={downvotes}
              commentsCount={commentsCount}
              date={date}
            />

            <button
              onClick={togglePopup}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;
