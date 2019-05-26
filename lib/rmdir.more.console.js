const fs = require('fs').promises;
const path = require('path');

async function rmdir(dir) {
  console.log(`${'in directory:'.yellow} ${dir}`)
  const names = await fs.readdir(dir)
  console.log(`file names: `.green)
  console.log(names)
  for(let name of names) {
    const filePath = path.join(dir, name);
    console.log(`${'file path:'.green} ${filePath}`)
    const stat = await fs.stat(filePath)
    console.log(`${'is file:'.blue} ${stat.isFile()}`)
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