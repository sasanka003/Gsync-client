import { ContentLayout } from "@/components/dashboard/content-layout";
import PostCard from "@/components/PostCard";
import PostCard2 from "@/components/PostCard2";
import TrendingTopics from "@/components/TrendingTopics";
import ActiveUsers from "@/components/ActiveUsers";

export default function CommunityPage() {
  return (
    <ContentLayout title="Community">
        <div className="flex flex-row gap-5 p-5 ">
            <div className="flex flex-col items-center">
                <PostCard
                    title="Tomato Leaves turned into Yellow"
                    content="The leaves in my tomato plantation turned into yellow color, any suggestions why this could happen?"
                    author="Sasanka"
                    upvotes={12}
                    downvotes={2}
                    commentsCount={5}
                />
                <PostCard2
                    title="Tomato Leaves turned into Yellow"
                    content="The leaves in my tomato plantation turned into yellow color, any suggestions why this could happen?"
                    author="Sasanka"
                    upvotes={12}
                    downvotes={2}
                    commentsCount={5}
                    image1Url="/images/profile.png"
                    image2Url="/images/1623948291963.webp"
                />
            </div>
            <div className="flex flex-col gap-5 items-center">
                <ActiveUsers />
                <TrendingTopics />
            </div>
        </div>
    </ContentLayout>
  );
}
