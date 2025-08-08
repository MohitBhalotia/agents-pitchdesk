import mongoose, { Schema } from "mongoose";

export interface Agent {
  name: string;
  voice: string;
  firstMessage: string;
  systemPrompt: string;
}

const agentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  voice: {
    type: String,
    required: true,
  },
  firstMessage: {
    type: String,
    required: true,
  },
  systemPrompt: {
    type: String,
    required: true,
  },
});

const Agent = mongoose.model("Agent", agentSchema);

export default Agent;
