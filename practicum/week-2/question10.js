/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function (n) {
    const str = "" + n;

    const split = str.split("").map((i) => parseInt(i));
    const max = Math.max(...split);
    const min = Math.min(...split);

    return max - min;
};
