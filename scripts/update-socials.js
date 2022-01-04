import fs from 'fs';
import papa from 'papaparse';
import { mapProjects } from './mapProjects.js';
const text = fs.readFileSync('./data/ecosystem-socials.csv', 'utf8');

const parsed = papa.parse(text, { header: true });

const keyByName = parsed.data.reduce((agg, next) => {
  return {
    ...agg,
    [next['Project Name']]: next,
  };
}, {});

mapProjects((item) => {
  const newSocials = keyByName[item.name];
  if (!newSocials) return item;
  const newItem = {
    ...item,
    website: newSocials.Link || item.website,
    twitter: newSocials.Twitter || item.twitter,
    telegram: newSocials.Telegram || item.telegram,
    discord: newSocials.Discord || item.discord,
    github: newSocials.Github || item.github,
  };
  return newItem;
});
