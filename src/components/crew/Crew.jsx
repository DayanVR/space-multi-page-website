import { useState } from "react";
//const element = document.querySelector("button").addEventListener("active");//

const Crew = ({ crews }) => {
  const [crew, setCrew] = useState({
    name: crews[0].name,
    role: crews[0].role,
    bio: crews[0].bio,
    img: crews[0].images.png,
  });

  const handleRoleChange = (newRole) => {
    const newCrew = crews.find((crew) => crew.role === newRole);
    if (newCrew) {
      setCrew({
        name: newCrew.name,
        role: newCrew.role,
        bio: newCrew.bio,
        img: newCrew.images.png,
      });
    }
  };

  return (
    <div className="crew relative h-screen w-screen overflow-hidden">
      <div className="h-screen bg-[#0b0d17]/[.65]">
        <div className="relative mx-10 pt-24 md:pt-36 lg:mx-20 lg:flex lg:justify-between lg:pt-32 max-2xl:xl:lg:pt-28 xl:mx-40">
          <div className="flex place-items-center max-md:justify-center md:absolute">
            <b className="sub-h1 mr-5">02</b>
            <h4 className="font-barlowCond tracking-widest ">MEET YOUR CREW</h4>
          </div>
          <div className="md:flex md:pt-24 md:max-lg:flex-col-reverse lg:flex-row-reverse lg:pt-20 xl:pt-20 2xl:pt-24">
            <div className="flex-1 text-center md:flex md:flex-col-reverse 2xl:translate-y-full">
              <div className="md:max-lg:translate-y-6 xl:-translate-y-1/4">
                <div
                  className={`${
                    crew.role === "Pilot"
                      ? "md:mb-8 lg:mb-6 lg:translate-y-36 xl:translate-y-80 2xl:-translate-y-12"
                      : "xl:translate-y-2/4 lg:translate-y-48 2xl:-translate-y-12"
                  } my-10 flex h-60 justify-center border-[#383B4B] px-5 max-md:border-b-2 md:mt-2 xl:-mt-8 xl:mb-0 md:h-[500px] xl:w-full 2xl:h-[600px]`}
                >
                  <img
                    className=" w-3/4 md:h-full md:w-1/2 lg:-mt-24 2xl:-translate-y-1/4 lg:h-[60vh] lg:w-full 2xl:scale-x-125 "
                    src={crew.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col max-lg:justify-between md:max-lg:flex-col-reverse lg:mb-44 lg:self-center xl:mb-20 2xl:mb-60 ">
              <div className="mx-auto flex w-4/12 max-xl:lg:py-12 xl:py-9 justify-between md:w-2/12 md:max-lg:mt-10 lg:mx-0 lg:w-40 2xl:w-52">
                <span
                  className={`size-3 rounded-full lg:size-5 ${
                    crew.role === "Commander" ? "isActive" : "notActive"
                  }`}
                  onClick={() => handleRoleChange("Commander")}
                ></span>
                <span
                  className={`size-3 rounded-full lg:size-5 ${
                    crew.role === "Mission Specialist"
                      ? "isActive"
                      : "notActive"
                  }`}
                  onClick={() => handleRoleChange("Mission Specialist")}
                ></span>
                <span
                  className={`size-3 rounded-full lg:size-5 ${
                    crew.role === "Pilot" ? "isActive" : "notActive"
                  }`}
                  onClick={() => handleRoleChange("Pilot")}
                ></span>
                <span
                  className={`size-3 rounded-full lg:size-5  ${
                    crew.role === "Flight Engineer" ? "isActive" : "notActive"
                  }`}
                  onClick={() => handleRoleChange("Flight Engineer")}
                ></span>
              </div>
              <div className="mx-0 max-lg:md:mx-20 mt-8 text-center md:mt-3 lg:pt-8 lg:text-start 2xl:mr-10 2xl:pt-6">
                <div className="uppercase">
                  <h4 className="text-white/[.45]">{crew.role}</h4>
                  <h3 className="mt-2 ">{crew.name}</h3>
                </div>
                <div className="mt-6 md:mt-4 lg:mr-16">
                  <p
                    className={`${
                      crew.role === "Pilot"
                        ? "md:max-lg:-mx-5 2xl:mr-40"
                        : "md:max-lg:mx-7 2xl:mr-80"
                    }`}
                  >
                    {crew.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
