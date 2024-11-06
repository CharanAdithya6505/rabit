const { text } = require("express");
const sendMail = require("./nodemailer");
const { createChannel, queue } = require("./RabbitMQConfig");

const startConsumer = async () => {
  const channel = await createChannel();
  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const emailData = JSON.parse(msg.toString());
      try {
        await sendMail({
          from: "sendermail",
          to: emailData.to,
          subject: emailData.subject,
          text: emailData.text,
        });
        console.log(`Email is end to ${emailData.to}`);
        channel.ack(msg);
      } catch (error) {
        console.log(`Error while sending email ${error}`);
      }
    }
  });
};
startConsumer().catch((error)=>console.error(error));
