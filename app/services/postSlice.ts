import { apiSlice } from "@/utils/redux/base/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], { limit: number; offset: number }>({
      query: ({ limit, offset }) => `/post/top/?limit=${limit}&offset=${offset}`,
      providesTags: ['postList'],
    }),
    createPost: builder.mutation<Post, CreatePost>({
      query: (data) => {
        const { file, ...postData } = data;
        const formData = new FormData();
        formData.append('title', postData.title);
        formData.append('content', postData.content);
        formData.append('post_type', postData.post_type);
        formData.append('user_id', postData.user_id);
        if (file) {
          formData.append('file', file);
        }
        return {
          url: '/post/create',
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: ['postList'],
    }),
    getCommentsByPostId: builder.query<PostComment[], number>({
      query: (postId) => `/comments/${postId}`,
    }),
    // New createComment mutation
    createComment: builder.mutation<Comment, { content: string; user_id: string; post_id: number }>({
      query: (data) => ({
        url: '/comments/create', // Correct endpoint URL for creating a comment
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['commentList'], // Assuming you have a tag to refresh comments
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useCreatePostMutation,
  useGetCommentsByPostIdQuery,
  useCreateCommentMutation, // Export the new hook
} = userApiSlice;
