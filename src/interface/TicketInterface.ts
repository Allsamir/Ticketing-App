interface Ticket {
  title: string;
  description: string;
  priority?: number;
  status?: string;
  active?: boolean;
  category?: string;
  progress?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default Ticket;
