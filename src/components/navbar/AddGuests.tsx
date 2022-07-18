import React from "react";

interface Props {
    addedGuests: number
    setAddedGuests: React.Dispatch<React.SetStateAction<number>>
}

const AddGuests = ({addedGuests, setAddedGuests} :Props) => {
  return (
    <div className="my-2 flex flex-col items-start">
      <h2 className="text-primary font-bold">Adults</h2>
      <p className="text-ligth text-sm font-normal">Ages 13 or above</p>
      <div className="flex py-2">
        <button
          type="button"
          onClick={() => {
            if (addedGuests === 0) return;
            setAddedGuests((prev) => prev - 1);
          }}
          className="border rounded w-6 h-6 flex justify-center items-end text-secondary mr-4"
        >
          -
        </button>
        {addedGuests}
        <button
          type="button"
          onClick={() => {
            setAddedGuests((prev) => prev + 1);
          }}
          className="border rounded w-6 h-6 flex justify-center items-end text-secondary ml-4"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AddGuests;
