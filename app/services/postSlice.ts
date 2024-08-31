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
          url: '/post/create',  // Corrected URL
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: ['postList']
    }),
    getCommentsByPostId: builder.query<PostComment[], number>({
      query: (postId) => `/comments/${postId}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useCreatePostMutation, useGetCommentsByPostIdQuery} = userApiSlice;