const fs = require('fs')
const path = require('path')
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

const currentEcosystemListPath = path.join(__dirname, '../ecosystem.json')
const currentList = parseJSONFile(currentEcosystemListPath)
const parsed = files.map((fileName => parseJSONFile(path.join(projectsPath, fileName))))

fs.writeFileSync(currentEcosystemListPath, JSON.stringify({ projects: parsed }, null, 2))