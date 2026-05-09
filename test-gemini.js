const fs = require('fs');
const env = fs.readFileSync('.env', 'utf8').split('\n').find(line => line.startsWith('GEMINI_API_KEY='));
let key = env ? env.split('=')[1].trim() : '';
key = key.replace(/^"|"$/g, '');

const { GoogleGenerativeAI } = require('@google/generative-ai');

const client = new GoogleGenerativeAI(key);

async function testModel(modelName) {
  try {
    const model = client.getGenerativeModel({ model: modelName });
    const result = await model.generateContent("Say 'hello'");
    console.log(`✅ Success with ${modelName}:`, result.response.text());
  } catch (error) {
    console.log(`❌ Failed with ${modelName}:`, error.status, error.message);
  }
}

async function runTests() {
  await testModel("gemini-flash-latest");
}

runTests();
