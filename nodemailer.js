const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kolli.c23csai@nst.rishihood.edu.in',
    pass: 'pzvc tyiq aniu fyqx'
  }
});
const sendMail = async (emailOptions) => {
  try {
    await transporter.sendMail(emailOptions);
    console.log('Email sent:', emailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
module.exports = sendMail;