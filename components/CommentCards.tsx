import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
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
    post_id,
    createdAt,
}) => {
    const formattedDate = formatDate(createdAt);

    const {
        data: comments = [],
        error,
        isLoading,
    } = useGetCommentsByPostIdQuery(post_id);

    return (
        <Card className="border border-text rounded-md p-4 max-w-[680px] shadow-sm">
            {comments.map((comment, index) => (
                <div key={index} className="flex items-start">
                    <Image
                        src="/images/profile.png"
                        width={40}
                        height={40}
                        alt="Profile picture"
                        className="rounded-full"
                    />
                    <div className="flex-1">
                        <CardContent className="text-[#374151]">
                            <div className="text-detail pb-4">{comment.user_id}</div>
                            {comment.content}
                        </CardContent>
                    </div>
                    
                </div>
            ))}

            {isLoading && <p>Loading comments...</p>}
            {error && <p>Error loading comments</p>}
            {!isLoading && !error && comments.length === 0 && (
                <p className="text-sm text-[#6B7280]">No comments available.</p>
            )}
        </Card>
    );
};

export default PostCard;
