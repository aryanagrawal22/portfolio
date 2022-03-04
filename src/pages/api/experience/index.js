import nc from "next-connect";
import cors from "cors";
import experienceJSON from "../../../data/experience.json";
import organizationJSON from "../../../data/organization.json";

const experienceIndex = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send({status:true, experience: experienceJSON, organization: organizationJSON});
  });

export default experienceIndex;