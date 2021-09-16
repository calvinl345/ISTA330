/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = (input) => {
    let currentSum = 0;
    let largestSum = 0;
    for (let number of input) {
        currentSum = Math.max(0, currentSum + number);
        largestSum = Math.max(largestSum, currentSum);
    }
    return largestSum;
};

largestSubarray([-12, 3, -1, 5, -2, 1, -7]);
