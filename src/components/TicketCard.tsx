import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDispaly from "./ProgressDispaly";
import StausDisplay from "./StausDisplay";
import moment from "moment";
import Link from "next/link";
import Ticket from "@/interface/TicketInterface";

const TicketCard = ({ ticket }: { ticket: Ticket }) => {
  return (
    <div
      className="flex flex-col bg-card hover:translate-y-4 rounded-md shadow-xl p-4 m-2"
      style={{ transition: ".5s" }}
    >
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock _id={ticket._id} />
        </div>
      </div>
      <Link href={`/ticket-page/${ticket._id}`} style={{ display: "contents" }}>
        <h4 className="text-white">{ticket.title}</h4>
        <p className="whitespace-pre-wrap mt-2">{ticket.description}</p>
        <div className="flex-grow">
          <div className="mt-2">
            <p>
              {moment(ticket.createdAt).format("MMMM Do YYYY")}{" "}
              {moment(ticket.createdAt).format("LT")}
            </p>
          </div>
          <div className="mt-2 flex items-center">
            <ProgressDispaly progress={ticket.progress} />
            <div>
              <StausDisplay status={ticket.status} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
