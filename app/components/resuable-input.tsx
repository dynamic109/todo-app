import React from "react";

const ReusableInput = ({
  placeholder,
  type,
}: {
  placeholder: string;
  type: string;
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        className="bg-white w-full py-3.5 pl-5.5 rounded-full text-black text-sm"
      />
    </>
  );
};

export default ReusableInput;
