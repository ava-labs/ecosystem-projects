import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { mapProjects } from './mapProjects';

const migrateFields = (item) => {
  const fieldMapper = {
    highlight: 'summary',
    logo: 'imageURL',
    website: 'websiteURL',
    twitter: 'twitterURL',
  };

  const newField = [];
  const deleteField = ['contact'];
  // Object.entries(fieldMapper).map(([dest, from]) => {
  //   item[dest] = item[from];
  //   delete item[from];
  // });
  // newField.forEach((name) => {
  //   item[name] = '';
  // });
  deleteField.forEach((name) => {
    delete item[name];
  });
  return item;
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

mapProjects(migrateFields);
