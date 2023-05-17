import express from "express";
import bodyParser from "body-parser";
import GptConversation from "./gpt.js";
import dotenv from 'dotenv';

dotenv.config();

const conversation = new GptConversation();

const port = process.env.SERVER_PORT || 3000;
const app = new express();

app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
  console.log(req.body);
  const { message } = req.body;
  const response = await conversation.addMessage(message);
  res.json(response);
});

app.post('/api/reset', async (req, res) => {
  await conversation.reset();
  res.json({ success: true });
});

app.get('/api/messages', async (req, res) => {
  const messages = await conversation.getMessages();
  res.json(messages);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
