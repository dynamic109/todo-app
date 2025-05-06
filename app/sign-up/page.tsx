import ReusableButton from "../components/reusable-button";
import ReusableInput from "../components/resuable-input";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-0 mt-14 md:mt-0">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full text-center space-y-4 mb-20">
          <h2 className="font-bold text-lg">Welcome to Onboard! </h2>
          <p className="text-[13px]">Let’s help to meet up your tasks.</p>
        </div>
      </div>
      <div className="space-y-6 mb-12 w-full">
        <ReusableInput placeholder="Enter your full name" type="name" />
        <ReusableInput placeholder="Enter your Email" type="email" />
        <ReusableInput placeholder="Enter Password" type="password" />
        <ReusableInput placeholder="Confirm Password" type="password" />
      </div>
      <ReusableButton text="Register" link="dashboard" />
      <p className="mt-4 text-base">
        Already have an account?{" "}
        <Link href={"/sign-in"} className="text-[#50C2C9]">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default page;
