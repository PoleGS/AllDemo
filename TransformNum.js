/*
将数字转换成中文大写表示, 处理到万级别.例如:
Input: 12345
Output: 一万两千三百四十五
 */

const num = 10030;

const toChineseNum = (num) => {
    const keys = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const count = ['', '十', '百', '千'];
    let str = '',
        nums = num.toString().split('').reverse();

    nums.map((value, index) =>{
        str = keys[value] +
            (value == 0 ? '' : count[index > 3 ? index % 4 : index]) +
            (index == 4 ? '万' : '') +
            str;
        console.log(str);
    });

    return str.replace(/零(?=零)|零$|零(?=万)/g, '');
};

/**
 * 以56789为例 需要输出五万六千七百八十九
 * 第一步: 变成五六七八九
 * 首先思考: 怎么把数字变成汉字 0 - 零 1- 一...
 * 思路: 数字可以表示一个数组的index, 所以可以把index与数组的每一项对应,从而达到上述的目的
 * 这个数组如下:
 * const keys = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
 * keys[n] = n的数字大写, 但是给的是一个数值,所以下一步需要把这个数值分成一个个0-9的数字,然后每
 * 一个数字可以去在keys这个数组中取出自己的大写的汉字, 所以联想到map方法,所以把这个数值转换成数组
 * const nums = num.toString().split('');
 * 接下来要加上单位
 */

console.log(toChineseNum(num));