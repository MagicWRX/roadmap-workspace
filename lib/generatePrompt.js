function generatePrompt(sections) {
  let prompt = `You are working on the Amazing Business ecosystem. Here are the pending tasks from BUSINESS_ROADMAP.md that need your attention:

`;

  for (const [section, tasks] of Object.entries(sections)) {
    if (tasks.length > 0) {
      prompt += `**${section}:**\n`;
      for (const task of tasks) {
        prompt += `- ${task}\n`;
      }
      prompt += '\n';
    }
  }

  prompt += `Please help implement these pending tasks. Focus on the highest priority items first.`;

  return prompt;
}

module.exports = { generatePrompt };