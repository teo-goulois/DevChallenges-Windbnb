import React, { useRef, useState } from "react";
// Components
import SearchButton from "./SearchButton";
// Types
import { formValuesType } from "../../types/Types";

interface Props {
  openTab: string;
  setOpenTab: React.Dispatch<React.SetStateAction<string>>;
  formValues: formValuesType;
  setFormValues: React.Dispatch<React.SetStateAction<formValuesType>>;
}

const SearchBar = ({
  openTab,
  setOpenTab,
  formValues,
  setFormValues,
}: Props) => {
  const locationRef = useRef<null | HTMLInputElement>(null);
  const [activeInput, setActiveInput] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row shadow-[0_1px_6px_rgba(0,0,0,0.1)] rounded-[16px] overflow-hidden">
      {/* location input */}
      <div
        onClick={() => locationRef.current?.focus()}
        className="py-2 md:py-1 px-6 rounded-[16px] border-2 border-white focus-within:border-gray md:grow"
      >
        <h5 className="uppercase text-[9px] font-[800] ">location</h5>
        <input
          onChange={(e) => {
            setFormValues((prev) => ({
              ...prev,
              input: e.target.value,
            }));
          }}
          onFocus={() => {
            setActiveInput(true);
            setOpenTab("location");
          }}
          onBlur={() => setActiveInput(false)}
          ref={locationRef}
          className="outline-none font-[400] text-[14px] "
          type="text"
          defaultValue={`${formValues.location.city}, ${formValues.location.country}`}
          value={`${
            activeInput
              ? formValues.input
              : `${formValues.location.city}, ${formValues.location.country}`
          }`}
        />
      </div>
      {/* divider */}
      <div className="border-l-2 border-[#F2F2F2]"></div>
      {/* guests input */}
      <div
        onClick={() => setOpenTab("guests")}
        className={`py-2 md:py-1 px-6 rounded-[16px] border-2  ${
          openTab === "guests" ? "border-gray" : "border-white"
        } cursor-pointer md:grow`}
      >
        <h5 className="uppercase text-[9px] font-[800] ">guests</h5>

        {formValues.guests.adults + formValues.guests.children === 0 ? (
          <p className="text-ligth font-[400] text-[14px] ">Add guests</p>
        ) : (
          <p className="font-[400] text-[14px]">
            {formValues.guests.adults + formValues.guests.children}{" "}
          </p>
        )}
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
