const rmdir = require('../lib/rmdir.shell');
const path = require('path');

// rmdir('1').catch(console.error)   // window
// rmdir('./1').catch(console.error)   // linux

rmdir(path.join(__dirname, './1')).catch(console.error)  // window  and  linux