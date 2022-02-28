const path = require('path');
const fs = require('fs');

//../抵消前面一层路径
const pathStr = path.join('/a', '/b', '/c', '../', './d', '/e');
console.log(pathStr);

//凡是涉及到路径拼接，都要用path.join，不要用+

fs.readFile(path.join(__dirname, '/1.txt'), 'utf-8', function (err, data) {
    if (err) {
        return console.log(err.message);
    }
    console.log(data);
})