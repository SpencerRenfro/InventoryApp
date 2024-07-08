import { Link } from "react-router-dom";

//components
import ClipboardButton from "../ui/icons/ClipboardButton";

// Icons
import artIcon from "../assets/icons/art_supply.svg";
import transportIcon from "../assets/icons/transport.svg";
import electronicIcon from "../assets/icons/bolt.svg";
import educationIcon from "../assets/icons/education.svg";
import toolIcon from "../assets/icons/power_tool.svg";
import rawIcon from "../assets/icons/raw_material.svg";
import otherIcon from "../assets/icons/other.svg";

function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div>
          <div key={item.id} className="grid grid-cols-12 col-span-12 gap-10">
            <div className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0 col-span-2">
              <div className="flex flex-grow-1 items-center">
                <div className="ml-4">
                  <div className="font-medium text-gray-900 dark:text-slate-300">
                    {item.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 col-span-2">
              <div className="text-gray-900 dark:text-slate-300">
                {item.description}
              </div>
            </div>
            <div className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 col-span-2">
              <div className="flex text-gray-900 dark:text-slate-300">
                <img
                  className="mr-5"
                  style={{ height: "20px" }}
                  src={
                    item.category === "Art_Supplies"
                      ? artIcon
                      : item.category === "Electronics"
                      ? electronicIcon
                      : item.category === "Education"
                      ? educationIcon
                      : item.category === "Tools"
                      ? toolIcon
                      : item.category === "Transport"
                      ? transportIcon
                      : item.category === "Raw_Materials"
                      ? rawIcon
                      : otherIcon
                  }
                  alt={`category_type:${item.category}`}
                />
                <p>{item.category}</p>
              </div>
            </div>
            <div className="whitespace-nowrap ml-5 px-3 py-5 text-sm text-gray-500 dark:text-slate-300 col-span-2 col-start-7">
              {item.status === "IN" ? (
                <span className="inline-flex items-center rounded-md bg-green-200 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  IN
                </span>
              ) : (
                <span className="inline-flex items-center rounded-md bg-red-200 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                  OUT
                </span>
              )}
            </div>
            <div className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 ml-8 col-start-9">
              <div className="text-gray-900 dark:text-slate-300">
                {item.price}
              </div>
            </div>
            <div className="whitespace-nowrap text-sm font-medium sm:pr-0 col-span-12 xl:col-span-3">
              <div className="flex flex-col items-center py-2">
                <div>
                  {item.barcode && (
                    <div className="flex ">
                      <a
                        href={`https://barcode.tec-it.com/barcode.ashx?data=${item.barcode}&code=Code128&dpi=96`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <img
                          src={`https://barcode.tec-it.com/barcode.ashx?data=${item.barcode}&code=Code128&dpi=96`}
                          alt="Barcode"
                          className="w-full max-h-20"
                        />
                      </a>
                    </div>
                  )}
                  <div className="flex mt-3 gap-3">
                    <div className="grid content-center btn hover:bg-blue-700">
                      <Link
                        target="_blank"
                        to={`/inventory/${item.id}`}
                        className=" dark:text-slate-300 mx-10"
                      >
                        <h2 className="">View More Details</h2>
                      </Link>
                    </div>
                    <div>
                      <ClipboardButton barcode={item.barcode} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
