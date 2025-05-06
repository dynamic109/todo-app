import React from "react";

const ReusableCheckbox = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        className="relative appearance-none w-5 h-5 border-2 border-black cursor-pointer checked:bg-[#50C2C9] "
      />
      <label className="text-sm font-semibold text-[#575757]">{label}</label>
    </div>
  );
};

export default ReusableCheckbox;
