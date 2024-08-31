"use client";

import { ContentLayout } from "@/components/dashboard/content-layout";
import PostCard from "@/components/PostCard";
import TrendingTopics from "@/components/TrendingTopics";
import ActiveUsers from "@/components/ActiveUsers";
import PostCard3 from "@/components/PostCard3";
import { authenticatedFetch } from "@/utils/authenticatedFetch";
import { useEffect, useRef, useState } from "react";
import { useGetAllPostsQuery } from "@/app/services/postSlice";

export default function CommunityPage() {
  const [offset, setOffset] = useState(0);

  const [posts, setPosts] = useState<Post[]>([]);
  const {
    data = [],
    error,
    isLoading,
  } = useGetAllPostsQuery({ limit: 3, offset });

  const postsEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data.length > 0) {
      setPosts((prevPosts) => [...prevPosts, ...data]);
      // Scroll to the new posts
      postsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  const loadMorePosts = () => {
    setOffset((prevOffset) => prevOffset + 3);
  };

  return (
    <ContentLayout title="Community">
      <div className="flex flex-row gap-5 justify-between pl-8 pr-20 pt-10">
        <div className="flex flex-col items-center">
          <PostCard3
            date="2 hours ago"
            position="Farmer"
            name="Waruna Parakrama"
          />
          <div className="w-[712px] border border-text rounded-lg mt-6 p-4">
            <div className="text-h2 mb-4 text-common">Community Posts</div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Failed to load posts.</p>}
            {data.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.content}
                upvotes={post.upvotes}
                downvotes={post.downvotes}
                author={""}
                commentsCount={0}
              />
            ))}
            <div ref={postsEndRef} />
            <button
              className="py-2 rounded-lg bg-text text-fill w-full dark:text-common"
              onClick={loadMorePosts}
            >
              Load More Posts
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <ActiveUsers />
          <TrendingTopics />
        </div>
      </div>
    </ContentLayout>
  );
}
