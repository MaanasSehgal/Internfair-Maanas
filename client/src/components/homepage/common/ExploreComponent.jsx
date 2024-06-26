import Image from "next/image";

const ExploreComponent = (buttonText, headingText, contentText) => {
  return (
    <div className=" w-screen max-w-full mbSmall:flex items-center justify-center gap-4 p-4">
      <div className="flex flex-col items-start justify-center gap-2 mbSmall:gap-3 mbXSmall:gap-1 w-[70%] h-full mbMini:w-full ">
        <div className="">
          <button className="text-[0.6rem] px-2 p-1 mbMedium:text-base mbMedium:p-2 mbMedium:px-4 mbSmall:text-sm mbSmall:p-2 mbSmall:px-4 rounded-3xl font-medium bg-[#F4F5FA]">
            Courses for you 🤝
          </button>
        </div>
        <h1 className="text-[#081245] font-Gilroy-Light text-base  mbXSmall:text-xl mbSmall:text-2xl  mbMedium:text-2xl laptop:text-[1.7rem] laptop:leading-8 tbPortrait:text-3xl tbLandscape:text-[2rem] font-black">
          Tailored Courses for Your Success
        </h1>
        <div className="w-[85%]  mbMini:w-[93vw] mbXSmall:w[100vw] mbSmall:w-[65vw] mbMedium:w-[53vw] laptop:w-[57vw] ">
          <p className="text-[#09123E] font-Gilroy-Medium font-medium leading-4 text-[0.65rem] mbSmall:text-sm mbSmall:leading-5 mbXSmall:text-[0.75rem] mbMini:leading-4 mbMedium:text-[0.9rem] mbMedium:leading-5 laptop:text-[1.1rem] tbPortrait:text-[1.2rem] tbPortrait:leading-6 tbLandscape:text-[1.2rem] ">
            Explore our comprehensive selection of courses, designed to help you
            master the in-demand skills. We offer a wide range of structured
            courses, from foundational levels to advanced specializations, so
            you can start your learning journey and become the best in your
            chosen field.
          </p>
        </div>
      </div>
      <div className="w-[30%] mbMini:w-full mbMini:mt-4 h-full flex items-center  mbMini:justify-start mbSmall:justify-end justify-end">
        <button className=" flex items-center justify-center gap-2 font-Gilroy-Medium rounded-xl mbMini:px-3 mbMini:p-[0.25rem] mbXSmall:p-2 mbXSmall:px-3 mbMedium:p-2 mbMedium:px-4 mbMedium:text-base mbSmall:p-2 mbSmall:px-4 tbLandscape:p-3 tbLandscape:px-7 border-[1.5px] border-black mbSmall:text-xs mbMini:text-[0.7rem]">
          Explore all
          <span>
            <Image
              className="tbPortrait:w-[1vw] mbSmall:w-[1.4vw] mbMini:w-[2vw]"
              src="/icons/Vector_black.png"
              alt="Description of your image"
              width={15}
              height={20}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ExploreComponent;
