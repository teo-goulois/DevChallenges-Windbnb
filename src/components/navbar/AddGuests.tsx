import React from "react";
import { formValuesType } from "../../types/Types";

interface Props {
  title: "adults" | "children";
  desc: string;
  formValues: formValuesType;
  setFormValues: React.Dispatch<React.SetStateAction<formValuesType>>;
}

const AddGuests = ({ title, desc, formValues, setFormValues }: Props) => {
  return (
    <div className="my-2 flex flex-col items-start">
      <h2 className="text-primary font-bold capitalize">{title}</h2>
      <p className="text-ligth text-sm font-normal">{desc}</p>
      <div className="flex py-2">
        <button
          type="button"
          onClick={() => {
            if (formValues.guests[title] === 0) return;
            if (title === "adults") {
              setFormValues((prev) => ({
                ...prev,
                guests: {
                  ...prev.guests,
                  adults: prev.guests[title] - 1,
                },
              }));
            } else {
              setFormValues((prev) => ({
                ...prev,
                guests: {
                  ...prev.guests,
                  children: prev.guests[title] - 1,
                },
              }));
            }
          }}
          className="border rounded w-6 h-6 flex justify-center items-end text-secondary mr-4"
        >
          -
        </button>
        {formValues.guests[title]}
        <button
          type="button"
          onClick={() => {
            if (title === "adults") {
              setFormValues((prev) => ({
                ...prev,
                guests: {
                  ...prev.guests,
                  adults: prev.guests[title] + 1,
                },
              }));
            } else {
              setFormValues((prev) => ({
                ...prev,
                guests: {
                  ...prev.guests,
                  children: prev.guests[title] + 1,
                },
              }));
            }
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
