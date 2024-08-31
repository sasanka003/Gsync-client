type Post = {
    post_id: number;
    title: string;
    content: string;
    created_at: Date;
    user_id: string;
    parent_post_id: string | null;
    upvotes: number;
    downvotes: number;
    post_type: string;
}