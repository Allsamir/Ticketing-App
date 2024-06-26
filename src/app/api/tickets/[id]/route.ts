import Ticket from "@/models/Ticket";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete({ _id: id });
    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error has happend" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.findByIdAndUpdate(
      { _id: id },
      {
        ...ticketData,
      },
    );
    return NextResponse.json(
      { message: "Ticket has been updated" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "Error has happend" }, { status: 500 });
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    const ticket = await Ticket.findById({ _id: id });
    return NextResponse.json({ ticket }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error has happend" }, { status: 500 });
  }
}
