import React, { useEffect, useState } from "react";
// Components
import AddGuests from "./AddGuests";

// Icons
import { LocationIcon } from "../../utilities/Icons";
// Types
import { formValuesType, PostType } from "../../types/Types";

interface Props {
  data: PostType[];
  setOpenTab: React.Dispatch<React.SetStateAction<string>>;
  openTab: string;
  formValues: formValuesType;
  setFormValues: React.Dispatch<React.SetStateAction<formValuesType>>;
}

const Sugestions = ({ openTab, data, formValues, setFormValues }: Props) => {
  const [datas, setDatas] = useState<PostType[]>(data);

  useEffect(() => {
    setDatas(data);
  }, [data]);

  useEffect(() => {
    if (formValues.input.length > 0) {
      const newDatas: PostType[] = [];
      data.map(
        (item) => item.city.startsWith(formValues.input) && newDatas.push(item)
      );
      setDatas(newDatas);
    }
  }, [formValues.input, data]);

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
          datas.map((item, index) => {
            if (index > 3) return undefined;
            return (
              <div
                onClick={() => {
                  setFormValues((prev) => ({
                    ...prev,
                    location: {
                      country: item.country,
                      city: item.city,
                    },
                  }));
                }}
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
          <div>
            {/* adults */}
            <AddGuests
              title={"adults"}
              desc={"Ages 13 or above"}
              formValues={formValues}
              setFormValues={setFormValues}
            />
            {/* children */}
            <AddGuests
              title={"children"}
              desc={"Ages 2-12"}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default Sugestions;
