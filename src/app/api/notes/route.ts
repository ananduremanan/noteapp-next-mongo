import connectMongoDB from "@/app/libs/mongodb";
import Note from "@/app/models/note";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { title, description } = await request.json();
  await connectMongoDB();

  await Note.create({ title, description });
  return NextResponse.json({ message: "Note Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const notes = await Note.find();
  return NextResponse.json({ notes });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Note.findByIdAndDelete(id);
  return NextResponse.json({ message: "Note Deleted" }, { status: 200 });
}
