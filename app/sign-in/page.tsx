import ReusableButton from "../components/reusable-button";
import ReusableInput from "../components/resuable-input";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-0 mt-14 md:mt-0">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full text-center space-y-4 mb-20">
          <h2 className="font-bold text-lg">Welcome to Onboard! </h2>
          <div className="w-[185px] h-[140px] mx-auto mb-12 md:mb-0">
            <Image
              src={"/undraw_back_to_school_inwc 1.svg"}
              alt="a picture of a boy with his mother"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="space-y-6 mb-12 w-full">
        <ReusableInput placeholder="Enter your Email" type="email" />
        <ReusableInput placeholder="Enter Password" type="password" />
      </div>
      <ReusableButton text="Register" link="dashboard" />
      <p className="mt-4 text-base">
        Don't have an account?{" "}
        <Link href={"/sign-up"} className="text-[#50C2C9]">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default page;
