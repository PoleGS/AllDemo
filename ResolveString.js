/*
    解析字符串: 把一个字符串中所有:到.的子串解析出来,然后放到一个数组中.例如:
    Input: 'My name is: Jerry. My age is : 12.'
    output: ['Jerry', '12']
    注意: ;和.之间不包含;和.
 */


//利用正则表达式判断
const extractStr = (str) => {
    const reg = /:([^\.:]*)\./g;
    const result = [];
    let regRes = null;
    while (regRes = reg.exec(str)) {
        result.push(regRes[1]);
    }
    return regRes;
};

/*
1. 正则表达式:
    可以用来验证数据的有效性, 替换文本, 根据模式匹配查找特定的字符串
    由普通字符串以及元字符组成的文字模式
    创建方式: 字面量: const reg = /pattern/flags;  pattern: 正则表达式, flags: 修饰符
    修饰符: i => 忽略大小写 m => 多行匹配 g => 全局匹配
    ^在字符模式集合中代表取反的意思
    exec(): 返回一个null或者Array类型的数据 当目标字符串与正则匹配没有符合的时候,就返回null
    如果匹配成功,返回一个数组,将完全匹配成功的文本作为第一项, 正则括号里匹配成功的作为数组填充到后面
 */
