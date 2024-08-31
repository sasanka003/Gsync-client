import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { ArrowDownIcon, ArrowUpIcon, MessageCircleIcon } from "./Icons";
import { useGetCommentsByPostIdQuery } from "@/app/services/postSlice";

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
  const formattedDate = formatDate(createdAt);

  // const {
  //   data = [],
  //   error,
  //   isLoading,
  //   isFetching,
  // } = useGetCommentsByPostIdQuery(post_id);
  // console.log(data);

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
              <span className="text-list">123</span>
            </div>
            <div className="flex items-center">
              <span>
                <ArrowDownIcon />
              </span>
              <span className="text-text">{downvotes}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">
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
    </Card>
  );
};

export default PostCard;