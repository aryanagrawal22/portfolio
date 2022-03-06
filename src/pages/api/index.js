import nc from "next-connect";
import cors from "cors";

const index = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send({Status:true});
  });

export default index;