

function TableHead() {
  return (
    <thead>
    <tr className="grid grid-cols-12 col-span-12 text-black items-center">
      <th
        scope="col"
        className="text-left font-semibold col-span-2 border-r-2 ml-2"
      >
        Name
      </th>
      <th
        scope="col"
        className="text-left font-semibold col-span-2 border-r-2 ml-5"
      >
        Description
      </th>
      <th
        scope="col"
        className="text-left font-semibold col-span-2 border-r-2 ml-5"
      >
        Category
      </th>
      <th
        scope="col"
        className="text-left font-semibold col-span-2 border-r-2 ml-5"
      >
        Status
      </th>
      <th
        scope="col"
        className="text-left font-semibold col-span-2 border-r-2 ml-5"
      >
        Value
      </th>
      <th
        scope="col"
        className="text-left font-semibold col-span-2 border-r-2 ml-5"
      >
        ID
      </th>
    </tr>
  </thead>
  )
}

export default TableHead