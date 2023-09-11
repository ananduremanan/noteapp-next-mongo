import connectMongoDB from "@/app/libs/mongodb"
import Note from "@/app/models/note";
import { NextResponse } from "next/server";

export async function POST(request:any) {
    const {title, description} = await request.json()
    await connectMongoDB();

    await Note.create({title, description});
    return NextResponse.json({message: "Note Created"}, {status: 201})
}