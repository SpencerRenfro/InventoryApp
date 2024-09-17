export default function TableHead() {
  return (
    <thead>
      <tr className="grid grid-cols-12 col-span-12 text-black items-center border-b-2 border-slate-200">
        <th className="text-left font-semibold col-span-2">Name</th>
        <th className="text-left font-semibold col-span-2">Description</th>
        <th className="font-semibold col-span-2">Category</th>
        <th className="font-semibold col-span-2">Status</th>
        <th className="font-semibold col-span-2">Value</th>
        <th className="font-semibold col-span-2">ID</th>
      </tr>
    </thead>
  );
}
