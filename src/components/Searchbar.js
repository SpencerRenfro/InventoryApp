import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/search/${term}`);
    navigate(`/search?q=${term}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          required
        />
      </form>
    </div>
  );
}
