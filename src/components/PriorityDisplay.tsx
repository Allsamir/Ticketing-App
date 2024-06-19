import React from "react";
import { FaFire } from "react-icons/fa";

type Props = {};

const PriorityDisplay = (props: Props) => {
  return (
    <div className="flex gap-2">
      <FaFire className="text-red-500" />
      <FaFire className="text-red-500" />
      <FaFire className="text-red-500" />
      <FaFire className="text-red-500" />
      <FaFire className="text-red-500" />
    </div>
  );
};

export default PriorityDisplay;
