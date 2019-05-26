# rmdir
remove directory by nodejs

## use  

```  
const rmdir = require('../lib/rmdir');

rmdir('./1').catch(console.error)

// or

// rmdir(`${__dirname}/1`).catch(console.error)

```  

## test  

> cd ./test  

> node test  

![被删除的文件夹目录结构](https://github.com/fuxingZhang/rmdir/blob/master/screenshots/被删除的文件夹目录结构.png)   

![删除文件的打印信息](https://github.com/fuxingZhang/rmdir/blob/master/screenshots/删除文件的打印信息.png)  

![删除文件的打印信息](https://github.com/fuxingZhang/rmdir/blob/master/screenshots/删除文件的打印信息2.png)  