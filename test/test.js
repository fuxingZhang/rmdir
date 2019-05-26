
require('../utils/index')

const rmdir = require('../lib/rmdir.no.console');
rmdir('./1').catch(console.error)

// rmdir(`${__dirname}/1`).catch(console.error)