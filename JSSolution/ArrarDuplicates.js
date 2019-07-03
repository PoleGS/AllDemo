//数组去重

let testArr = [];

for (let i = 0; i < 1000000; i++) {
    testArr.push(Math.floor(100000 * Math.random()));
}

//思路一: 数组双重for循环
const doubleFor_removeDuplicates = (arr) => {
    let resultArr = [], isRepeat;
    for (let i of arr) {
        isRepeat = false;
        for (let j of resultArr) {
            if (resultArr[j] === arr[i]) {
                isRepeat = true;
                break;
            }
        }
        !isRepeat && resultArr.push(arr[i]);
    }
    return resultArr;
};

//利用filter,indexOf
const filter_removeDuplicates = (arr) => {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
};

//排序 不推荐 改变原数组 可能需要深拷贝实际中
const sort_removeDuplicates = (arr) => {
    const resultArr = [];
    arr.sort();
    for (let currentItem of arr) {
        arr[currentItem] !== arr[currentItem + 1] && resultArr.push(currentItem);
    }
};

//ES6 includes方法
const includes_removeDuplicates = (arr) => {
    const resultArr = [];
    for (let currentItem of arr) {
        !resultArr.includes(currentItem) && resultArr.push(currentItem);
    }
    return resultArr;
};

//sort+reduce 不推荐 sort改变原数组
const reduce_removeDuplicates = (arr) => {
    return arr.sort().reduce((prev, cur) => {
        if (prev.length === 0 || prev[prev.length - 1] !== cur) {
            prev.push(cur);
        }
    }, []);
};

//利用Map
const map_removeDuplicates = (arr) => {
    const resultArr = [], temp = new Map();
    for (let cur of arr) {
        if (!temp.has(cur)) {
            temp.set(cur, 1);
            resultArr.push(cur);
        }
    }
    return resultArr;
};

//利用Set 推荐
const set_removeDuplicates = (arr) => {
  return Array.from(new Set(arr));
};

//对象属性不重复 1 和 '1'不是重复项
const objectPropertis_removeDuplicates = (arr) => {
    const resultArr = [], temp = {};
    for (let cur of arr) {
        let type = typeof cur
        if (!temp[cur]) {
            temp[cur] = [type];
            resultArr.push(cur);
        }else if (!temp[cur].includes(type)) {
            temp[cur].push(type);
            resultArr.push(cur);
        }
    }
    return resultArr;
};

/**
 * @description 计算去重所需的时间
 * @param {Array<T>} arr 目标数组
 * @param {function} removeDuplicates 去重的方法
 */
const calcRunTime = (arr, removeDuplicates) => {
    const startTime = new Date().getTime();
    removeDuplicates(arr);
    const endTime = new Date().getTime();
    console.log(removeDuplicates.name, '去重时间: ', endTime - startTime);
};


calcRunTime( testArr, objectPropertis_removeDuplicates);
calcRunTime( testArr, set_removeDuplicates);
calcRunTime( testArr, map_removeDuplicates);
