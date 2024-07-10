

function TableHead() {
    return (
      <thead>
      <tr className="grid grid-cols-12 col-span-12 text-black items-center">
        <th
          scope="col"
          className="text-left font-semibold col-span-3 border-r-2 ml-2"
        >
          Name
        </th>
        <th
          scope="col"
          className="text-left font-semibold col-span-3 border-r-2 ml-5"
        >
          ID
        </th>
        <th
          scope="col"
          className="text-left font-semibold col-span-3 border-r-2 ml-5"
        >
          Action
        </th>
        <th
          scope="col"
          className="text-left font-semibold col-span-3 border-r-2 ml-5"
        >
          Action Date
        </th>
      </tr>
    </thead>
    )
  }

  export default TableHead