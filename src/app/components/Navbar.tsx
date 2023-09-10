import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 flex p-4 justify-between lg:px-12 sticky top-0 items-center">
      <Link className="text-white font-bold text-lg" href={"/"}>
        NoteBook
      </Link>
      <div>
        <Image
          src="/avatar.jpg"
          width={40}
          height={40}
          alt="avatar"
          className="rounded-full border"
        />
      </div>
    </nav>
  );
}
