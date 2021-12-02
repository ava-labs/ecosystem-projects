import fs from 'fs';
import fetch from 'node-fetch';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(
    import.meta.url));
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

const file = parseJSONFile(path.join(__dirname, './ecosystem-backup.json'))


file.projects.forEach(async(item) => {
    const resp = await fetch(item.imageURL)
    const imgFilePath = path.join(__dirname, `../img/${item.slug}.${item.imageURL.split('.').slice(-1)}`)
        // const fileStream = fs.createWriteStream(imgFilePath)
        // await new Promise((resolve, reject) => {
        //     resp.body.pipe(fileStream)
        //     resp.body.on("error", reject)
        //     fileStream.on("finish", resolve)
        // })

    item.imageURL = `/img/${item.slug}.${item.imageURL.split('.').slice(-1)}`
    fs.writeFileSync(`./projects/${item.slug}.json`, JSON.stringify(item, null, 2))
})