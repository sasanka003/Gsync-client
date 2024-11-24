import { toast } from "@/components/ui/use-toast";
import { Plantation, PlantationResponse } from "@/types/plantations";
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
      getAllPlantations: builder.query<Plantation[], void>({
        query: () => '/plantations',
      }),
      getUserPlantations: builder.query<Plantation[], string>({
        query: (userId) => `/plantations/user/${userId}`,
      }),
      getUserPlantationCount: builder.query<number, string>({
        query: (userId) => `/plantations/user/${userId}/count`,
      }),
      deletePlantation: builder.mutation<string, number>({
        query: (plantationId) => ({
          url: `/plantations/${plantationId}`,
          method: 'DELETE',
        }),
      }),
      updatePlantationStatus: builder.mutation<Plantation, number>({
        query: (plantationId) => ({
          url: `/plantations/${plantationId}/verify`,
          method: 'PUT',
        }),
      }),
    }),
  });
  
  export const {
    useRegisterPlantationMutation,
    useGetAllPlantationsQuery,
    useGetUserPlantationsQuery,
    useGetUserPlantationCountQuery,
    useDeletePlantationMutation,
    useUpdatePlantationStatusMutation,
  } = plantationApiSlice;