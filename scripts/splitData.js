const fs = require('fs')
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

const file = parseJSONFile('ecosystem-backup.json')
console.log('file=', file);

file.projects.forEach((item) => {
    fs.writeFileSync(`./projects/${item.slug}.json`, JSON.stringify(item, null, 2))
})