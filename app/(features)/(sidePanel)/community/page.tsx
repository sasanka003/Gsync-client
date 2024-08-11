import { ContentLayout } from "@/components/dashboard/content-layout";
import PostCard from "@/components/PostCard";
import PostCard2 from "@/components/PostCard2";
import TrendingTopics from "@/components/TrendingTopics";
import ActiveUsers from "@/components/ActiveUsers";
import PostCard3 from "@/components/PostCard3";

export default async function CommunityPage() {
  const data: Post[] = await fetch("http://127.0.0.1:8000/post/all", {}).then(
    (res) => {
      return res.json();
    }
  );
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
            {data.map((post) => (
              <PostCard
                title={post.title}
                content={post.content}
                author={post.user_id}
                upvotes={0}
                downvotes={0}
                commentsCount={0}
              />
            ))}
            <button className="py-2 rounded-lg bg-text text-fill w-full dark:text-common">
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
