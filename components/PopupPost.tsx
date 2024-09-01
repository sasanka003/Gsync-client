import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import ProfilePicture from "./ProfilePicture";
import CommentCards from "./CommentCards";
import CreateComment from "./CreateComment";
import { useGetCommentsByPostIdQuery } from "@/app/services/postSlice";

interface PopupPostProps {
  post_id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  upvotes: number | null;
  downvotes: number | null;
}

const PopupPost: React.FC<PopupPostProps> = ({
  post_id,
  title,
  content,
  author,
  createdAt,
  upvotes,
  downvotes,
}) => {
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  const toggleContentExpand = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  const {
    data: comments = [],
    error,
    isLoading,
    isFetching,
  } = useGetCommentsByPostIdQuery(post_id);

  console.log("Fetched Comments:", comments);

  return (
    <div className="flex-1 overflow-y-auto">
      <Card className="p-4 w-full border border-white shadow-lg">
        <div className="flex items-center mb-2">
          <ProfilePicture name={author} className="mr-4" />
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
          {createdAt}
        </div>
      </Card>

      <div className="border-t border-gray-200 pt-4">
        {isLoading ? (
          <p>Loading comments...</p>
        ) : error ? (
          <p>Error loading comments</p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment: any) => (
              <CommentCards
                key={comment.id}
                title={comment.title}
                content={comment.content}
                author={comment.author}
                post_id={comment.post_id}
                upvotes={comment.upvotes}
                downvotes={comment.downvotes}
                commentsCount={comment.commentsCount}
                createdAt={comment.createdAt}
              />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <CreateComment name={author} position="Commenter" postId={post_id} />
      </div>
    </div>
  );
};

export default PopupPost;
