/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function (input) {
    differenceGroups = [];
    //console.log(input.sort());
    const findMinDifference = (arr) => {
        minDifference = 999;
        for (i = 0; i < input.length; i++) {
            for (j = 0; j < input.length; j++) {
                current = input[i];
                next = input[j];
                difference = Math.abs(current - next);
                if (difference <= minDifference && difference > 0) {
                    minDifference = difference;
                }
            }
        }
        return minDifference;
    };
    let minDiff = findMinDifference(input);
    //console.log(minDiff);

    const getDifferenceList = (minDiff, input) => {
        list = [];
        for (i = 0; i < input.length; i++) {
            for (j = 0; j < input.length; j++) {
                current = input[i];
                next = input[j];
                difference = Math.abs(current - next);
                if (difference <= minDiff && difference > 0) {
                    if (current < next) {
                        list.push([current, next]);
                    }
                }
            }
        }
        return list;
    };
    const difflist = getDifferenceList(minDiff, input);
    //console.log(difflist);
    difflist.sort();
    return difflist;
};
minPairs([1, -5, -10, 24, 19, -4, -14, 23]);
