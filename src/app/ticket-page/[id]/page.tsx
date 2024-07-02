import TicketForm from "@/components/TicketForm";
import Ticket from "@/interface/TicketInterface";
import React from "react";

interface TicketApiResponse {
  ticket: Ticket;
}

const defaultTicket: Ticket = {
  _id: "new",
  title: "",
  description: "",
  priority: 1,
  status: "not started",
  category: "any problem",
  progress: 0,
};

const getDataToUpdate = async (id: string): Promise<TicketApiResponse> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/tickets/${id}`,
      {
        cache: "no-store",
      },
    );
    return res.json();
  } catch (error) {
    throw new Error("Somethin is wrong look for ticket-page");
  }
};

const TicketPage = async ({ params }: { params: { id: string } }) => {
  const EDITMODE = params.id !== "new";
  let updateData: Ticket | undefined;
  if (EDITMODE) {
    const data = await getDataToUpdate(params.id);
    updateData = data.ticket;
  } else {
    updateData = defaultTicket;
  }
  return (
    <>
      <TicketForm updateTicketData={updateData} />
    </>
  );
};

export default TicketPage;
