import { apiSlice } from "@/utils/redux/base/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => '/post/all',
      providesTags: ['postList'],
    }),
    createPost: builder.mutation<Post, CreatePost>({
      query: (data) => {
        const { file, ...postData } = data;
        const formData = new FormData();
        formData.append('data', JSON.stringify(postData));
        if (file) {
          formData.append('file', file);
        }
        return {
          url: '/post',
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: ['postList']
    }),
  }),
});

export const { useGetAllPostsQuery, useCreatePostMutation } = userApiSlice;