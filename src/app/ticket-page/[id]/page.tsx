import TicketForm from "@/components/TicketForm";
import React from "react";

const TicketPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div></div>
      <TicketForm />
    </>
  );
};

export default TicketPage;
