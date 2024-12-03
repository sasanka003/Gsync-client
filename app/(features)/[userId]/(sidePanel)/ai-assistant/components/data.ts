export type Metric = { day: string; value: number };

interface Metrics {
  temperature: Array<Metric>;
  co2: Array<Metric>;
  humidity: Array<Metric>;
}

export const SENSOR_DATA: Metrics = {
  temperature: [
    { day: "Mon", value: 29.5 },
    { day: "Tue", value: 30.5 },
    { day: "Wed", value: 29.5 },
    { day: "Thu", value: 30.0 },
    { day: "Fri", value: 30.5 },
    { day: "Sat", value: 30 },
    { day: "Sun", value: 29 },
  ],
  co2: [
    { day: "Mon", value: 620 },
    { day: "Tue", value: 620 },
    { day: "Wed", value: 620 },
    { day: "Thu", value: 618 },
    { day: "Fri", value: 614 },
    { day: "Sat", value: 622 },
    { day: "Sun", value: 620 },
  ],
  humidity: [
    { day: "Mon", value: 68 },
    { day: "Tue", value: 69 },
    { day: "Wed", value: 70 },
    { day: "Thu", value: 68 },
    { day: "Fri", value: 68 },
    { day: "Sat", value: 70 },
    { day: "Sun", value: 75 },
  ],
};
