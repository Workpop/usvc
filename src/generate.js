const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

export function generate(templateName, context) {
  const templateSource = fs.readFileSync(path.join(__dirname, '../templates', `${templateName}.template`), { encoding: 'utf8'});
  const template = Handlebars.compile(templateSource);
  return template(context);
}

export function generateAndWrite(templateName, context, outputPath) {
  const content = generate(templateName, context);
  return fs.writeFile(outputPath, content);
}

export function readConfig() {
  const configPath = path.join(process.cwd(), '.usvc');
  if (!fs.existsSync(configPath)) {
    throw new Error('.usvc file not found');
  }

  return JSON.parse(fs.readFileSync(configPath));
}
