import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';

dotenv.config();
const configuration = new Configuration({
    organization: process.env.OPENAI_ORG_ID,
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const newChat = async (messages) => { 
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages
  });
  return response.data;
}

export default class GptConversation {
  constructor() {
    this.messages = [];
  }

  async addMessage(message) {
    this.messages.push(message);
    const response = await newChat(this.messages);
    this.messages.push(response.choices[0].message);
    return this.messages;
  }

  async getMessages() {
    return this.messages;
  }

  async reset() {
    this.messages = [];
  }
}