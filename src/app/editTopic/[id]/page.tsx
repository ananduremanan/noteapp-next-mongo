"use client"
import React, { useState, useEffect } from "react";
import EditNoteForm from "@/app/components/EditNoteForm";

const getNoteById = async (id: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/notes/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching note");
    }

    console.log(res.json);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export default function EditTopic({ params }: any) {
  const { id } = params;
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      const data = await getNoteById(id);
      setNote(data.note);
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return <div>Loading...</div>;
  }

  const { title, description } = note;

  return <EditNoteForm id={id} title={title} description={description} />;
}
