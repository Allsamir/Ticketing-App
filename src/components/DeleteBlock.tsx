import React from "react";
import { TiDelete } from "react-icons/ti";

type Props = {};

const DeleteBlock = (props: Props) => {
  return (
    <div>
      <TiDelete className="text-red-600 hover:text-red-400 text-3xl cursor-pointer" />
    </div>
  );
};

export default DeleteBlock;
