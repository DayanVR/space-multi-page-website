const Home = () => {
  return (
    <div className="home absolute h-screen w-screen">
      <div className="relative mx-10 pt-24 md:pt-36 lg:mx-20 lg:flex lg:justify-between lg:pt-32 xl:mx-40 lg:mt-8 xl:mt-40 2xl:top-40">
        <div className="flex-1 2xl:mx-24">
          <div className="mx-0 max-lg:md:mx-20 text-center lg:text-start">
            <h5 className="font-barlowCond tracking-widest text-[#d0d6f9] max-sm:text-sm">
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="-mb-2 lg:-my-8 2xl:mt-0">SPACE</h1>
            <p className="mt-24 leading-6 md:mx-10 md:mt-7 lg:mx-0 lg:mr-16 lg:mt-0 2xl:mr-44 2xl:mt-10">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="button-section lg:mt-8 relative mt-8 2xl:mx-24 flex flex-1 justify-center lg:justify-end">
          <div className="button-section2 mt-16 rounded-full hover:-translate-y-10 hover:p-10 md:hover:-translate-y-14 md:hover:p-14 lg:hover:-translate-y-10 lg:hover:translate-x-10 lg:hover:p-10 lg:-mb-6 lg:mt-12 2xl:mb-20">
            <button className="size-[150px] rounded-full bg-white tracking-widest text-black md:size-[242px] md:text-4xl 2xl:size-[274px]">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
