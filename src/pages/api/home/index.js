import nc from "next-connect";
import cors from "cors";
import projectJSON from "../../../data/project.json";
import skillJSON from "../../../data/skill.json";

const index = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send({status:true, projects: projectJSON, skills: skillJSON});
  });

export default index;