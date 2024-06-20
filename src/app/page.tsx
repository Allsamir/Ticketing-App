import TicketCard from "@/components/TicketCard";
import Ticket from "@/interface/TicketInterface";

const getAllTheTickets = async () => {
  try {
    const res = await fetch(`http:localhost:3000/api/tickets`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const { tickets } = await getAllTheTickets();
  return (
    <main>
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {tickets?.map((ticket: Ticket, index: number) => (
          <TicketCard ticket={ticket} key={index} />
        ))}
      </div>
    </main>
  );
}
