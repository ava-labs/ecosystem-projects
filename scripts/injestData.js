const fs = require('fs');
try {

    const text = fs.readFileSync('../../Downloads/csvjson.json', 'utf8')
    const textParsed = JSON.parse(text)
    const finalData = {
        projects: textParsed.map(proj => ({
            name: proj.Name,
            slug: proj.Slug,
            summary: proj['Project Summary'],
            longSummary: "",
            imageURL: proj['Main Project Image'],
            tags: proj['Category'].split("; "),
            websiteURL: proj['Website'],
            twitterURL: "",
            discordURL: "",
            githubURL: "",
            telegramURL: "",
            status: "",
            contact: ""
        }))
    }

    fs.writeFileSync('./ecosystem-backup.json', JSON.stringify(finalData, null, 2))

} catch (e) {
    console.log('e=', e);

}