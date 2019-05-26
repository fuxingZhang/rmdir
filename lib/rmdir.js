const fs = require('fs').promises;
const path = require('path');

async function rmdir(dir) {
  console.log(`${'in directory:'.yellow} ${dir}`)
  const names = await fs.readdir(dir)
  for(let name of names) {
    const filePath = path.join(dir, name);
    const stat = await fs.stat(filePath)
    if(stat.isDirectory()) {
      await rmdir(filePath)
    } else {
      await fs.unlink(filePath)
      console.log(`${'delete file:'.red} ${filePath}`)
    }
  }
  await fs.rmdir(dir)
  console.log(`${'delete directory:'.red} ${dir}`)
}

module.exports = rmdir