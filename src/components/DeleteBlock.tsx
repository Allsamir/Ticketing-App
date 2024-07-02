"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { Modal } from "antd";

type Props = {
  _id: string;
};

const DeleteBlock = (props: Props) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteTicket = async () => {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/tickets/${props._id}`,
    );
    if (res.statusText === "OK") {
      router.refresh();
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    deleteTicket();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <TiDelete
        className="text-red-600 hover:text-red-400 text-3xl cursor-pointer"
        onClick={showModal}
      />
      <Modal
        title="Delete Ticket"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        cancelText="Cancel"
        className="text-center"
        styles={{
          footer: {
            textAlign: "center",
          },
        }}
      >
        <p className="text-xl font-bold text-black my-8">Are You Sure ?</p>
      </Modal>
    </div>
  );
};

export default DeleteBlock;
