"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddNotes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are required");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create note");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <div className="text-gray-400">Add Notes</div>
        <Link href={"/"} className="bg-blue-400 p-1 rounded-lg text-white">
          Home
        </Link>
      </div>
      <hr className="mt-2" />
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          placeholder="Enter a Title.."
          className="bg-gray-100 p-4 w-full rounded-xl"
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          placeholder="Enter your notes here.."
          className="bg-gray-100 p-4 w-full rounded-xl h-64 mt-2"
          onChange={(e: any) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <div className="flex gap-2 mt-2 justify-end">
          <button className="bg-blue-400 rounded-lg p-2 text-white hover:font-bold hover:bg-blue-500">
            Clear
          </button>
          <button
            className="bg-blue-400 rounded-lg p-2 text-white hover:font-bold hover:bg-blue-500"
            type="submit"
          >
            Save Note
          </button>
        </div>
      </form>
    </div>
  );
}
