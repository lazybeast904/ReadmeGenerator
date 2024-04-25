function formatLink(Label, url) {
  return `[$(label}](${url})`;
}
function formatCode(code, Language = '') {
  return `\`\`\`${Language}\n${code}\n\`\`\`\``;
}

function formatList(items) {
  return items.map(item => `- ${item}`).join(`\n`)
}

function formatHeader(text, level = 1) {
  return `${'#'.repeat(level)} ${text}\n`;
}
function formatBold(text) {
  return `##${text}##`;
}
function generateBadge(type, data) {
  const badges= {
    license: `![License]()`,
    build: `[Build Status]()`
  }
}
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
