export default function TableHead() {
  return (
    <thead>
      <tr className="grid grid-cols-12 col-span-12 text-black items-center text-lg border-b-2 border-slate-200">
        <th className="font-semibold col-span-3">Name</th>
        <th className="font-semibold col-span-3">ID</th>
        <th className="font-semibold col-span-3">Action</th>
        <th className="font-semibold col-span-3">Action Date</th>
      </tr>
    </thead>
  );
}

