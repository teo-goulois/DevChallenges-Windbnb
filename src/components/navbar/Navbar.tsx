import React, { useState } from "react";
// Components
import SearchModal from "./SearchModal";
// Icons
import { SearchIcon } from "../../utilities/Icons";
// Types
import { PostType } from "../../types/Types";

interface Props {
  data: PostType[];
  setFilteredDatas: React.Dispatch<React.SetStateAction<PostType[]>>;
}

const Navbar = ({ data, setFilteredDatas }: Props) => {
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [formValues, setFormValues] = useState({
    input: "",
    location: {
      country: "Finland",
      city: "Helsinki",
    },
    guests: {
      adults: 0,
      children: 0,
    },
  });

  return (
    <div className="p-4 flex flex-col md:flex-row md:justify-between md:items-center md:px-12 px-4 font-['Mulish']">
      {searchIsOpen && (
        <SearchModal
          data={data}
          setSearchIsOpen={setSearchIsOpen}
          setFilteredDatas={setFilteredDatas}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )}
      {/* logo */}
      <img
        className="w-[5.625rem] h-[18.75px] cursor-pointer"
        src="./logo.png"
        alt="logo"
      />
      {/* research bar */}
      <div className="flex items-center justify-start rounded-[16px] m-4 overflow-hidden shadow-[0_1px_6px_rgba(0,0,0,0.1)] md:m-0">
        {/* city */}
        <input
          onFocus={() => setSearchIsOpen(true)}
          className="w-full grow px-2 py-4 h-full outline-none border-r-2 border-r-[#F2F2F2]"
          type="text"
          value={`${formValues.location.city}, ${formValues.location.country}`}
        />
        {/* guess */}
        <input
          onFocus={() => setSearchIsOpen(true)}
          className="w-full grow p-2 py-4 h-full outline-none border-r-2 border-r-[#F2F2F2] text-ligth"
          type="text"
          placeholder="Add guests"
          value={
            formValues.guests.adults + formValues.guests.children !== 0
              ? `${formValues.guests.adults + formValues.guests.children}`
              : ""
          }
        />
        {/* submit button */}
        <button
          onClick={() => setSearchIsOpen(true)}
          className="mx-2 md:mx-4 w-[50px] h-[17.06px] "
          type="button"
          aria-label="search button"
        >
          <SearchIcon stroke="#EB5757" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
