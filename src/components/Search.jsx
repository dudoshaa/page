import React from "react";

function Search() {
  return (
    <label className="input w-3xl h-14 rounded-2xl ">
      <input
        type="search"
        required
        placeholder="Search on Shop"
        className="text-xl"
      />
    </label>
  );
}

export default Search;
