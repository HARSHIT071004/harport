import React from "react";

const SubHeroMain = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey text-[rgb(2,68,48)] flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 border-black md:flex-row sm:flex-col items-center gap-2 font-bold ">
      <p className="md:block sm:hidden ml-9">Fast Learner</p>
      <p className="md:block sm:hidden">Team Work</p>
      <p>Rapid Developer</p>
    </div>
  );
};

export default SubHeroMain;