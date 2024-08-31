"use client";

import React, { useEffect, useState } from "react"; 
import PostCard from "@/components/PostCard";
import { authenticatedFetch } from "@/utils/authenticatedFetch";

interface Post {
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
  user_id: string;
  created_at: string;
}

const CommentPopup: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authenticatedFetch("http://127.0.0.1:8000/post/all");
        const data: Post[] = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          content={post.content}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          author={post.user_id}
          date={post.created_at}
          commentsCount={0}
        />
      ))}
    </div>
  );
};

export default CommentPopup;
