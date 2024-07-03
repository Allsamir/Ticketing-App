"use client";
import React, { useEffect } from "react";
import TicketCard from "./TicketCard";
import Ticket from "@/interface/TicketInterface";
import { useRouter } from "next/navigation";

const Tickets = ({
  category,
  tickets,
}: {
  category: string;
  tickets: Ticket[];
}) => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);
  return (
    <div
      key={category}
      className="gap-6 my-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
    >
      {tickets.map((ticket: Ticket, index: number) => (
        <TicketCard ticket={ticket} key={index} />
      ))}
    </div>
  );
};

export default Tickets;
