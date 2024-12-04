import { Area, PlantationType, PlantType, Subscription } from "@/types/plantations";
import { apiSlice } from "@/utils/redux/base/apiSlice";
import { number } from "zod";

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
  plantation_id: number;
  name: string;
  plant_type: PlantType;
  plantation_type: PlantationType;
  city: string;
  province: string;
  country: string;
  plantation_length: number;
  plantation_width: number;
  verified: boolean;
  createdAt: string;
  status: string;
  
  user_id: string;
  subscription: Subscription;
}

export interface HelpRequest {
  help_request_id: number;
  subject: string;
  message: string;
  createdAt: string;
  name: string;
  type: string;
}

export interface UpdatePlantationRequest {
  plantation_width: number;
  plantation_length: number;
  comment: string;
  is_approved: boolean;
}

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Existing endpoints...
    getAllGardeners: builder.query<Gardener[], { page: number; page_size: number }>({
      query: ({ page, page_size }) => ({
        url: `/admin/gardeners/?page=${page}&page_size=${page_size}`,
        method: 'GET',
      }),
      providesTags: ['gardnersList'],
    }),
    getAllHelpRequests: builder.query<HelpRequest[], void>({
      query: () => ({
        url: `/admin/helpRequest`,
        method: 'GET',
      }),
      providesTags: ['helpRequestList'],
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
        url: `/admin/plantations`,
        method: 'GET',
      }),
      providesTags: ['plantationList'],
    }),
    // New endpoints
    getPlantationById: builder.query<Plantation, number>({
      query: (plantation_id) => ({
        url: `/admin/plantation/${plantation_id}`,
        method: 'GET',
      }),
    }),
    updatePlantationStatus: builder.mutation<void, { plantation_id: number; data: UpdatePlantationRequest }>({
      query: ({ plantation_id, data }) => ({
        url: `/main/admin/plantations/${plantation_id}`,
        method: 'PUT',
        body: data,
      })
    }),
  }),
});

export const { 
  useGetAllGardenersQuery, 
  useEditGardenerMutation, 
  useDeleteGardenerMutation, 
  useGetPlantationDetailsQuery,
  useGetPlantationByIdQuery,
  useUpdatePlantationStatusMutation,
  useGetAllHelpRequestsQuery,
} = adminApiSlice;