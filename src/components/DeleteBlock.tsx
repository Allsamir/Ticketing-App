"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { TiDelete } from "react-icons/ti";

type Props = {
  _id: string;
};

const DeleteBlock = (props: Props) => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await axios.delete(
      `http://localhost:3000/api/tickets/${props._id}`,
    );
    if (res.statusText === "OK") {
      router.refresh();
    }
  };
  return (
    <div>
      <TiDelete
        className="text-red-600 hover:text-red-400 text-3xl cursor-pointer"
        onClick={deleteTicket}
      />
    </div>
  );
};

export default DeleteBlock;
