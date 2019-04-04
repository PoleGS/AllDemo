/*
    类名操作: 完成几个DOM元素类名操作的方法
    1. addClass(dom, name) : 给DOM元素添加类名name
    2. removeClass(dom, name) : 把DOM元素的类名删除
    3. hasClass(dom, name) : 判断DOM元素是否有类名name
 */

/**
 * @method addClass
 * @description 给dom元素添加类名
 * @param {object} dom
 * @param {string} name
 */
const addClass = (dom, name) => {
    dom.classList.add(name);
};

/**
 * @method removeClass
 * @description 删除一个元素的类名
 * @param dom
 * @param name
 */
const removeClass = (dom, name) => {
    dom.classList.remove(name);
};

const hasClass = (dom, name) =>{
    return dom.classList.contains(name);
};