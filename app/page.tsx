import Image from "next/image";
import ReusableButton from "./components/reusable-button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-0 mt-14 md:mt-0">
      <div className="w-[254px] h-[194px] mx-auto mb-12 md:mb-0">
        <Image
          src={"/undraw_done_checking_re_6vyx 1.svg"}
          alt="a picture of a guy"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[350px] w-full text-center space-y-4 mb-20">
          <h2 className="font-bold text-lg">Gets things with TODs</h2>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
            Consequat urna quam felis interdum quisque. Malesuada adipiscing
            tristique ut eget sed.
          </p>
        </div>
      </div>
      <ReusableButton text="Get Started" link="sign-up" />
    </div>
  );
}
