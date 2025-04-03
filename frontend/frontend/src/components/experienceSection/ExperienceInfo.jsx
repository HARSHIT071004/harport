import React from "react";
const ExperienceInfo = ({ number, text }) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-6xl text-cyan">{number}</p>
        <p className="font-bold text-xl text-[rgb(2,68,48)] uppercase -mt-4">{text}</p>
      </div>
    );
  };
  
  export default ExperienceInfo;