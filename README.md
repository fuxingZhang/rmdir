# rmdir
remove directory by nodejs  

## Install

```sh
$ npm i @zhangfuxing/rmdir
```  

## Useage  

### use nodejs fs  

```js
const rmdir = require('@zhangfuxing/rmdir');
const dir = 'xxx';

(async () => {
  await rmdir(dir);
})().catch(console.error);
```  

### use shell by nodejs child_process
```js
const rmdir = require('@zhangfuxing/rmdir/lib/shell');
const dir = 'xxx';

(async () => {
  await rmdir(dir);
})().catch(console.error);
```  

## Test

```sh
$ npm test
```  