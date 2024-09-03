import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "../../../../../components/ui/card";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MessageCircleIcon,
} from "../../../../../components/Icons";
import PopupPost from "./PopupPost";
import ProfilePicture from "../../../../../components/ProfilePicture";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog";
import { useGetCommentsByPostIdQuery } from "@/app/services/postSlice";
import { upvotePost, downvotePost } from "@/lib/vote-actions";
import { createClient } from "@/utils/supabase/client";
import { toast } from "@/components/ui/use-toast";


const supabase = createClient();


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
  title,
  content,
  author,
  post_id,
  upvotes,
  downvotes,
  commentsCount,
  createdAt,
}) => {
  const formattedDate = formatDate(createdAt);
  const [voteCounts, setVoteCounts] = React.useState({ upvotes: upvotes || 0, downvotes: downvotes || 0 });
  const { data: comments = [] } = useGetCommentsByPostIdQuery(post_id);

  useEffect(() => {
    const channel = supabase.channel(
      "community-vote-channel"
    )
    .on('postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'votes',
        filter: `post_id=eq.${post_id}`,
      },
      (payload) => {
        console.log('Change received!', payload);
      }
    )
    .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [post_id]);

  const handleUpvote = () => {
    // uncomment the following lines to enable voting only for logged in users
    // if (!userId) {
    //   toast({
    //     title: "Error",
    //     description: "You need to be logged in to vote.",
    //     variant: "destructive",
    //   });
    // }
    upvotePost(post_id, "");
  };

  const handleDownvote = () => {
    // uncomment the following lines to enable voting only for logged in users
    // if (!userId) {
    //   toast({
    //     title: "Error",
    //     description: "You need to be logged in to vote.",
    //     variant: "destructive",
    //   });
    // }
    downvotePost(post_id, "");
  };


  return (
    <Card className="p-4 mb-4 w-auto max-w-[680px]">
      <div className="flex items-center mb-2">
        <ProfilePicture name={author} className="mr-4" />
        <div className="flex-1">
          <CardTitle className="text-lg font-bold text-common">
            {title}
          </CardTitle>
          <p className="text-detail text-muted-foreground">By {author}</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <span>
              <ArrowUpIcon />
            </span>
            <span className="text-list">{upvotes}</span>
          </div>
          <div className="flex items-center">
            <span>
              <ArrowDownIcon />
            </span>
            <span className="text-text">{downvotes}</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex items-center cursor-pointer">
                <span className="mr-2">
                  <MessageCircleIcon />
                </span>
                <span className="text-text">{comments.length}</span>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[680px] max-h-[98%] overflow-hidden p-4">
              <DialogTitle className="text-h3 text-center mb-4">
                Post: {title}
              </DialogTitle>
              <PopupPost
                post_id={post_id}
                title={title}
                content={content}
                author={author}
                createdAt={formattedDate}
                upvotes={voteCounts.upvotes}
                downvotes={voteCounts.downvotes}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <CardContent className="text-common p-0 mb-4 ml-14">
        {content}
      </CardContent>
      <div className="flex items-center text-[#6B7280] text-detail ml-14">
        {formattedDate}
      </div>
    </Card>
  );
};

export default PostCard;
