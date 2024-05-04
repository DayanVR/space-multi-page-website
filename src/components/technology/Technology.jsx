import React, { useState } from "react";

const Technology = ({ technologies }) => {
  const [technology, setTechnology] = useState({
    name: technologies[0].name,
    description: technologies[0].description,
    img: [technologies[0].images.portrait, technologies[0].images.landscape],
  });

  const handleTechnologyChange = (newTechnologyName) => {
    const newTechnology = technologies.find(
      (tech) => tech.name === newTechnologyName
    );
    if (newTechnology) {
      setTechnology({
        name: newTechnology.name,
        description: newTechnology.description,
        img: [newTechnology.images.portrait, newTechnology.images.landscape],
      });
    }
  };

  return (
    <div className="technology absolute h-screen w-screen overflow-hidden">
      <div className="relative mx-10 pt-24 md:pt-36 lg:mx-20 lg:flex lg:justify-between lg:pt-32 xl:ml-40 xl:mr-24 text-center">
        <div className="flex place-items-center max-md:justify-center lg:absolute">
          <b className="sub-h1 mr-5">03</b>
          <h4 className="font-barlowCond tracking-widest">SPACE LAUNCH 101</h4>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:justify-center 2xl:max-h-[65vh] 2xl:pt-14">
          <div className="my-8 flex w-screen flex-1 overflow-hidden max-lg:-mx-10 max-md:h-60 max-md:justify-center md:max-lg:-mx-[38px] md:max-lg:h-72 lg:max-xl:pr-72 2xl:pr-32 xl:h-full xl:w-3/5 2xl:w-full">
            <picture className="max-md:min-w-[102%] 2xl:min-w-full ">
              <source media="(min-width:1024px)" srcSet={technology.img[0]} />
              <source media="(max-width:1024px)" srcSet={technology.img[1]} />
              <img
                className="2xl:size-full sm:w-screen"
                src={technology.img[1]}
                alt=""
              />
            </picture>
          </div>
          <div className="flex-1 place-items-center lg:flex lg:flex-row xl:w-full">
            <div className="mx-auto flex w-7/12 lg:py-44 justify-between md:w-4/12 lg:w-28 lg:flex-col lg:space-y-7">
              <button
                className={`size-10 items-center rounded-full border md:size-16 ${
                  technology.name === "Launch vehicle"
                    ? "isActive"
                    : "notActive"
                }`}
                onClick={() => handleTechnologyChange("Launch vehicle")}
              >
                1
              </button>
              <button
                className={`size-10 items-center rounded-full border md:size-16 ${
                  technology.name === "Spaceport" ? "isActive" : "notActive"
                }`}
                onClick={() => handleTechnologyChange("Spaceport")}
              >
                2
              </button>
              <button
                className={`size-10 items-center rounded-full border md:size-16 ${
                  technology.name === "Space capsule" ? "isActive" : "notActive"
                }`}
                onClick={() => handleTechnologyChange("Space capsule")}
              >
                3
              </button>
            </div>
            <div className="mx-0 max-lg:md:mx-20 mt-8 h-full flex-1 md:mt-14 flex flex-col justify-center lg:-mx-10 lg:w-fit lg:-ml-4 lg:text-left xl:mr-8 2xl:mx-0">
              <div>
                <p className="font-barlowCond tracking-widest">
                  THE TERMINOLOGY
                </p>
                <h3 className="mt-2 uppercase">{technology.name}</h3>
              </div>
              <div className="mt-4 md:mx-14 lg:ml-0 lg:mr-20 xl:mr-16 2xl:mr-48 xl:max-2xl:mt-2 ">
                <p>{technology.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
