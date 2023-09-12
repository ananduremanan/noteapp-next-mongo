import Link from "next/link";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import RemoveBtn from "./RemoveBtn";

const getNotes = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/notes", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch notes");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading notes", error);
  }
};

export default async function NoteList() {
  const { notes } = await getNotes();

  return (
    <>
      {notes.map((note: any) => (
        <div className="mt-2" key={note._id}>
          <div className="bg-gray-100 p-2 rounded-lg flex col-2 justify-between">
            <div>
              <h1 className="font-bold">{note.title}</h1>
              <p className="text-sm">{note.description}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Link href={`/editTopic/${note._id}`}>
                <AiFillEdit size={20} />
              </Link>
              <RemoveBtn />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
