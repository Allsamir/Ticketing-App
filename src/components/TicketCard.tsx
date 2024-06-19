import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDispaly from "./ProgressDispaly";

type Props = {};

const TicketCard = (props: Props) => {
  return (
    <div>
      <PriorityDisplay />
      <DeleteBlock />
      <ProgressDispaly />
    </div>
  );
};

export default TicketCard;
