import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { ThumbsUp, MessageSquare } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  title: string;
  content: string;
  author: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, author }) => {
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
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <p className="text-detail text-[#6B7280]">By {author}</p>
        </div>
        <div className="flex">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center">
              <span className="mr-2">
                <ThumbsUp style={{ color: "#105535" }} />
              </span>
              <span className="text-[#105535]">999</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                <MessageSquare style={{ color: "#105535" }} />
              </span>
              <span className="text-[#105535]">999</span>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="text-subtle p-0 mb-4 ml-14">
        {content}
      </CardContent>
      <div className="flex items-center text-[#6B7280] text-detail ml-14">
        "12th December 2024, 12:30AM"
      </div>
    </Card>
  );
};

export default PostCard;
