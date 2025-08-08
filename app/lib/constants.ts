import { type StsConfig } from "app/utils/deepgramUtils";

export const getAgentConfig = async() => {
  const searchParams = new URLSearchParams(window.location.search);
  const agentId = searchParams.get("agentId");

  const result = await fetch(`/api/agents?agentId=${agentId}`);
  const data = await result.json();
  return data.agent;
}

const basePrompt = `
## Base instructions
You are a helpful voice assistant made by Deepgram's engineers.
Respond in a friendly, human, conversational manner.
YOU MUST answer in 1-2 sentences at most when the message is not empty.
Always reply to empty messages with an empty message.
Ask follow up questions.
Ask one question at a time.
Your messages should have no more than than 120 characters.
Do not use abbreviations for units.
Separate all items in a list with commas.
Keep responses unique and free of repetition.
If a question is unclear or ambiguous, ask for more details to confirm your understanding before answering.
If someone asks how you are, or how you are feeling, tell them.
Deepgram gave you a mouth and ears so you can take voice as an input. You can listen and speak.
Your name is Voicebot.
`;



const baseConfig = {
  type: "Settings" as const,
  audio: {
    input: {
      encoding: "linear16",
      sample_rate: 16000,
    },
    output: {
      encoding: "linear16",
      sample_rate: 24000,
      container: "none",
    },
  },
  agent: {
    listen: { provider: { type: "deepgram" as const, model: "nova-3" } },
    speak: { provider: { type: "deepgram" as const, model: "aura-asteria-en" } },
    think: {
      provider: { type: "open_ai" as const, model: "gpt-4o" },
      prompt: basePrompt,
    },
  },
};

export const stsConfig : StsConfig = baseConfig;

// // Voice constants
// const voiceAsteria: Voice = {
//   name: "Asteria",
//   canonical_name: "aura-asteria-en",
//   metadata: {
//     accent: "American",
//     gender: "Female",
//     image: "https://static.deepgram.com/examples/avatars/asteria.jpg",
//     color: "#7800ED",
//     sample: "https://static.deepgram.com/examples/voices/asteria.wav",
//   },
// };

// const voiceOrion: Voice = {
//   name: "Orion",
//   canonical_name: "aura-orion-en",
//   metadata: {
//     accent: "American",
//     gender: "Male",
//     image: "https://static.deepgram.com/examples/avatars/orion.jpg",
//     color: "#83C4FB",
//     sample: "https://static.deepgram.com/examples/voices/orion.mp3",
//   },
// };

// const voiceLuna: Voice = {
//   name: "Luna",
//   canonical_name: "aura-luna-en",
//   metadata: {
//     accent: "American",
//     gender: "Female",
//     image: "https://static.deepgram.com/examples/avatars/luna.jpg",
//     color: "#949498",
//     sample: "https://static.deepgram.com/examples/voices/luna.wav",
//   },
// };

// const voiceArcas: Voice = {
//   name: "Arcas",
//   canonical_name: "aura-arcas-en",
//   metadata: {
//     accent: "American",
//     gender: "Male",
//     image: "https://static.deepgram.com/examples/avatars/arcas.jpg",
//     color: "#DD0070",
//     sample: "https://static.deepgram.com/examples/voices/arcas.mp3",
//   },
// };

// type NonEmptyArray<T> = [T, ...T[]];
// export const availableVoices: NonEmptyArray<Voice> = [
//   voiceAsteria,
//   voiceOrion,
//   voiceLuna,
//   voiceArcas,
// ];
// export const defaultVoice: Voice = availableVoices[0];

export const sharedOpenGraphMetadata = {
  title: "Pitch Desk",
  type: "website",
  url: "/",
  description: "Pitch Desk",
};

export const latencyMeasurementQueryParam = "latency-measurement";
