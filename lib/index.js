const fs = require('fs').promises;
const path = require('path');

async function rmdir(dir) {
  const names = await fs.readdir(dir)
  for(let name of names) {
    const filePath = path.join(dir, name);
    const stat = await fs.stat(filePath)
    if(stat.isDirectory()) {
      await rmdir(filePath)
    } else {
      await fs.unlink(filePath)
    }
  }
  await fs.rmdir(dir)
}

module.exports = rmdir