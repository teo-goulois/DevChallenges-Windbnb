import React, { useState } from "react";
// Component
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";
import Sugestions from "./Sugestions";
// Icons
import { CloseIcon } from "../../utilities/Icons";
import { SearchIcon } from "../../utilities/Icons";
import { LocationIcon } from "../../utilities/Icons";
// Types
import { PostType } from "../../types/Types";

interface Props {
  data: PostType[];
  setSearchIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal = ({ data, setSearchIsOpen }: Props) => {
  const [openTab, setOpenTab] = useState<string>("location");
  const [adultsNumber, setAdultsNumber] = useState<number>(0);
  const [childrenNumber, setChildrenNumber] = useState<number>(0);

  return (
    <div className="fixed left-0 top-0 z-10 bg-neutral-600/40 h-screen w-screen">
      {/* content */}
      <div className="bg-white p-4 h-5/6 md:h-[50%] flex flex-col">
        {/* navbar */}
        <div className="flex items-center justify-between">
          <h4 className="text-primary font-bold">Edit your search</h4>
          <button
            onClick={() => setSearchIsOpen(false)}
            className="w-[24px] "
            type="button"
            aria-label="close"
          >
            <CloseIcon />
          </button>
        </div>
        {/* search part */}
        <form className="flex flex-col items-between items-center mt-4 h-full">
          {/* search bar */}
          <SearchBar setOpenTab={setOpenTab} data={data} />

          {/* sugestions */}
          <Sugestions
            data={data}
            openTab={openTab}
            setOpenTab={setOpenTab}
            childrenNumber={childrenNumber}
            adultsNumber={adultsNumber}
            setAdultsNumber={setAdultsNumber}
            setChildrenNumber={setChildrenNumber}
          />

          {/* button */}
          <div className="md:hidden">
            <SearchButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
