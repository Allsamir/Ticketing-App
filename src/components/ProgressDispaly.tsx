import React from "react";

type Props = {};

const ProgressDispaly = ({ progress }: { progress?: number }) => {
  return (
    <div className="flex-1 mr-12 bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDispaly;
