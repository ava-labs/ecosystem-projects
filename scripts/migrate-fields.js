import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(
  fileURLToPath(
    // @ts-ignore
    import.meta.url
  )
);
const projectsPath = path.join(__dirname, '../projects');

const parseJSONFile = (path) => {
  try {
    const file = fs.readFileSync(path, 'utf8');
    return JSON.parse(file);
  } catch (e) {
    console.error(`error parsing ${path}`);
    console.error(e);
    process.exit(1);
  }
};
const mapProjects = (mapper, dryRun = false) => {
  const files = fs.readdirSync(projectsPath);
  files
    .map((fileName) => parseJSONFile(path.join(projectsPath, fileName)))
    .map(mapper)
    .forEach((item) => {
      !dryRun
        ? fs.writeFileSync(
            `./projects/${item.slug}.json`,
            JSON.stringify(item, null, 2)
          )
        : console.log(`item`, item);
    });
};

const migrateFields = (item) => {
  const fieldMapper = {
    highlight: 'summary',
    logo: 'imageURL',
    website: 'websiteURL',
    twitter: 'twitterURL',
  };

  const newField = ['contact', 'summary', 'docs', 'cmc', 'date', 'token'];
  const deleteField = ['longSummary'];
  Object.entries(fieldMapper).map(([dest, from]) => {
    item[dest] = item[from];
    delete item[from];
  });
  newField.forEach((name) => {
    item[name] = '';
  });
  deleteField.forEach((name) => {
    delete item[name];
  });
};

const migrateTags = (item) => {
  const tagMapping = {
    ['tooling']: 'tools',
    ['trading-bot']: 'bot-dapp',
    ['wealth-management']: 'portfolio',
  };
  return {
    ...item,
    tags: item.tags.map((tag) => tagMapping[tag] ?? tag),
  };
};

mapProjects(migrateTags);