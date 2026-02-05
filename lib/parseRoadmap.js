const fs = require('node:fs');
const path = require('node:path');

function parseRoadmap(roadmapPath) {
  const content = fs.readFileSync(roadmapPath, 'utf8');
  const lines = content.split(/\r?\n/);

  const sections = {};
  let currentSection = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for section headers
    const sectionMatch = line.match(/^##\s+(.+)$/);
    if (sectionMatch) {
      currentSection = sectionMatch[1].trim();
      sections[currentSection] = [];
      continue;
    }

    // If we're in a section, look for unchecked checkboxes
    if (currentSection && /^\s*-\s*\[\s*\]\s*(.+)$/.test(line)) {
      const taskMatch = line.match(/^\s*-\s*\[\s*\]\s*(.+)$/);
      if (taskMatch) {
        sections[currentSection].push(taskMatch[1].trim());
      }
    }
  }

  return sections;
}

module.exports = { parseRoadmap };