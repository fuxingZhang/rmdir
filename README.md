# rmdir
remove directory by nodejs

## use fs  

```  js
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
```  

## use child_process.exec

```  js
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
```  

## test  

> cd ./test  

> node test  

![被删除的文件夹目录结构](https://github.com/fuxingZhang/rmdir/blob/master/screenshots/被删除的文件夹目录结构.png)   

![删除文件的打印信息](https://github.com/fuxingZhang/rmdir/blob/master/screenshots/删除文件的打印信息.png)  

