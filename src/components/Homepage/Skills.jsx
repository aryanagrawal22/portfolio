import { Fade } from "react-awesome-reveal";
import { SkillCard } from "./SkillCard";


export default function Skills(props) {
  const skills = props.data;
  const backendSkills = skills.backendSkills;
  const frontendSkills = skills.frontendSkills;
  const cloudSkills = skills.cloudSkills;
  return (
    <section className="my-16 mx-3 justify-center">
      <Fade up>
        <h1 className="heading-tagline mt-8 mb-4 font-primary text-white text-xl text-center">TAKE A LOOK AT MY SKILLS IN</h1>
        <div>
          <h1 className="heading-main mt-4 mb-8 font-primary font-bold text-3xl text-center text-[#00e5ff]">Backend</h1>
        </div>
      </Fade>

      <Fade up>
        <div className="mt-8 py-4 px-4 bg-black items-center justify-center shadow-2xl rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {backendSkills.map((skill, index) => {
              return <SkillCard details={skill} key={index} />;
            })}
          </div>
        </div>
      </Fade>


      <Fade up>
        <div>
          <h1 className="heading-main mt-16 mb-8 font-primary font-bold text-3xl text-center text-[#00e5ff]">Frontend</h1>
        </div>
      </Fade>
      <Fade up>
        <div className="mt-8 py-4 px-4 bg-black items-center justify-center shadow-2xl rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {frontendSkills.map((skill, index) => {
              return <SkillCard details={skill} key={index} />;
            })}
          </div>
        </div>
      </Fade>


      <Fade up>
        <div>
          <h1 className="heading-main mt-16 mb-8 font-primary font-bold text-3xl text-center text-[#00e5ff]">Cloud & DevOps</h1>
        </div>
      </Fade>
      <Fade up>
        <div className="mt-8 py-4 px-4 bg-black items-center justify-center shadow-2xl rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {cloudSkills.map((skill, index) => {
              return <SkillCard details={skill} key={index} />;
            })}
          </div>
        </div>
      </Fade>


    </section>


  );
}