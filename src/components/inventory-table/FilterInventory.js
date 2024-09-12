export default function FilterInventory({ filter, setFilter, categories }) {
  // Handle change event for the select element
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="col-span-2 flex items-center">
      <select
        className="select w-full max-w-xs text-xl"
        onChange={handleChange} // Use onChange event handler
        value={filter} // Set the value to the current filter
      >
        <option value="" disabled> {/* Empty value for the placeholder option */}
          Filter By
        </option>
        {categories && categories.length > 0 ? (
          categories.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))
        ) : (
          <option value="">No categories available</option> // Use option instead of li
        )}
        <option value="IN">Items In</option>
        <option value="OUT">Items Out</option>
        <option value="">No Filter</option>
      </select>
    </div>
  );
}


