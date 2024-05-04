import { useState } from "react";

const Destination = ({ destinations }) => {
  const [planets, setPlanets] = useState({
    planet: destinations[0].name,
    description: destinations[0].description,
    distance: destinations[0].distance,
    travel: destinations[0].travel,
  });
  const [img, setImg] = useState(destinations[0].images.png);

  const handlePlanetChange = (planetName) => {
    const selectedPlanet = destinations.find(
      (dest) => dest.name.toLowerCase() === planetName.toLowerCase()
    );
    if (selectedPlanet) {
      setImg(selectedPlanet.images.png);
      setPlanets({
        planet: selectedPlanet.name,
        description: selectedPlanet.description,
        distance: selectedPlanet.distance,
        travel: selectedPlanet.travel,
      });
    }
  };

  return (
    <div
      className="destination absolute h-screen w-screen"
    >
      <div className="relative mx-10 pt-24 md:pt-36 lg:mx-20 lg:flex lg:justify-between lg:pt-32 xl:mx-40 gap-x-28 text-center">
        <div className="flex-1">
          <div className="flex place-items-center max-md:justify-center">
            <b className="sub-h1 mr-3">01</b>
            <h4 className="font-barlowCond tracking-widest ">
              PICK YOUR DESTINATION
            </h4>
          </div>
          <div>
            <div className="my-8 flex justify-center px-5 lg:mb-0 lg:mt-10">
              <img
                className="size-3/4 md:size-1/2 lg:size-[445px] 2xl:size-[678px]"
                src={img}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1 self-center lg:text-left">
          <div className="mx-auto flex w-10/12 justify-between md:w-6/12 lg:ml-0 lg:w-11/12 2xl:w-7/12">
            <button
              className={`${
                planets.planet === "Moon" ? "isActive" : "notActive"
              }`}
              onClick={() => handlePlanetChange("Moon")}
            >
              Moon
            </button>
            <button
              className={`${
                planets.planet === "Mars" ? "isActive" : "notActive"
              }`}
              onClick={() => handlePlanetChange("Mars")}
            >
              Mars
            </button>
            <button
              className={`${
                planets.planet === "Europa" ? "isActive" : "notActive"
              }`}
              onClick={() => handlePlanetChange("Europa")}
            >
              Europa
            </button>
            <button
              className={`${
                planets.planet === "Titan" ? "isActive" : "notActive"
              }`}
              onClick={() => handlePlanetChange("Titan")}
            >
              Titan
            </button>
          </div>
          <div className="mx-0 max-lg:md:mx-20 ">
            <div>
              <h2 className="uppercase">{planets.planet}</h2>
              <p className="lg:leading-7 2xl:mr-80">{planets.description}</p>
            </div>
            <div className="mt-4 border-t md:mt-10 2xl:mr-80"></div>
            <div className="md:mt-6 md:flex md:justify-around lg:w-10/12 lg:justify-between">
              <div className="mt-4 lg:mt-2">
                <p className="sub-h2">AVG. DISTANCE</p>
                <h3 className="sub-h1 uppercase">{planets.distance}</h3>
              </div>
              <div className="mt-4 lg:mt-2 2xl:mr-56">
                <p className="sub-h2">EST. TRAVEL TIME</p>
                <h3 className="sub-h1 uppercase">{planets.travel}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
