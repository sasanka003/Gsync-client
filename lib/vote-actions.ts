import { createClient } from "@/utils/supabase/client";
import { toast } from "@/components/ui/use-toast";

const supabase = createClient();


export const upvotePost = async (postId: number, userId: string) => {
    const { data, error } = await supabase
    .from('votes')
    .upsert(
        [
            {
                post_id: postId,
                user_id: userId,
                vote_type: "Upvote"
            },
        ],
        { onConflict: 'post_id, user_id' }
    );

    if (error) {
        toast({
            title: "Error",
            description: "Failed to add vote. Please try again.",
            variant: "destructive",
        });
    }

    return data;
};

export const downvotePost = async (postId: number, userId: string) => {
    const { data, error } = await supabase
    .from('votes')
    .upsert(
        [
            {
                post_id: postId,
                user_id: userId,
                vote_type: "Downvote"
            },
        ],
        { onConflict: 'post_id, user_id' }
    );

    if (error) {
        toast({
            title: "Error",
            description: "Failed to add vote. Please try again.",
            variant: "destructive",
        });
    }

    return data;
};
