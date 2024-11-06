const express = require("express");
const bodyParser = require("body-parser");
const { createChannel } = require("./RabbitMQConfig");
const amqp = require("amqplib");
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

let channel;
createChannel().then((ch) => {
  channel = ch;
});

app.post("sendMail", (req, res) => {
  const emaildata = req.body;
  if (!emaildata.to || !emaildata.subject || !emaildata.text) {
    return res.send(" Send data Carefully / provided data is insufficient ");
  }
});
app.listen(PORT, () => {
  console.log(`Listening to port localhost:${PORT}`);
});
