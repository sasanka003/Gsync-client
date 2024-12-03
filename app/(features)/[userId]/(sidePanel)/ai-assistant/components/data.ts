export type Metric = { day: string; value: number };

interface Metrics {
  temperature: Array<Metric>;
  co2: Array<Metric>;
  humidity: Array<Metric>;
}

export const SENSOR_DATA: Metrics = {
  temperature: [
    { day: "Mon", value: 22.5 },
    { day: "Tue", value: 24.0 },
    { day: "Wed", value: 21.8 },
    { day: "Thu", value: 23.2 },
    { day: "Fri", value: 22.9 },
    { day: "Sat", value: 25.1 },
    { day: "Sun", value: 24.4 },
    { day: "Mon", value: 23.7 },
    { day: "Tue", value: 24.3 },
    { day: "Wed", value: 22.8 },
    { day: "Thu", value: 23.5 },
    { day: "Fri", value: 23.9 },
    { day: "Sat", value: 25.2 },
    { day: "Sun", value: 24.6 },
  ],
  co2: [
    { day: "Mon", value: 400 },
    { day: "Tue", value: 420 },
    { day: "Wed", value: 390 },
    { day: "Thu", value: 415 },
    { day: "Fri", value: 405 },
    { day: "Sat", value: 410 },
    { day: "Sun", value: 408 },
    { day: "Mon", value: 402 },
    { day: "Tue", value: 418 },
    { day: "Wed", value: 395 },
    { day: "Thu", value: 417 },
    { day: "Fri", value: 406 },
    { day: "Sat", value: 411 },
    { day: "Sun", value: 409 },
  ],
  humidity: [
    { day: "Mon", value: 55 },
    { day: "Tue", value: 60 },
    { day: "Wed", value: 50 },
    { day: "Thu", value: 58 },
    { day: "Fri", value: 57 },
    { day: "Sat", value: 62 },
    { day: "Sun", value: 59 },
    { day: "Mon", value: 56 },
    { day: "Tue", value: 61 },
    { day: "Wed", value: 51 },
    { day: "Thu", value: 59 },
    { day: "Fri", value: 58 },
    { day: "Sat", value: 63 },
    { day: "Sun", value: 60 },
  ],
};
