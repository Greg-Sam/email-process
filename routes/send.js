const router = require('express').Router()
// const users = require('../users.json')
require('dotenv').config()
const nodemailer = require("nodemailer");
const { User } = require('../models')
const createContent = require('../createContent')




  // send mail with defined transport object
  const sendEmail = async (user, 
    subject, content, 
    transporter) => {
    let email = user.email
    let userName = user.userName
  try {

    let info = await transporter.sendMail({
      from: '"beachpickem" <beachpickem@beachvolleyblog.net>', // sender address
      to: email,
      subject: subject,
      html: content
    });

    console.log(`Message sent to ${userName}: %s`, 
    info.messageId
    );

  } catch (error) {
    console.log(error)
    
  }
  }


// async..await is not allowed in global scope, must use a wrapper
async function htmlEmail(users) {
  console.log(`creating nodemailer transporter`)

  let transporter = nodemailer.createTransport({
    pool: true,
    name: 'beachvolleyblog.net',
    host: "mail.beachvolleyblog.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      type: 'login',
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    
     
      const forLoop = async () => {
        console.log('Start')

        for (let i = 0; i < users.length; i++) {
          console.log(`${i} of ${users.length}`)
          const user = users[i]
         let content = createContent.createContent(user)
          await sendEmail(user, 
            content.subjectLine, content.emailContent, 
            transporter)
          
        }

        console.log('End')
      }
    forLoop()
  }

  });

}







router.put('/test/', async (req, res) => {
console.log('hello world')
  const users = await User.find({})

htmlEmail(users)


res.send(users)
})

module.exports = router