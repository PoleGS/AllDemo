/*
    在一维数组中取出取出一个或多个不相邻的数, 使其和最大,例如:
    Input: [2, 7, 9, 3, 1]
    Output: 12
    Explanation: Index0 + Index2 + Index4 = 2 + 9 + 1 = 12
 */

const rob = (nums) => {
    const moneyArr = [];
    //First Case nums.length = 1
    moneyArr[0] = nums[0];
    //Second Case nums.length = 2
    moneyArr[1] = Math.max(nums[0], nums[1]);
    //Third Case nums.length >= 3
    for (let i=2; i<nums.length; i++) {
        moneyArr[i] = Math.max(nums[i] + moneyArr[i-2], moneyArr[i-1]);
    }
    return moneyArr[nums.length - 1] || 0;
}