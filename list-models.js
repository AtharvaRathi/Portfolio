const fs = require('fs');
const env = fs.readFileSync('.env', 'utf8').split('\n').find(line => line.startsWith('GEMINI_API_KEY='));
let key = env ? env.split('=')[1].trim() : '';
key = key.replace(/^"|"$/g, '');



async function listModels() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.models) {
      console.log("AVAILABLE MODELS:");
      data.models.forEach(m => console.log(m.name, "-", m.supportedGenerationMethods));
    } else {
      console.log("Error listing models:", data);
    }
  } catch (e) {
    console.error(e);
  }
}

listModels();
