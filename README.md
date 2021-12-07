# Ecosystem-Projects

## Avalanche Ecosystem

Welcome to The Avalanche Ecosystem- This repository is the source data for The Avalanche Ecosystem, located here <https://ecosystem.avax.network/>.

If you are interested in adding your project to the Avalanche Ecosystem page, please follow the guidelines below. Please ensure complete accuracy with all form questions. Inaccurate or incomplete submissions will not be accepted.

## Guidelines

Make a pull request with an addition of a file under /projects named {{slug}}.json and paste in the following

```json
{
  "name": "",
  "slug": "",
  "summary": "",
  "longSummary": "",
  "imageURL": "",
  "tags": [],
  "websiteURL": "",
  "twitterURL": "",
  "discordURL": "",
  "githubURL": "",
  "telegramURL": "",
  "status": "",
  "contact": ""
}
```

Upload the image to the `/img`  folder

image should be jpeg, png, or svg and does not exceed 200x200 and should be 1:1 aspect ratio

name(required): name of your project

slug(required): a unique identifier for you project, can be coingecko slug etc.

summary: 1-2 sentences describing this project. This is used on the card in the list page

longSummary: paragraph(s) describing project for individual project page

imageURL: reference to your logo from the root e.g. "/img/aave.png"

tag: possible values -

contact: an email address to the project

status: one of "live"|"coming soon"|"closed"
