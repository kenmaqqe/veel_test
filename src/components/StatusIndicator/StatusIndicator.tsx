import React from "react";
import { StatusIndicatorProps } from "@/types";

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  completed,
  onToggle,
}) => {
  return (
    <span
      className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200"
      onClick={onToggle}
    >
      <p className="text-sm sm:text-base text-gray-600 font-medium">
        {completed ? "Completed" : "In Progress"}
      </p>
      <div
        className={`${
          completed ? "bg-green-500" : "bg-yellow-500"
        } w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
          completed ? "scale-110" : "scale-100"
        }`}
      ></div>
    </span>
  );
};

export default StatusIndicator;
