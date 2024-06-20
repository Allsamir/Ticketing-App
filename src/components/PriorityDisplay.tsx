import React from "react";
import { FaFire } from "react-icons/fa";

type Props = {};

const PriorityDisplay = ({ priority }: { priority: number }) => {
  return (
    <div className="flex gap-2">
      <FaFire
        className={`${priority > 0 ? "text-red-500" : "text-slate-400"}`}
      />
      <FaFire
        className={`${priority > 1 ? "text-red-500" : "text-slate-400"}`}
      />
      <FaFire
        className={`${priority > 2 ? "text-red-500" : "text-slate-400"}`}
      />
      <FaFire
        className={`${priority > 3 ? "text-red-500" : "text-slate-400"}`}
      />
      <FaFire
        className={`${priority > 4 ? "text-red-500" : "text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
