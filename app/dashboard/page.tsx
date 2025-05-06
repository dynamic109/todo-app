import Image from "next/image";
import React from "react";
import Tasks from "../components/task";

const page = () => {
  return (
    <div>
      <div className="bg-[#50C2C9] w-full h-[300px] flex flex-col justify-end items-center">
        <div className="flex flex-col items-center justify-center mb-3 gap-3">
          <Image
            src={"/Ellipse 3.svg"}
            alt="user icon"
            width={100}
            height={100}
          />
          <h2 className="text-lg text-white font-bold">
            Welcome Jeegar goyani
          </h2>
        </div>
      </div>
      <div className="py-4 px-4">
        <p className="text-end font-semibold text-sm">Good Afternoon</p>
        <div className="flex flex-col items-center justify-center mt-2 mb-6">
          <Image src={"/clock.svg"} alt="a clock" width={120} height={120} />
        </div>
        <p className="text-sm  font-semibold">Task list</p>
        <Tasks />
      </div>
    </div>
  );
};

export default page;
