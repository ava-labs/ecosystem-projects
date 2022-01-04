import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(
  fileURLToPath(
    // @ts-ignore
    import.meta.url
  )
);
export const projectsPath = path.join(__dirname, '../projects');

export const parseJSONFile = (path) => {
  try {
    const file = fs.readFileSync(path, 'utf8');
    return JSON.parse(file);
  } catch (e) {
    console.error(`error parsing ${path}`);
    console.error(e);
    process.exit(1);
  }
};
export const mapProjects = (mapper, dryRun = false) => {
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
