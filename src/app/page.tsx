export const dynamic = "force-dynamic";
import Tickets from "@/components/Tickets";
import Ticket from "@/interface/TicketInterface";
const getAllTheTickets = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tickets`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const groupTicketByCategory = (tickets: Ticket[]) => {
  return tickets.reduce((acc: { [key: string]: Ticket[] }, ticket: Ticket) => {
    const category = ticket.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(ticket);
    return acc;
  }, {});
};

export default async function Home() {
  const tickets = await getAllTheTickets();
  const groupedTickets = groupTicketByCategory(tickets);
  console.log(groupedTickets);
  console.log(Object.entries(groupedTickets));
  return (
    <main>
      {Object.entries(groupedTickets).map(
        ([category, tickets], index: number) => (
          <>
            <h2 className="m-2 capitalize" key={index}>
              {category}
            </h2>
            <Tickets category={category} tickets={tickets} />
          </>
        ),
      )}
    </main>
  );
}
