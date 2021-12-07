import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(
    import.meta.url));
const projectsPath = path.join(__dirname, "../projects")
const files = fs.readdirSync(projectsPath)

const parseJSONFile = (path) => {
    try {
        const file = fs.readFileSync(path, 'utf8')
        return JSON.parse(file)
    } catch (e) {
        console.error(`error parsing ${path}`)
        console.error(e)
        process.exit(1)
    }
}

/* 

*/

const fieldMapper = {
  highlight: "summary",
  logo: "imageURL",
  website: "websiteURL",
  twitter: "twitterURL",
  telegram: 'telegramURL',
  github: "githubURL",
  discord: "discordURL",
}

const newField = ['contact', 'summary', 'docs', 'cmc', 'date', 'token']

const parsed = files.map((fileName => parseJSONFile(path.join(projectsPath, fileName)))).forEach((item) => {
  Object.entries(fieldMapper).map(([dest, from]) => {

    item[dest] = item[from]
    delete item[from]
  })
  newField.forEach(name => {item[name] = ""})
  fs.writeFileSync(`./projects/${item.slug}.json`, JSON.stringify(item, null, 2))

})




