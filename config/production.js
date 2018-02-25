'use strict';

const packageJson = require('../package.json');

module.exports = {
    debug: false,
    port: process.env.PORT,
    staticBasePath: `//${packageJson.name}.surge.sh/`
};
