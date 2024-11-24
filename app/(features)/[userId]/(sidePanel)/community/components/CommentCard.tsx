import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface CommentCardProps {
  content: string;
  user_id: string;
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

const CommentCard: React.FC<CommentCardProps> = ({
  content,
  user_id,
  createdAt,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = formatDate(createdAt);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="border border-text rounded-md p-4 max-w-[680px] shadow-sm ml-6 mr-6 mb-4">
      <div className="flex items-start">
        <Image
          src="/images/profile.png"
          width={40}
          height={40}
          alt="Profile picture"
          className="rounded-full mr-4"
        />
        <div className="flex-1">
          <CardContent className="text-[#374151] p-0">
            <div className="text-detail pb-2">{user_id}</div>
            <div className={`relative ${isExpanded ? "" : "line-clamp-3"}`}>
              <div
                className={`overflow-hidden ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
                style={{ maxHeight: isExpanded ? "none" : "4.5rem" }}
              >
                {content}
              </div>
              {content.length > 150 && (
                <button
                  className="text-blue-500 hover:underline"
                  onClick={toggleExpand}
                >
                  {isExpanded ? "See Less..." : "See More..."}
                </button>
              )}
            </div>
            <div className="text-xs text-gray-500 mt-2">{formattedDate}</div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default CommentCard;
