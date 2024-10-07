import { useEffect } from "react";
import next from "../../assets/icons/next.svg";

export default function FilterInventory({ filter, setFilter, categories }) {

  useEffect(() => {
    console.log('filter changed', filter);
  }, [filter]);

  return (
    <div>
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
            {categories && categories.length > 0 ? (
              categories.map((item) => (
                <li key={item.id} onClick={() => setFilter(item.name)} className="cursor-pointer">
                  {item.name}
                </li>
              ))

            ) : (
              <li>No categories available</li>
            )}
            <li onClick={() => setFilter("IN")} className="cursor-pointer">
              Items In
            </li>
            <li onClick={() => setFilter("OUT")} className="cursor-pointer">
              Items Out
            </li>
            <li onClick={() => setFilter("")} className="cursor-pointer">
              No Filter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
