"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditNoteForm({ id, title, description }: any) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/notes/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription }),
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <div className="text-gray-400">Edit Notes</div>
        <Link href={"/"} className="bg-blue-400 p-1 rounded-lg text-white">
          Home
        </Link>
      </div>
      <hr className="mt-2" />
      <form action="" className="mt-4" onSubmit={handleSubmit}>
        <input
          placeholder="Enter a Title.."
          className="bg-gray-100 p-4 w-full rounded-xl"
          onChange={(e: any) => setNewTitle(e.target.value)}
          value={newTitle}
        />
        <textarea
          placeholder="Enter your notes here.."
          className="bg-gray-100 p-4 w-full rounded-xl h-64 mt-2"
          onChange={(e: any) => setNewDescription(e.target.value)}
          value={newDescription}
        />
        <div className="flex gap-2 mt-2 justify-end">
          <button className="bg-blue-400 rounded-lg p-2 text-white hover:font-bold hover:bg-blue-500">
            Clear
          </button>
          <button
            className="bg-blue-400 rounded-lg p-2 text-white hover:font-bold hover:bg-blue-500"
            type="submit"
          >
            Update Note
          </button>
        </div>
      </form>
    </div>
  );
}
