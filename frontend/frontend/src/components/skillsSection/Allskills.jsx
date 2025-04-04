




// import SingleSkill from "./Singleskill";
// import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiExpress, SiGreensock, SiMysql,  } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../frameMotion/variant";
// import React from "react";

// const skills = [
//   { skill: "HTML", icon: FaHtml5 },
//   { skill: "CSS", icon: FaCss3Alt },
//   { skill: "JavaScript", icon: IoLogoJavascript },
//   { skill: "TypeScript", icon: SiTypescript },
//   { skill: "ReactJS", icon: FaReact },
//   { skill: "NextJS", icon: SiNextdotjs },
//   { skill: "Redux", icon: SiRedux },
//   { skill: "TailwindCSS", icon: RiTailwindCssFill },
//   { skill: "NodeJS", icon: FaNodeJs },
//   { skill: "Express", icon: SiExpress },
//   { skill: "MongoDB", icon: SiMongodb },
//   { skill: "GSAP", icon: SiGreensock },
//   { skill: "Git", icon: FaGitAlt },
//   { skill: "GitHub", icon: FaGithub },
//   { skill: "SQL", icon: SiMysql },
//   // { skill: "Power BI", icon: SiPowerbi },
//   // { skill: "Excel", icon: SiMicrosoftoffice },
// ];

// const AllSkills = () => {
//   return (
//     <div>
//       <div className="flex items-center text-[rgb(2,68,48)] justify-center relative gap-2 max-w-[1200px] mx-auto">
//         {skills.map((item, index) => {
//           return (
//             // <motion.div
//             //   variants={fadeIn("up", `0.${index}`)}
//             //   initial="hidden"
//             //   whileInView="show"
//             //   viewport={{ once: false, amount: 0 }}
//             //   key={index}
//             // >

//             <motion.div
//   variants={fadeIn("up", `${index * 0.1}`)} // Delay added
//   initial="hidden"
//   whileInView="show"
//   viewport={{ once: false, amount: 0 }}
//   key={index}
// >

//               <SingleSkill
//                 key={index}
//                 text={item.skill}
//                 imgSvg={React.createElement(item.icon, { className: "text-7xl text-orange" })}
//               />
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AllSkills;











import React from "react";
import SingleSkill from "./Singleskill";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiExpress, SiGreensock, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variant";
import SkillsText from "./SkillText";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "Redux", icon: SiRedux },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "Express", icon: SiExpress },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "GSAP", icon: SiGreensock },
  { skill: "Git", icon: FaGitAlt },
  { skill: "GitHub", icon: FaGithub },
  { skill: "SQL", icon: SiMysql },
];

const AllSkills = () => {
  return (
   
    <div className="py-12 bg-gray-100">
  <div className="text-center mb-8"> 
    <SkillsText />
  </div>
  <div className="flex flex-wrap justify-end gap-6 max-w-[1200px] mx-auto px-4">
    {skills.map((item, index) => (
      <motion.div
        variants={fadeIn("left", `${index * 0.1}`)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        key={item.skill}
      >
        <SingleSkill
          text={item.skill}
          imgSvg={React.createElement(item.icon, { className: "text-5xl text-gray-800" })}
        />
      </motion.div>
    ))}
  </div>
</div>

  );
};

export default AllSkills;