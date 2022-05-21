"use strict";
require('dotenv').config()
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function htmlEmail(data) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  console.log(`ready to send message to ${userName}`)

  let transporter = nodemailer.createTransport({
    pooled: true,
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
    }
  });
  // send mail with defined transport object
  try {

    let info = await transporter.sendMail({
      from: '"beachpickem" <beachpickem@beachvolleyblog.net>', // sender address
      to: email,
      subject: "Four Tournaments start tomorrow!",
      html: `<p>Hi ${userName},</p>
<p>This is Greg from the Beach Volley Blog, with a reminder that there is an exciting weekend of beach volleyball ahead. That means a chance for you to play Beach Picke'em!</p>
<p>The men's and women's Challenge level tournaments in Kusadasi start Thursday morning in Turkey (don't forget about the time change from where you are!) and there are Future level tournaments playing in Madrid (Women) and Rhodes (Men), too. That means 152 beach volleyball teams will be playing on the Pro Beach Tour at the same time.</p>
<p>Can you pick the teams that will still be playing on Saturday? Don't miss your chance to prove it by playing Beach Pick'em at <a href="https://beachpickem.beachvolleyblog.net/#/">beachpickem.beachvolleyblog.net</a>.</p>
<img src="https://beachvolleyblog.net/wp-content/uploads/2022/03/Cherif-and-Ahmed-celebrate-Rosarito.png" alt="Cherif and Ahmed">
<p>Good luck,</p>
<p>Greg</p>` // html body
    });

    console.log(`Message sent to ${userName}: %s`, info.messageId);
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = { htmlEmail }

// export default nodeMail

