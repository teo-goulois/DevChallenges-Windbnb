import React, { useEffect, useState } from "react";
// Component
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";
import Sugestions from "./Sugestions";
// Icons
import { CloseIcon } from "../../utilities/Icons";
// Types
import { PostType, formValuesType } from "../../types/Types";

interface Props {
  data: PostType[];
  setSearchIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredDatas: React.Dispatch<React.SetStateAction<PostType[]>>;
  formValues: formValuesType;
  setFormValues: React.Dispatch<React.SetStateAction<formValuesType>>;
}

const SearchModal = ({
  data,
  setSearchIsOpen,
  setFilteredDatas,
  formValues,
  setFormValues,
}: Props) => {
  const [openTab, setOpenTab] = useState<string>("location");
  const [copyFormValues, setCopyFormValues] =
    useState<formValuesType>(formValues);

  useEffect(() => {
    setCopyFormValues(formValues);
  }, [formValues]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormValues(copyFormValues);
    const newDataGuests = data.filter(
      (item) =>
        item.maxGuests > formValues.guests.adults + formValues.guests.children
    );
    const newDataCountry = newDataGuests.filter(
      (item) => item.country === copyFormValues.location.country
    );
    const newDataCity = newDataCountry.filter(
      (item) => item.city === copyFormValues.location.city
    );
    setFilteredDatas(newDataCity);
    setSearchIsOpen(false);
  };

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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-between items-center mt-4 h-full"
        >
          {/* search bar */}
          <SearchBar
            openTab={openTab}
            setOpenTab={setOpenTab}
            formValues={copyFormValues}
            setFormValues={setCopyFormValues}
          />

          {/* sugestions */}
          <Sugestions
            data={data}
            openTab={openTab}
            setOpenTab={setOpenTab}
            formValues={copyFormValues}
            setFormValues={setCopyFormValues}
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
