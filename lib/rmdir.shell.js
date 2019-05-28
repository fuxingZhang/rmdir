const { exec } = require('child_process');
const platform = process.platform;

// cmd 'rd /s /q', powershell 'rd -r', powershell是cmd的超集
// in window git bash, process.env._ === '/usr/bin/winpty'
const command = platform === 'win32' ? 'rd /s /q' : 'rm -r';

function rmdir(path) {
  return new Promise((resolve, reject) => {
    exec(`${command} ${path}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return
      }
      console.log(`stderr: ${stderr}`);
      resolve(stdout);
    });
  })
}

module.exports = rmdir