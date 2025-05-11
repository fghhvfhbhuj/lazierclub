// config.js
require('dotenv').config(); // 读取 .env 文件并注入 process.env

module.exports = {
  githubToken: process.env.GITHUB_TOKEN,
  apiUrl: process.env.API_URL,
  projectName: process.env.PROJECT_NAME,
};
