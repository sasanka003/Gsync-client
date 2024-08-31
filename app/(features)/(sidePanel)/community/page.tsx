"use client";

import { useEffect, useRef, useState } from "react";
import { ContentLayout } from "@/components/dashboard/content-layout";
import PostCard from "@/components/PostCard";
import TrendingTopics from "@/components/TrendingTopics";
import ActiveUsers from "@/components/ActiveUsers";
import PostCard3 from "@/components/PostCard3";
import { useGetAllPostsQuery } from "@/app/services/postSlice";

const POSTS_PER_PAGE = 3;

export default function CommunityPage() {
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLButtonElement>(null);

  const {
    data = [],
    error,
    isLoading,
    isFetching,
  } = useGetAllPostsQuery({
    limit: POSTS_PER_PAGE,
    offset: (page - 1) * POSTS_PER_PAGE,
  });

  useEffect(() => {
    if (data.length > 0) {
      const prevPostsCount = allPosts.length;
      setAllPosts((prevPosts) => {
        const newPosts = data.filter(
          (newPost) =>
            !prevPosts.some(
              (existingPost) => existingPost.post_id === newPost.post_id
            )
        );
        return [...prevPosts, ...newPosts];
      });

      if (data.length < POSTS_PER_PAGE) {
        setHasMore(false);
      }

      if (page > 1) {
        setTimeout(() => {
          const newPostElement = containerRef.current?.children[prevPostsCount];
          newPostElement?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else if (data.length === 0 && page > 1) {
      setHasMore(false);
    }
  }, [data, page]);

  const loadMorePosts = () => {
    if (!isFetching && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <ContentLayout title="Community">
      <div className="flex flex-row gap-5 justify-between pl-8 pr-20 pt-10">
        <div className="flex flex-col items-center">
          <PostCard3 position="Farmer" name="Waruna Parakrama" />
          <div className="w-[712px] border border-text rounded-lg mt-6 p-4">
            <div className="text-h2 mb-4 text-common">Community Posts</div>
            <div
              ref={containerRef}
              className="max-h-[600px] overflow-y-auto"
              style={{ scrollBehavior: "smooth" }}
            >
              {isLoading && <p>Loading...</p>}
              {error && <p>Failed to load posts.</p>}
              {allPosts.map((post, index) => (
                <PostCard
                  key={post.post_id}
                  title={post.title}
                  content={post.content}
                  createdAt={post.created_at}
                  upvotes={post.upvotes}
                  downvotes={post.downvotes}
                  author={post.user_name}
                  commentsCount={0}
                />
              ))}
            </div>
            {hasMore && (
              <button
                ref={loadMoreRef}
                className="py-2 rounded-lg bg-text text-fill w-full dark:text-common mt-4"
                onClick={loadMorePosts}
                disabled={isFetching}
              >
                {isFetching ? "Loading..." : "Load More Posts"}
              </button>
            )}
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