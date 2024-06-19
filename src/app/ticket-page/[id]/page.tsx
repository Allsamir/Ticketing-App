import React from "react";

const TicketPage = ({ params }: { params: { id: string } }) => {
  return <div>TicketPage {params.id}</div>;
};

export default TicketPage;
