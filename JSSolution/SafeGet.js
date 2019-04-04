/*
    访问一个对象较深的层次, 可以安全的获取无限多层次的数据, 一旦数组不存在,不会报错,返回undefined,例如:
    var data = { a: { b: { c: 'ScriptOJ' } } }
    safeGet(data, 'a.b.c') // => scriptoj
    safeGet(data, 'a.b.c.d') // => 返回 undefined
    safeGet(data, 'a.b.c.d.e.f.g') // => 返回 undefined
    console.log('ScriptOJ') // => 打印 ScriptOJ
    完成这个safeGet(data, path)函数,实现以上的要求
 */

const safeGet = (data, path) => {
    try {
        return path.split('.').reduce((data, key) => data[key], data);
    }  catch (e) {
        return void 666;
    }
};

/*
    void 是js中定义的一个操作符, 后面接一个表达式, void会立即执行后面的表达式并返回undefined
    为什么不直接用undefined, 因为undefined是一个标识符,在某些环境下可能重新被赋值,所以void更保险
 */