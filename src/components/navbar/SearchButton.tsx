import React from "react";
// Icons
import { SearchIcon } from "../../utilities/Icons";

const SearchButton = () => {
  return (
    <button
      className="self flex items-center px-6 py-3 rounded-[16px] bg-red text-[#F2F2F2] text-sm font-bold"
      type="submit"
    >
      <div className="w-6 ">
        <SearchIcon stroke="#F2F2F2" />
      </div>
      <p className="pl-2">Search</p>
    </button>
  );
};

export default SearchButton;
