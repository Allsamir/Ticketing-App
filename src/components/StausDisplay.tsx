import React from "react";

type Props = {
  status?: string;
};

const StausDisplay = (props: Props) => {
  const { status } = props;
  const getColor = (status?: string) => {
    let color = "bg-slate-400";
    switch (status?.toLowerCase()) {
      case "done":
        color = "bg-green-500";
        return color;
      case "not started":
        color = "bg-red-500";
        return color;
      case "started":
        color = "bg-yellow-500";
        return color;
      default:
        return color;
    }
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status,
      )}`}
    >
      {status}
    </span>
  );
};

export default StausDisplay;
