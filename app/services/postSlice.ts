import { toast } from "@/components/ui/use-toast";
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
      providesTags: ['commentList'],
    }),
    createComment: builder.mutation<PostComment, { content: string; user_id: string; post_id: number }>({
      query: (commentData) => ({
        url: `/comments/${commentData.post_id}`,
        method: 'POST',
        body: commentData,
      }),
      invalidatesTags: ['commentList'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          toast({
            title: "Comment added successfully",
            description: "Your comment has been posted.",
          });
        } catch (err) {
          toast({
            title: "Error",
            description: "Failed to add comment. Please try again.",
            variant: "destructive",
          });
        }
      },
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useCreatePostMutation,
  useGetCommentsByPostIdQuery,
  useCreateCommentMutation,
} = userApiSlice;
