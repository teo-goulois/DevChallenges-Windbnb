import React from "react";
// Components
import AddGuests from "./AddGuests";
import SearchButton from "./SearchButton";

// Icons
import { CloseIcon } from "../../utilities/Icons";
import { SearchIcon } from "../../utilities/Icons";
import { LocationIcon } from "../../utilities/Icons";
// Types
import { PostType } from "../../types/Types";

interface Props {
  data: PostType[];
  setOpenTab: React.Dispatch<React.SetStateAction<string>>;
  openTab: string;
  childrenNumber: number;
  adultsNumber: number;
  setAdultsNumber: React.Dispatch<React.SetStateAction<number>>;
  setChildrenNumber: React.Dispatch<React.SetStateAction<number>>;
}

const Sugestions = ({
  openTab,
  data,
  childrenNumber,
  setChildrenNumber,
  adultsNumber,
  setAdultsNumber,
}: Props) => {
  return (
    <div className="w-full flex grow-[2] ">
      {/* location tab */}
      <div
        className={`w-full md:w-[37%] md:block ${
          openTab === "guests" && "hidden"
        } `}
      >
        {
          /* openTab === "location" && */
          data.map((item, index) => {
            if (index > 3) return;
            return (
              <div
                className={`cursor-pointer flex justify-start items-center text-gray font-normal p-4 m-2 border-2 border-white hover:border-ligth ${
                  openTab === "guests" && "hidden"
                }`}
              >
                <div className="h-[25px] pr-2 ">
                  <LocationIcon fill="#4F4F4F" />
                </div>
                {`${item.city}, ${item.country}`}
              </div>
            );
          })
        }
      </div>

      {/* guests tab */}
      {
        <div
          className={`w-full md:w-[37%] flex flex-col items-center md:items-start p-2 ${
            openTab === "location" && "hidden"
          }`}
        >
          {/* adults */}
          <AddGuests
            addedGuests={adultsNumber}
            setAddedGuests={setAdultsNumber}
          />
          {/* children */}
          <AddGuests
            addedGuests={childrenNumber}
            setAddedGuests={setChildrenNumber}
          />
        </div>
      }
    </div>
  );
};

export default Sugestions;
