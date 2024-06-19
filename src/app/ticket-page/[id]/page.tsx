import TicketForm from "@/components/TicketForm";
import React from "react";

const TicketPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div>TicketPage {params.id}</div>
      <TicketForm />
    </>
  );
};

export default TicketPage;
