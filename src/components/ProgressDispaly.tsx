import React from "react";

type Props = {};

const ProgressDispaly = (props: Props) => {
  return (
    <div className="w-full mr-12 bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${75}%` }}
      ></div>
    </div>
  );
};

export default ProgressDispaly;
