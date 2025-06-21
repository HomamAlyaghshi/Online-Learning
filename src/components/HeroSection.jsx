const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-primary flex">
      <div className="flex-1 h-full  grid justify-center items-center  p-8">
        <div>
          <h1 className="text-white font-primary text-7xl mb-4 text-left">
            Find Your <br />
            Dream Car
          </h1>
          <p className="text-white font-primary text-xl text-left mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button className="border-2 border-white px-6 py-4 text-xl text-white font-primary rounded-lg ">Read More</button>
        </div>
      </div>

      <div className="flex-1 h-full grid justify-end items-end ">
        <img alt="car" src="/images/car.png" className="" />
      </div>
    </div>
  );
};

export default HeroSection;
