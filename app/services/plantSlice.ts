import { toast } from "@/components/ui/use-toast";
import { Plantation, PlantationResponse, UserPlantation } from "@/types/plantations";
import { apiSlice } from "@/utils/redux/base/apiSlice";

export const plantationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerPlantation: builder.mutation<PlantationResponse, Plantation>({
      query: (data) => ({
        url: '/plantations/register',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast({
            title: "Success",
            description: "Plantation registration submitted successfully.",
          });
        } catch (err) {
          toast({
            title: "Error",
            description: "Failed to register plantation. Please try again.",
            variant: "destructive",
          });
        }
      },
    }),

    // Get a single plantation by ID
    getPlantation: builder.query<Plantation, number>({
      query: (plantationId) => ({
        url: `/plantations/get/${plantationId}`,
        method: 'GET',
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          toast({
            title: "Error",
            description: "Failed to fetch plantation details.",
            variant: "destructive",
          });
        }
      },
    }),

    // Get all plantations for a user
    getUserPlantations: builder.query<UserPlantation[], string>({
      query: (userId) => ({
        url: `/plantations/get/${userId}`,
        method: 'GET',
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          toast({
            title: "Error",
            description: "Failed to fetch user plantations.",
            variant: "destructive",
          });
        }
      },
    }),

    // Delete a plantation
    deletePlantation: builder.mutation<PlantationResponse, number>({
      query: (plantationId) => ({
        url: `/plantations/delete/${plantationId}`,
        method: 'DELETE',
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast({
            title: "Success",
            description: "Plantation deleted successfully.",
          });
        } catch (err) {
          toast({
            title: "Error",
            description: "Failed to delete plantation.",
            variant: "destructive",
          });
        }
      },
    }),

    // Update plantation verification status
    updatePlantationStatus: builder.mutation<PlantationResponse, number>({
      query: (plantationId) => ({
        url: `/plantations/update/${plantationId}`,
        method: 'PUT',
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast({
            title: "Success",
            description: "Plantation verified successfully.",
          });
        } catch (err) {
          toast({
            title: "Error",
            description: "Failed to verify plantation.",
            variant: "destructive",
          });
        }
      },
    }),

    // Get all plantations
    getAllPlantations: builder.query<Plantation[], void>({
      query: () => ({
        url: '/plantations/all',
        method: 'GET',
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          toast({
            title: "Error",
            description: "Failed to fetch plantations.",
            variant: "destructive",
          });
        }
      },
    }),
  }),
});

export const {
  useRegisterPlantationMutation,
  useGetPlantationQuery,
  useGetUserPlantationsQuery,
  useDeletePlantationMutation,
  useUpdatePlantationStatusMutation,
  useGetAllPlantationsQuery,
} = plantationApiSlice;