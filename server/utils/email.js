const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Jonas Schmedtmann <${process.env.EMAIL_FROM}>`;
    // this.user = user; //updated line
  }


  newTransport() {
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
      // Sendgrid
      return nodemailer.createTransport({
        service: "Mailjet",
        host: process.env.MAILJET_HOST,
        port: process.env.MAILJET_PORT,
        secure: false,
        auth: {
          user: process.env.MAILJET_USERNAME,
          pass: process.env.MAILJET_PASSWORD
        }
        // service: 'SendGrid',
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    // if (process.env.NODE_ENV === 'DEVELOPMENT') {
    //   return nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: process.env.EMAIL_PORT,
    //   auth: {
    //     user: process.env.EMAIL_USERNAME,
    //     pass: process.env.EMAIL_PASSWORD
    //   }
    // });
    // }

    // // MAILJET
    //   return nodemailer.createTransport({
    //     // service: "Mailjet",
    //     host: process.env.MAILJET_HOST,
    //     port: process.env.MAILJET_PORT,
    //     secure: false,
    //     auth: {
    //       user: process.env.MAILJET_USERNAME,
    //       pass: process.env.MAILJET_PASSWORD
    //     }
    //   });
  }

  // Send the actual email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject
    });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html)
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes)'
    );
  } 
  
  
  async sendEmailConfirmation() {  //update line
    await this.send(
      'confirmEmail',
      `please confirm Email Address token is ${this.user.confirmEmailToken}` 
     //this is the subject i have mentioned
    );
  }

  
};

// const sendEmail = async options => {
//   // 1) Create a transporter
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD
//     }
//   });

//   // 2) Define the email options
//   const mailOptions = {
//     from: 'Jonas Hack <hello@hack.io>',
//     to: options.email,
//     subject: options.subject,
//     text: options.message
//     // html:
//   };

//   // 3) Actually send the email
//   await transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;