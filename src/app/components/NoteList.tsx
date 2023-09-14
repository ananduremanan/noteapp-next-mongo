'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import RemoveBtn from "./RemoveBtn";

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await fetch(`${process.env.PORT}/api/notes`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch notes");
        }

        const data = await res.json();
        setNotes(data.notes);
      } catch (error) {
        console.log("Error loading notes", error);
      }
    }

    fetchNotes();
  }, []);

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
