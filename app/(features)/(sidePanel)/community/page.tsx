import { ContentLayout } from "@/components/dashboard/content-layout";
import PostCard from "@/components/PostCard";
import TrendingTopics from "@/components/TrendingTopics";
import ActiveUsers from "@/components/ActiveUsers";
import PostCard3 from "@/components/PostCard3";
import { authenticatedFetch } from "@/utils/authenticatedFetch";

interface Post {
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
  user_id: string;
  created_at: string;
}

export default async function CommunityPage() {
  let data: Post[] = [];
  try {
    const response = await authenticatedFetch("http://127.0.0.1:8000/post/all");
    data = await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
  
  return (
    <ContentLayout title="Community">
      <div className="pt-10 flex justify-center items-start w-full">
        <div className="flex flex-row gap-20">
          <div className="flex flex-col items-center">
            <PostCard3
              date="2 hours ago"
              position="Farmer"
              name="Waruna Parakrama"
            />
            <div className="w-[712px] border border-text rounded-lg mt-6 p-4">
              <div className="text-h2 mb-4 text-common">Community Posts</div>
              {data.map((post, index) => (
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
      </div>
    </ContentLayout>
  );
}
