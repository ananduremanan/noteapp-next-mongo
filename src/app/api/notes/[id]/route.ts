import connectMongoDB from "@/app/libs/mongodb";
import Note from "@/app/models/note";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Note.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    { message: "Note updated successfully" },
    { status: 200 }
  );
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const note = await Note.findOne({ _id: id });
  return NextResponse.json({ note }, { status: 200 });
}
