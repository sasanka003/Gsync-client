"use client";

import { scaleLinear } from "d3-scale";
import { motion } from "framer-motion";
import { SENSOR_DATA } from "./data";
import { useWindowSize } from "react-use";

export const MetricsView = ({
  type,
}: {
  type: "temperature" | "co2" | "humidity";
}) => {
  const { width } = useWindowSize();
  const metrics = SENSOR_DATA[type].slice(0, width < 768 ? 7 : 14);
  const maxMetric = Math.max(...metrics.map((metric: { value: any; }) => metric.value));
  const metricToHeight = scaleLinear().domain([0, maxMetric]).range([0, 150]);
  const color =
    type === "temperature"
      ? "red"
      : type === "co2"
      ? "purple"
      : "blue";

  return (
    <div className="md:max-w-[452px] max-w-[calc(100dvw-80px)] w-full pb-6 flex flex-col gap-4">
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-zinc-500 text-sm">Average {type.toUpperCase()}</div>
        <div className="font-semibold">
          {`${(
            metrics.reduce((acc, metric) => acc + metric.value, 0) /
            metrics.length
          ).toFixed(1)} ${
            type === "temperature" ? "°C" : type === "co2" ? "ppm" : "%"
          }`}
        </div>
      </motion.div>

      <div className="flex flex-row gap-6 justify-between">
        <motion.div
          className="mt-auto flex flex-col justify-between h-full py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[100, 75, 50, 25, 0].map((label) => (
            <div key={label} className="text-xs text-zinc-300 mb-3">
              {label}
            </div>
          ))}
        </motion.div>

        <div className="flex flex-row justify-between w-full">
          {metrics.map((metric, index) => (
            <div
              key={metric.day}
              className="text-sm h-[150px] flex flex-col items-center gap-1 relative"
            >
              <motion.div
                key={`metric-${metric.day}`}
                className={`w-2 bg-${color}-500 rounded-md mt-auto`}
                initial={{ height: 0 }}
                animate={{ height: metricToHeight(metric.value) }}
                transition={{ delay: index * 0.05 }}
              />
              <motion.div
                className="text-xs text-zinc-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {metric.day}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className="flex flex-col gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-row gap-2 items-center">
            <div className={`size-3 bg-${color}-500 rounded-sm`} />
            <div className="text-xs text-zinc-500">Value</div>
          </div>
        </motion.div>
      </div>

      {/* Preload Colors */}
      <div className="hidden bg-red-500" />
      <div className="hidden bg-purple-500" />
      <div className="hidden bg-blue-500" />
    </div>
  );
};
