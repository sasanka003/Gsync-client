import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { ArrowDownIcon, ArrowUpIcon, MessageCircleIcon } from "./Icons";
import { useGetCommentsByPostIdQuery } from "@/app/services/postSlice";
import PopupPost from "./PopupPost";
import CommentCards from "./CommentCards"; // Import the CommentCard component
import CreateComment from "./CreateComment";
import ProfilePicture from "./ProfilePicture";

interface PostCardProps {
  post_id: number;
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
  post_id,
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

  const {
    data: comments = [],
    error,
    isLoading,
    isFetching,
  } = useGetCommentsByPostIdQuery(post_id);

  console.log("Fetched Comments:", comments);

  return (
    <Card className="p-4 mb-4 w-auto max-w-[680px]">
      <div className="flex items-center mb-2">
        <ProfilePicture name={author} className="mr-4" />
        <div className="flex-1">
          <CardTitle className="text-lg font-bold text-common">
            {title}
          </CardTitle>
          <p className="text-detail text-[#6B7280]">By {author}</p>
        </div>
        <div className="flex items-center">
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
            <span className="text-text">{comments.length}</span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
            <div className="pb-6 flex items-center justify-between">
              <h2 className="text-h3 font-bold text-common">POST : {title}</h2>
              <button
                className="absolute top-2 right-2 pt-4 pr-4 text-common hover:text-gray-700"
                onClick={togglePopup}
              >
                X
              </button>
            </div>

            <PopupPost
              title={title}
              content={content}
              author={author}
              createdAt={formattedDate}
            />

            {/* Comments Section */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <CommentCards
                title={title}
                content={content}
                author={author}
                post_id={post_id}
                upvotes={upvotes}
                downvotes={downvotes}
                commentsCount={commentsCount}
                createdAt={createdAt}
              />
            </div>

            <div className="pt-4 border-t border-gray-200 mt-4">
              <CreateComment name="hello" position="hello" postId={0} />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default PostCard;
