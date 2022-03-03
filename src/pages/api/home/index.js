import nc from "next-connect";
import cors from "cors";

const projectJSON = [
    {
        name: "Web Messenger",
        description: "A Messaging App having features like Dark Mode,Auto Scrollable Feed, Delete messages, Auth, and login/log out.",
        github: "https://github.com/aryanagrawal22/Web-Messenger",
        website: "https://whatsapp-build-e3a1e.firebaseapp.com/",
        image: "pasc.png",
    },
    {
        name: "Online Judge",
        description: "Highly scalable and secure Online Judge Platform for Coding Competition event conducted in Xenia '22 of PCSB - CSI.",
        github: "https://github.com/PCSB-Web-Team/online-judge-server",
        website: "https://github.com/PCSB-Web-Team/online-judge-server",
        image: "pasc.png",
    },
    {
        name: "Disease Predictor",
        description: "Responsive website to predict disease from given health parameters using machine learning models.",
        github: "https://github.com/aryanagrawal22/Disease-Predictor",
        website: "https://disease-predict-website.herokuapp.com/",
        image: "pasc.png",
    },
]

const index = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send({status:true, projects: projectJSON});
  });

export default index;
