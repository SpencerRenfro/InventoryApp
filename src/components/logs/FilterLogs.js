import next from "../../assets/icons/next.svg";

export default function FilterLogs({setFilter }) {

  return (
      <div className="flex items-center">
        <h2 className="font-bold text-xl text-black">Filter By</h2>
        <div className="dropdown dropdown-right">
          <div
            tabIndex={0}
            role="button"
            className="m-1"
          >
            <img src={next} alt="chevron" width={25} className="rotate-90" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white gap-2 "
          >
            <li onClick={() => setFilter("CREATED")} className="cursor-pointer">Created</li>
            <li onClick={() => setFilter("OUT")} className="cursor-pointer">Out</li>
            <li onClick={() => setFilter("IN")} className="cursor-pointer">In</li>
            <li onClick={() => setFilter("DELETED")} className="cursor-pointer">Deleted</li>
            <li onClick={() => setFilter("")} className="cursor-pointer">
              No Filter
            </li>
          </ul>
        </div>
      </div>
  );
}
