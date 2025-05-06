import Image from "next/image";
import React from "react";
import ReusableCheckbox from "./reusable-checkbox";

const TasksList = [
  "Learning Programming by 12PM",
  "Learn how to cook by 1PM",
  "Learn how to play at 2PM",
  "Have lunch at 4PM",
  "Going to travel 6PM",
];

const Tasks = () => {
  return (
    <div className="my-8 bg-white w-full rounded-[10px] shadow-lg flex flex-col justify-between px-4 py-6">
      <div className="flex items-center justify-between">
        <p className="text-[#626262] text-sm font-semibold">Daily Task</p>{" "}
        <Image src={"/plus.svg"} alt="plus icon" width={25} height={25} />
      </div>
      <div className="space-y-3 mt-12">
        {TasksList.map((task, index) => (
          <div key={index}>
            <ReusableCheckbox label={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
