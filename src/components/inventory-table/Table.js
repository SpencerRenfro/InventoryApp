//components
import TableHead from "./TableHead";




function Table({ inventoryItems, categoryFilter }) {
  return (
    <div>
      <table className="table min-w-full text-black">
        <TableHead />
        <tbody>
          {inventoryItems.map((item) =>
            categoryFilter === "" || item.category === categoryFilter ? (
              <tr
                className="grid  grid-cols-12 col-span-12 items-center py-8"
                key={item.id}
              >
                <td className="col-span-2">
                  <p className="font-medium">{item.name}</p>
                </td>
                <td className="col-span-2">
                  <p className="font-medium">{item.description}</p>
                </td>
                <td className="col-span-2 ">
                  <p className="font-medium">{item.category}</p>
                </td>
                <td className="col-span-2 ">
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
                <td className="py-2 col-span-2">
                  <p className="font-medium">{item.price}</p>
                </td>
                <td className="py-2 col-span-2">
                  <p className="font-medium">{item.barcode}</p>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>


    </div>
  );
}

export default Table;
