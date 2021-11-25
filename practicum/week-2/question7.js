/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function (input) {
    const findPairs = (arr) => {
        var res = [],
            l = arr.length;
        for (var i = 0; i < l; ++i)
            for (var j = i + 1; j < l; ++j) res.push([arr[i], arr[j]]);
        return res;
    };
    //    const findMax = (pairs) => {
    //        let max = 0;
    //        for (i = 0; i < pairs.length; i++) {
    //            for (var j = 0; i < pairs.length; ++j) {
    //                let sum = Math.min(pairs[i]) + Math.min(pairs[j]);
    //                if (sum > max) {
    //                    max = sum;
    //                }
    //            }
    //        }
    //        return max;
    //    };
    let pairs = findPairs(input);
    print(pairs);
    let maxSumOfPairs = findMax(pairs);
    //return maxSumOfPairs;
};
