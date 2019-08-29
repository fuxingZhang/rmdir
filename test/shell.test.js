const assert = require('assert');
const rmdir = require('../lib/shell');
const fs = require('fs');

describe('#indexOf()', function () {
  const dir = './test/dir';
  const filename = 'text.js';
  const filepath = `${dir}/${filename}`;

  before(() => {
    fs.mkdirSync(dir);
    assert(fs.existsSync(dir) === true);

    fs.writeFileSync(filepath, 'test');
    assert(fs.existsSync(filepath) === true);
  });

  it('rmdir.shell should ok', async () => {
    try {
      await rmdir(dir);
    } catch (error) {
      assert(false)
    }

    assert(fs.existsSync(dir) === false);
  });
});