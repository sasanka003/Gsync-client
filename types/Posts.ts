type Post = {
    post_id: number;
    title: string;
    content: string;
    post_type: string;
    user_id: string;
    parent_post_id: string | null;
    upvotes: number | null;
    downvotes: number | null;
}

// New type for post creation
type CreatePost = {
    title: string;
    content: string;
    post_type: string;
    user_id: string;
    parent_post_id: string | null;
    file?: File;
}