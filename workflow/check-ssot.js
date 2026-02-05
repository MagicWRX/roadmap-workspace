#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const DOCS_ROOT = path.resolve(__dirname, '..', '..', 'DOCs');
const ROADMAP_PATH = path.resolve(DOCS_ROOT, 'BUSINESS', 'BUSINESS_ROADMAP.md');
const WORKSPACES_PATH = path.resolve(DOCS_ROOT, 'BUSINESS', 'BUSINESS_WORKSPACES.md');

function checkDocsIntegrity() {
  console.log('🔍 Checking SSOT Documentation Integrity...\n');

  // Check if key docs exist
  const docs = [
    { path: ROADMAP_PATH, name: 'BUSINESS_ROADMAP.md' },
    { path: WORKSPACES_PATH, name: 'BUSINESS_WORKSPACES.md' }
  ];

  let allGood = true;

  for (const doc of docs) {
    if (fs.existsSync(doc.path)) {
      console.log(`✅ ${doc.name} exists`);
    } else {
      console.log(`❌ ${doc.name} MISSING`);
      allGood = false;
    }
  }

  // Check last reviewed date
  if (fs.existsSync(WORKSPACES_PATH)) {
    const content = fs.readFileSync(WORKSPACES_PATH, 'utf8');
    const today = new Date().toISOString().split('T')[0];
    const lastReviewedMatch = content.match(/lastReviewed:\s*"([^"]+)"/);

    if (lastReviewedMatch) {
      const lastReviewed = lastReviewedMatch[1];
      console.log(`📅 Last reviewed: ${lastReviewed}`);

      if (lastReviewed !== today) {
        console.log(`⚠️  WARNING: Docs not reviewed today. Please review before making changes.`);
      }
    }
  }

  console.log('\n📋 Pre-Edit Checklist:');
  console.log('1. Have you read BUSINESS_ROADMAP.md?');
  console.log('2. Have you checked BUSINESS_WORKSPACES.md?');
  console.log('3. Do your changes align with current priorities?');
  console.log('4. Have you verified against Gold Standards?');

  if (!allGood) {
    console.log('\n❌ CRITICAL: Missing SSOT docs. Cannot proceed with changes.');
    process.exit(1);
  }

  console.log('\n✅ SSOT Check Complete. Proceed with caution.');
}

if (require.main === module) {
  checkDocsIntegrity();
}

module.exports = { checkDocsIntegrity };