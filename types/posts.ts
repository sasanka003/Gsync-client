interface Post {
    post_id: number;
    title: string;
    content: string;
    media: string;
    created_at: string; 
    user_id: string;
    parent_post_id: number | null; 
    post_type: string; 
  }