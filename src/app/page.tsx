import Link from "next/link";
import NoteList from "./components/NoteList";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between mt-4">
        <div className="text-gray-400">Your Notes</div>
        <Link
          href={"/addNotes"}
          className="bg-blue-400 p-1 rounded-lg text-white"
        >
          Add Notes
        </Link>
      </div>
      <hr className="mt-2" />
      <section>
        <NoteList />
      </section>
    </main>
  );
}
