"use client";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id, isDeleted }: any) {
  const router = useRouter();
  const removeNote = async () => {
    const confirmed = confirm("Are You sure?");
    if (confirmed) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/notes?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        isDeleted(true);
      }
    }
  };

  return (
    <button className="text-red-500" onClick={removeNote}>
      {<MdDelete size={20} />}
    </button>
  );
}
