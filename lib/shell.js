const util = require('util');
const exec = util.promisify(require('child_process').exec);
const platform = process.platform;
const path = require('path');

// cmd 'rd /s /q', powershell 'rd -r', powershell是cmd的超集
// in window git bash, process.env._ === '/usr/bin/winpty'
const command = platform === 'win32' ? 'rd /s /q' : 'rm -r';

async function rmdir(dir) {
  const { stdout, stderr } = await exec(`${command} ${path.resolve(dir)}`);
  // console.log('stdout:', stdout);
  // console.error('stderr:', stderr);
}

module.exports = rmdir