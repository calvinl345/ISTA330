/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/
var print = console.log;

var runningSum = function (input) {
    const sumArray = [];
    for (i in input) {
        if (i == 0) {
            sumArray[i] = input[i];
        } else {
            sumArray[i] = sumArray[i - 1] + input[i];
        }
    }
    return sumArray;
};

//Test
let testQuestionOne = runningSum([5, 6, 1]);
console.log(testQuestionOne);
