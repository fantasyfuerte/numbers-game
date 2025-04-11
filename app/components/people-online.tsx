import { IoPersonOutline } from "react-icons/io5";

function PeopleOnline() {
  return (
    <div className="border-primary border-2 px-4 py-2 rounded-lg flex gap-2 text-primary items-center justify-around">
      <IoPersonOutline size={20} />
      <span className="font-semibold">0</span>
    </div>
  );
}

export default PeopleOnline;
