import { apiSlice } from "@/utils/redux/base/apiSlice";

export interface SensorData {
  id: number;
  temperature: number;
  nh3_level: number;
  created_at: string;
  humidity: number;
  sensor_id: number;
  co2_level: number;
}

export const sensorDetailApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSensorData: builder.query<
      SensorData[],
      { sensorId: number; time_period: string; limit: number; offset: number }
    >({
      query: ({ sensorId, time_period, limit, offset }) => ({
        url: `/sensor/multiple_data/1/${sensorId}`,
        method: "GET",
        params: {
          time_period,
          limit,
          offset,
        },
      }),
      providesTags: ["sensorDataList"],
    }),
  }),
});

export const { useGetSensorDataQuery } = sensorDetailApiSlice;
