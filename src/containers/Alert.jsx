export const Alert = () => {
  return (
    <div className="p-10 overflow-auto h-screen" role="alert">
      <div className="text-white mb-8">
        <h1 className="text-4xl font-bold ">Pressure</h1>
        <div className="p-4 bg-alert-bg/30 backdrop:blur mt-8 rounded-xl">
          <p>The Mariana Trench has the world’s deepest known point, the Challenger Deep, reaching nearly 11,000 meters (36,000 feet). Pressure here can exceed 1,000 times atmospheric pressure, posing extreme risks for any underwater vehicle.
          </p>
          <div className="flex mt-4">
            <h1 className="mr-2 font-bold">Status: </h1>
            <h2>Severe</h2>
          </div>
          <div className="flex">
            <h1 className="mr-2 font-bold">Area affected: </h1>
            <h2>Mariana Trench (Pacific Ocean)  
            </h2>
          </div>
        </div>
        <div className="w-full h-0.5 text-white bg-white mt-9"></div>
      </div>
      <div className="text-white mb-8">
        <h1 className="text-4xl font-bold ">Atlantis Nova</h1>
        <div className="p-4 bg-alert-bg/30 backdrop:blur mt-8 rounded-xl">
          <p>Atlantis Nova, an underwater city, is facing a severe threat from a rapidly expanding Abyssal Rift in the ocean floor. The rift is destabilizing the city’s foundations, causing structural cracks and threatening collapses. It’s also disrupting ocean currents, damaging coastal defenses and resource flows. The rift is releasing toxic gases like methane and hydrogen sulfide, endangering both the environment and air quality within the city. As marine ecosystems collapse, food supplies are at risk, and unstable geothermal energy sources threaten power systems. These challenges, coupled with rising anxiety among residents, require immediate solutions, including structural reinforcement, energy diversification, and gas filtration systems. Without urgent action, the city’s survival is in jeopardy.</p>
          <div className="flex mt-4">
            <h1 className="mr-2 font-bold">Status: </h1>
            <h2>Severe</h2>
          </div>
          <div className="flex">
            <h1 className="mr-2 font-bold">Area affected: </h1>
            <h2>Atlantis Nova</h2>
          </div>
        </div>
        <div className="w-full h-0.5 text-white bg-white mt-9"></div>
      </div>
      <div className="text-white mb-8">
        <h1 className="text-4xl font-bold ">Mechanical Failures</h1>
        <div className="p-4 bg-alert-bg/30 backdrop:blur mt-8 rounded-xl">
          <p>Mechanical failures can occur in any body of water, but they’re more likely and more hazardous in deep-sea regions where repairs are impossible without returning to the surface. For example, equipment near the Puerto Rico Trench or in deep areas of the Southern Ocean frequently faces issues.</p>
          <div className="flex mt-4">
            <h1 className="mr-2 font-bold">Status: </h1>
            <h2>Severe</h2>
          </div>
          <div className="flex">
            <h1 className="mr-2 font-bold">Area affected: </h1>
            <h2>Not Specified</h2>
          </div>
        </div>
        <div className="w-full h-0.5 text-white bg-white mt-9"></div>
      </div>
    </div>
  );
}