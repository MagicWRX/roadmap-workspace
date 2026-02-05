#!/usr/bin/env node
const path = require('node:path');
const { parseRoadmap } = require('../lib/parseRoadmap');
const { generatePrompt } = require('../lib/generatePrompt');

const ROADMAP_PATH = path.resolve(__dirname, '..', '..', 'DOCs', 'BUSINESS', 'BUSINESS_ROADMAP.md');

function main() {
  try {
    const sections = parseRoadmap(ROADMAP_PATH);
    const prompt = generatePrompt(sections);
    console.log(prompt);
  } catch (error) {
    console.error('Error parsing roadmap:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
