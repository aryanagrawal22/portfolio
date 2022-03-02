import { Fade } from "react-awesome-reveal";
import { SkillCard } from "./SkillCard";

const webSkills = [
    {
        "name": "Javascript",
        "url": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "ReactJs",
        "url": "https://img.icons8.com/color/192/000000/react-native.png"
    },
    {
        "name": "NextJs",
        "url": "https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67"
    },
    {
        "name": "Redux",
        "url": "https://img.icons8.com/color/48/000000/redux.png"
    },
    {
        "name": "MongoDB",
        "url": "https://img.icons8.com/color/192/000000/mongodb.png"
    },
    {
        "name": "Redis",
        "url": "https://img.icons8.com/color/48/000000/redis.png"
    },
    {
        "name": "MySQL",
        "url": "https://img.icons8.com/fluency/192/000000/mysql-logo.png"
    },
    {
        "name": "Firebase",
        "url": "https://img.icons8.com/color/48/000000/firebase.png"
    },
    {
        "name": "NodeJs",
        "url": "https://img.icons8.com/color/192/000000/nodejs.png"
    },
    {
        "name": "Express JS",
        "url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
        "name": "Tailwind",
        "url": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    },
    {
        "name": "MaterialUI",
        "url": "https://camo.githubusercontent.com/306dedb9426f1d93a981d305a0a18164932ece8dca4d5fd820b1d3c36625b218/68747470733a2f2f6d75692e636f6d2f7374617469632f6c6f676f2e737667"
    }, 
    {
        "name": "Postman",
        "url": "https://avatars.githubusercontent.com/u/10251060?s=200&v=4"
    }
    
]


const cloudSkills = [
    {
        "name": "Docker",
        "url": "https://img.icons8.com/color/48/000000/docker.png"
    },
    {
        "name": "Kubernetes",
        "url": "https://img.icons8.com/color/48/000000/kubernetes.png"
    },
    {
        "name": "Azure",
        "url": "https://img.icons8.com/color/48/000000/azure-1.png"
    },
    {
        "name": "GCP",
        "url": "https://img.icons8.com/color/48/000000/google-cloud.png"
    },
    {
        "name": "Git",
        "url": "https://img.icons8.com/color/192/000000/git.png"
    }, 
]

const MlSkills = [
    {
        "name": "Python",
        "url": "https://img.icons8.com/color/192/000000/python.png"
    },
    {
        "name": "FastAPI",
        "url": "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg"
    },
    {
        "name": "Pandas",
        "url": "https://pandas.pydata.org/static/img/pandas.svg"
    },
    {
        "name": "NumPy",
        "url": "https://raw.githubusercontent.com/numpy/numpy/main/branding/logo/primary/numpylogo.svg"
    },
    {
        "name": "Scikit-Learn",
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
    },
]


export default function Skills() {
  return (
    <section className="my-16 mx-3 justify-center">
      <Fade up>
        <h1 className="heading-tagline mt-8 mb-4 font-primary text-white text-xl text-center">TAKE A LOOK AT MY SKILLS IN</h1>
        <div>
          <h1 className="heading-main mt-4 mb-8 font-primary font-bold text-white text-3xl text-center text-[#00e5ff]">Web Development</h1>
        </div>
      </Fade>
      <Fade up>
        <div className="mt-8 py-4 px-4 bg-black items-center justify-center shadow-2xl rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {webSkills.map((skill, index) => {
              return <SkillCard details={skill} key={index} />;
            })}
          </div>
        </div>
      </Fade>


      <Fade up>
        <div>
          <h1 className="heading-main mt-16 mb-8 font-primary font-bold text-white text-3xl text-center text-[#00e5ff]">Cloud & DevOps</h1>
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


      <Fade up>
        <div>
          <h1 className="heading-main mt-16 mb-8 font-primary font-bold text-white text-3xl text-center text-[#00e5ff]">Machine Learning</h1>
        </div>
      </Fade>
      <Fade up>
        <div className="mt-8  py-4 px-4 bg-black items-center justify-center shadow-2xl rounded-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {MlSkills.map((skill, index) => {
              return <SkillCard details={skill} key={index} />;
            })}
          </div>
        </div>
      </Fade>


    </section>

    
  );
}