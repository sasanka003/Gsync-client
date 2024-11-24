import React from "react";
import { MessageSquare, ArrowBigUp, ArrowBigDown } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface PostCardImageProps {
  title: string;
  content: string;
  author: string;
  upvotes: number;
  downvotes: number;
  commentsCount: number;
  image1Url: string;
  image2Url: string;
}

const PostCardImage: React.FC<PostCardImageProps> = ({
  title,
  content,
  author,
  upvotes,
  downvotes,
  commentsCount,
  image1Url,
  image2Url,
}) => {
  return (
    <Card className="p-4 mb-4 w-auto max-w-[680px]">
      <div className="flex items-center mb-2">
        <Image
          src={image1Url}
          width={40}
          height={40}
          alt="Profile picture"
          className="mr-4 rounded-full"
        />
        <div className="flex-1">
          <CardTitle className="text-lg font-bold text-common">
            {title}
          </CardTitle>
          <p className="text-detail text-grey">By {author}</p>
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
              <span className="mr-2">
                <MessageSquare style={{ color: "#105535" }} />
              </span>
              <span className="text-text">{commentsCount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <Image
          src={image2Url}
          width={250}
          height={250}
          alt="Post image"
          className="mb-4 rounded ml-14 mr-6"
        />
        <CardContent className="text-common  p-0 mb-4">
          {content}
          <div className="flex items-center text-grey text-detail mt-3">
            12th December 2024 | 12:30AM
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default PostCardImage;
