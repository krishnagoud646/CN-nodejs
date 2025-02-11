// Import nodeMailer

const nodemailer = require("nodemailer");

// configure email and sending

async function sendMail() {
  // 1. Create Email Transporter
  // SMTP(Simple mail Transfer Protocol)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kittugoud6464@gmail.com",
      pass: "igldvlnyuznmhorm",
    },
  });
  //   Configure Email content
  const mailOptions = {
    from: "kittugoud6464@gmail.com",
    to: "krishnagoud646@gmail.com",
    subject: "Welcome to NodeJs Email",
    text: "This is an Email that was sent using nodemailer in  nodejs",
  };

  //   3. Send the Email
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email Sent Successfully");
  } catch (err) {
    console.log("Email Send Failed with error: " + err);
  }
}

sendMail();
