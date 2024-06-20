import Link from "next/link";
import React from "react";
import { FaTicketAlt } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar sticky z-50 bg-base-100">
      <div className="flex-1">
        <Link href={`/`} className="text-2xl font-semibold">
          <span className="flex gap-2 items-center">
            {" "}
            Ticketing <FaTicketAlt />
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Link href={`/ticket-page/new`}>
            <button className="btn btn-custom">New Ticket</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
