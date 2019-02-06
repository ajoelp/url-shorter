const express = require('express');
const path = require('path');
const fs = require('fs-extra');
const app = express();

// Check if the json file exists

const CONFIG_DIRECTORY =
  process.env.CFG_DIR || path.resolve(__dirname, './config');
const PORT = process.env.PORT || 8088;
const HOST = process.env.HOST || '0.0.0.0';

const filePath = path.resolve(CONFIG_DIRECTORY, 'urls.json');

if (!fs.existsSync(filePath)) {
  console.error(`No config file found at ${filePath}`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(filePath));

Object.entries(data).forEach(([path, url]) => {
  app.get(`/${path}`, (req, res) => res.redirect(url))
})

app.listen(PORT, HOST, () => console.log(`App listening on http://${HOST}:${PORT}`))
