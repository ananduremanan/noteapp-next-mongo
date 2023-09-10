import React from "react";
import { MdDelete } from "react-icons/md";

export default function RemoveBtn() {
  return <button className="text-red-500">{<MdDelete size={20} />}</button>;
}
