require('dotenv').config();
const express = require('express');
const next = require('next');
const chalk = require('chalk');

const logger = require('./services/logger-service');

const { PORT, APP_NAME, NODE_ENV } = process.env;
const app = next({ dev: NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

const main = async () => {
  try {
    await app.prepare();
    const server = express();

    server.use('/', handle);

    server.listen(PORT, (err) => {
      if (err) throw err;
      logger.log(chalk`{green {bold ${APP_NAME}} started at {bold http://localhost:${PORT}}}`);
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

main();
