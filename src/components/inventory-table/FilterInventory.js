import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import next from "../../assets/icons/next.svg";

export default function FilterInventory({ filter, setFilter }) {

  useEffect(() => {
    console.log('filter changed', filter);
  }, [filter]);




  useEffect(() => {
    console.log('categories loaded', categories);
  }, [categories]);

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
            { categories && categories.map((item) => {
              <li onClick={()=> setFilter(item)} className="cursor-pointer">{item}</li>
            }) }
            {/* <li onClick={() => setFilter("Art_Supplies")} className="cursor-pointer">Art Supplies</li>
            <li onClick={() => setFilter("Education")} className="cursor-pointer">Education</li>
            <li onClick={() => setFilter("Electronics")} className="cursor-pointer">Electronics</li>
            <li onClick={() => setFilter("Other")} className="cursor-pointer">Other</li>
            <li onClick={() => setFilter("Tools")} className="cursor-pointer">Tools</li>
            <li onClick={() => setFilter("Transport")} className="cursor-pointer">Transport</li>
            <li onClick={() => setFilter("")} className="cursor-pointer">No Filter</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
