
require('../utils/node_colors')

const rmdir = require('../lib/rmdir');
const path = require('path');

rmdir('./1').catch(console.error)   // window  and  linux

// rmdir(path.join(__dirname, './1')).catch(console.error)  // window  and  linux