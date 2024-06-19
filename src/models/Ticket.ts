import mongoose from "mongoose";

mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URI ?? "");
mongoose.Promise = global.Promise;

const ticketSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    priority: Number,
    status: String,
    active: Boolean,
    category: String,
    progress: Number,
  },
  {
    timestamps: true,
  },
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
