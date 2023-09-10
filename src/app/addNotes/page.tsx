import Link from "next/link";

export default function AddNotes() {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <div className="text-gray-400">Add Notes</div>
        <Link href={"/"} className="bg-blue-400 p-1 rounded-lg text-white">
          Home
        </Link>
      </div>
      <hr className="mt-2" />
      <form action="" className="mt-4">
        <input
          placeholder="Enter a Title.."
          className="bg-gray-100 p-4 w-full rounded-xl"
        />
        <textarea
          placeholder="Enter your notes here.."
          className="bg-gray-100 p-4 w-full rounded-xl h-64 mt-2"
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
