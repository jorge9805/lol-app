import React, { useContext } from "react";
import { SearchContext } from "../../LolApp";
const SearchBar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div class="pt-1 relative mx-auto text-gray-300">
      <input
        class="bg-gray-600 h-7 px-2 pr-5 pl-7 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <button type="submit" class="absolute left-1 top-2   ">
        <svg
          class="w-5 h-5 text-gray-400"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
