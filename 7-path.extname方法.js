const path = require('path');

const fpath = '/a/b/c/index.html';

//获取文件的扩展名
const fext = path.extname(fpath);
console.log(fext);