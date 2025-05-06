import Link from "next/link";
import React from "react";

const ReusableButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <>
      <Link href={link} className="bg-[#50C2C9] rounded-[6px] w-full py-2.5 text-center text-[15px] font-semibold tracking-wide text-white">
        {text}
      </Link>
    </>
  );
};

export default ReusableButton;
