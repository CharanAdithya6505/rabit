const amqp = require("amqplib");
const queue = "EmailQueue";

const createChannel = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });
    console.log("Connecting to rabbitMQ");
  } catch (error) {
    console.log("Error while connecting", error);
    throw error;
  }
};
module.exports = { createChannel, queue };
