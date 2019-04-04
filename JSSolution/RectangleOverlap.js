/*
    判断两个矩形是否重叠 矩形用{x,y,width,height}对象表示,其中xy是矩形某一顶点的坐标
 */

/**
 * @method isOverlap
 * @description 判断两个矩形是否在页面上重叠, 利用坐标差与width, height判断, 先判断不重叠,然后取反
 * @param {object} rectangleFir 第一个矩形
 * @param {object} rectangleSec 第二个矩形
 * @return {boolean} 是否重叠
 */
const isOverlap = (rectangleFir, rectangleSec) => {
    const judgeResult = rectangleFir.x > rectangleSec.x + rectangleSec.width ||
        rectangleFir.y > rectangleSec.y + rectangleSec.height;

    const otherCaseJudgeResult = rectangleSec.x > rectangleFir.x + rectangleFir.width ||
        rectangleSec.y > rectangleFir.y + rectangleFir.height;

    return !(judgeResult || otherCaseJudgeResult);
};