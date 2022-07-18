import React from "react";
// Icons
import { StarRate } from "../../utilities/Icons";
// Types
import { PostType } from "../../types/Types";

interface Props {
  item: PostType;
}

const Post = ({ item }: Props) => {
  return (
    <div
      onClick={() => console.log("click")}
      className="m-2 cursor-pointer min-w-[350px] md:min-w-[395px] md:max-w-[600px] grow basis-0"
    >
      {/* image */}
      <div
        style={{ backgroundImage: `url("${item.photo}")` }}
        className="after:content-[''] after:block after:mt-[75%] rounded-3xl overflow-hidden my-2 bg-cover w-full "
      ></div>
      {/* desc */}
      <div className="flex items-center justify-between">
        <div className="flex justify-center items-center">
          {/* super host badge */}
          <div className="w-fit border border-gray rounded-xl px-2 py-1">
            <p className="text-[10px] md:text-xs font-bold text-gray uppercase">
              Super host
            </p>
          </div>
          <p className="text-secondary text-xs md:text-sm font-medium tracking-wide mx-2">
            {`${item.type} . ${item.beds} beds`}{" "}
          </p>
        </div>
        {/* rating */}
        <div className="flex items-center">
          <div className="w-4 md:w-[1.5rem] ">
            <StarRate fill="#EB5757" />
          </div>
          <p className="font-medium text-xs md:text-sm">{item.rating} </p>
        </div>
      </div>
      {/* title */}
      <h1 className="text-base font-semibold pt-2">{item.title}</h1>
    </div>
  );
};

export default Post;
