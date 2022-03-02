// console.log(module);


const age = 20
//每个自定义模块中都包含了module对象，里面存储了和当前模块有关的信息
//可以使用module.export将模块内的成员共享出去

//向module.export对象上挂载username属性
module.exports.username = 'zs';
//向module.export对象上挂载sayHi
module.exports.sayHi = function () {
    console.log('hi')
}
module.exports.age = age;

//让module.exports指向一个全新的对象，当外界导入本模块时，得到的结果永远以module。exports指向为准
module.exports = {
    nickname='小黑',
    sayHello() {
        console.log('hello')
    }
}