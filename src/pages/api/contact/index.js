import nc from "next-connect";
import cors from "cors";
import nodemailer from 'nodemailer';

const contactIndex = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .post((req, res) => {
    const body = req.body;

    let transporter = nodemailer.createTransport({
        service:'gmail',
    auth:{
        user:`${process.env.NODEMAILER_USER}`,
        pass:`${process.env.NODEMAILER_PASSWORD}`
    }
    });


    var mailOptions ={
        from:`${process.env.NODEMAILER_USER}`,
        to:`${process.env.NODEMAILER_USER}`,
        subject:`${body.name}, ${body.country} sent a message`,
        text:`Email: ${body.email}, Message: ${body.message}, Contact: ${body.phone}, Country: ${body.country}`,
    }  

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
            return res.status(404).send({Data: error})
        }else{
            console.log('Email Send ' + info.response);
            return res.status(200).send({Data: info.response})
        }
   });

  });

export default contactIndex;
