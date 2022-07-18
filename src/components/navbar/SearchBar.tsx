import React, { useRef } from "react";
// Components
import SearchButton from "./SearchButton";
// Icons
import { SearchIcon } from "../../utilities/Icons";
// Types
import { PostType } from "../../types/Types";

interface Props {
  data: PostType[];
  setOpenTab: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ data, setOpenTab }: Props) => {
  const locationRef = useRef<null | HTMLInputElement>(null);
  const guestsRef = useRef<null | HTMLInputElement>(null);
  return (
    <div className="w-full flex flex-col md:flex-row shadow-[0_1px_6px_rgba(0,0,0,0.1)] rounded-[16px] overflow-hidden">
      {/* location input */}
      <div
        onClick={() => locationRef.current?.focus()}
        className="py-2 md:py-1 px-6 rounded-[16px] border-2 border-white focus-within:border-gray md:grow"
      >
        <h5 className="uppercase text-[9px] font-[800] ">location</h5>
        <input
          onFocus={() => setOpenTab("location")}
          ref={locationRef}
          className="outline-none font-[400] text-[14px] "
          type="text"
          defaultValue={`${data[0].city}, ${data[0].country}`}
        />
      </div>
      {/* divider */}
      <div className="border-l-2 border-[#F2F2F2]"></div>
      {/* guests input */}
      <div
        onClick={() => guestsRef.current?.focus()}
        className="py-2 md:py-1 px-6 rounded-[16px] border-2 border-white focus-within:border-gray md:grow"
      >
        <h5 className="uppercase text-[9px] font-[800] ">guests</h5>
        <input
          ref={guestsRef}
          onFocus={() => setOpenTab("guests")}
          className="outline-none font-[400] text-[14px] "
          type="text"
          placeholder="Add guests"
        />
      </div>
      {/* divider */}
      <div className="border border-[#F2F2F2] hidden md:block"></div>

      {/* on desktop submit button */}
      <div className="hidden md:flex grow justify-center">
        <SearchButton />
      </div>
    </div>
  );
};

export default SearchBar;
