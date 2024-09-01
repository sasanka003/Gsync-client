type Post = {
    post_id: number;
    title: string;
    content: string;
    post_type: string;
    user_id: string;
    user_name: string;
    created_at: string;
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

type PostComment ={
    content: string;
    created_at: string;
    user_id: string;
    comment_id: number;
    last_updated: string | null;
    post_id: number;
}

type createComment = {
    content: string;
    user_id: string;
    post_id: number;
}

