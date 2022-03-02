
//由于module.exports单词较复杂，为简化代码，node提供了exports对象。
//默认情况下，exports和module.exports指向同一个对象
//最终结果还是以module.exports指向的对象为准


/* console.log(exports);
console.log(module.exports)

console.log(exports === module.exports); */


const username = 'zs'

module.exports.username = username
exports.age = 20
exports.sayHi = function () {
    console.log('hello');
}

//