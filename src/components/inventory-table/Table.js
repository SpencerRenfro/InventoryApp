//components
import TableHead from "./TableHead";

//icons
import next from "../../assets/icons/next.svg";
import back from "../../assets/icons/back.svg";

function Table({ inventoryItems, categoryFilter }) {
  return (
    <div>
      <table className="min-w-full  text-black ml-4">
        <TableHead />
        <tbody>
        {console.log('INVENTORY ITEMS:', inventoryItems)}
          {inventoryItems.map((item) =>
            categoryFilter === "" || item.category === categoryFilter ? (
              <tr
                className="grid  grid-cols-12 col-span-12 items-center"
                key={item.id}
              >
                <td className="py-2 col-span-2">
                  <p className="font-medium">{item.name}</p>
                </td>
                <td className="py-2 col-span-2 ml-2">
                  <p className="font-medium">{item.description}</p>
                </td>
                <td className="py-2 col-span-2 ml-2">
                  <p className="font-medium">{item.category}</p>
                </td>
                <td className="py-2 col-span-2 ml-2">
                {item.status === "IN" ? (
                  <span className="box-border w-10  rounded-full px-3  py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    IN
                  </span>
                ) : (
                  <span className="box-border w-10 rounded-full px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                    OUT
                  </span>
                )}
                </td>
                <td className="py-2 col-span-2 ml-2">
                  <p className="font-medium">{item.price}</p>
                </td>
                <td className="py-2 col-span-2 ml-2">
                  <p className="font-medium">{item.id}</p>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
      <div className="w-full flex justify-end items-center py-6 h-max gap-5">
        <div className="flex gap-5 h-max ">
          <p>Rows per page: 10</p>
          <p>1-5 of 13</p>
        </div>
        <div className="flex gap-10 h-max">
          <img src={back} width={20} alt="back button" />
          <img src={next} width={20} alt="next button" className="" />
        </div>
      </div>
    </div>
  );
}

export default Table;
