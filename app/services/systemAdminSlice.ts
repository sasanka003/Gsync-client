import { apiSlice } from "@/utils/redux/base/apiSlice";

export interface Gardener {
  user_id: string;
  name: string;
  email: string;
  phone: string;
}

export interface EditGardenerRequest {
  user_id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Plantation {
  plantationName: string | undefined;
  name: string;
  plantation_id: number;
  type: string;
  user_id: string;
  city: string;
  province: string;
  country: string;
  createdAt: string;
  status: string;
  plantation_length: GLfloat;
  plantation_width: GLfloat;
}

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGardeners: builder.query<Gardener[], { page: number; page_size: number }>({
      query: ({ page, page_size }) => ({
        url: `/main/admin/gardeners/?page=${page}&page_size=${page_size}`,
        method: 'GET',
      }),
      providesTags: ['gardnersList'],
    }),
    editGardener: builder.mutation<void, EditGardenerRequest>({
      query: ({ user_id, ...data }) => ({
        url: `/main/admin/gardener/${user_id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['gardnersList']
    }),
    deleteGardener: builder.mutation<void, string>({
      query: (user_id) => ({
        url: `/main/admin/gardener/${user_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['gardnersList'],
    }),
    getPlantationDetails: builder.query<Plantation[], void>({
      query: () => ({
        url: `/main/admin/plantations`,
        method: 'GET',
      }),
      providesTags: ['plantationList'],
    }),
  }),
});

export const { 
  useGetAllGardenersQuery, 
  useEditGardenerMutation, 
  useDeleteGardenerMutation, 
  useGetPlantationDetailsQuery
} = adminApiSlice;
