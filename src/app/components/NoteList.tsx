import Link from "next/link";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import RemoveBtn from "./RemoveBtn";

export default function NoteList() {
  return (
    <div className="mt-2">
      <div className="bg-gray-200 p-2 rounded-lg flex col-2 justify-between">
        <div>
          <h1 className="font-bold">Note Title</h1>
          <p className="text-sm">Note Description</p>
        </div>
        <div className="flex gap-2 items-center">
          <Link href={"/editTopic/123"}>
            <AiFillEdit size={20} />
          </Link>
          <RemoveBtn />
        </div>
      </div>
    </div>
  );
}
