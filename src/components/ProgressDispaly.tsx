import React from "react";

type Props = {};

const ProgressDispaly = ({ progress }: { progress?: number }) => {
  return (
    <div className="flex-1 mr-12 rounded-full h-2.5">
      <div className="w-full rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${progress}%` }}
        >
          {" "}
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressDispaly;
