import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDispaly from "./ProgressDispaly";
import StausDisplay from "./StausDisplay";

type Props = {};

const TicketCard = (props: Props) => {
  return (
    <div
      className="flex flex-col bg-card hover:translate-y-4 rounded-md shadow-xl p-4 m-2"
      style={{ transition: ".5s" }}
    >
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <p className="whitespace-pre-wrap mt-2">
        This is the description of the ticket
      </p>
      <div className="flex-grow"></div>
      <div className="mt-2">
        <p>5/12/2024 10.23AM</p>
      </div>
      <div className="mt-2 flex items-center">
        <ProgressDispaly />
        <div>
          <StausDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
