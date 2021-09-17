/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

const largestGroupsCount = (n) => {
    let groups = {};
    let lengths = [];
    for (let i = 1; i < n + 1; i++) {
        groups[i] = [];
    }
    for (let i = 1; i < n + 1; i++) {
        value = i;
        sum = 0;
        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        //console.log(sum);
        groups[sum].push(i);
        lengths.push(groups[sum].length);
    }
    const countArrayOccurences = (arr) => {
        const counts = {};
        for (const num of arr) {
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        return counts;
    };
    //console.log(groups);
    //console.log(lengths);
    let counts = countArrayOccurences(lengths);
    //console.log(counts);
    let countsArr = Object.keys(counts);
    largestKey = Math.max(...countsArr);
    return counts[largestKey];
};
//console.log(largestGroupsCount(12));
