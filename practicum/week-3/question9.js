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

var largestGroupsCount = (n) => {
    groups = [];
    for (let i = 0; i < n; i++) {
        let group = [];
        group.push(i);
        arr_sum = Array.from(n.toString())
            .map(Number)
            .reduce((val2, val2) => val1 + val2);
        if (arr_sum == i) {
            group.push(n[i]);
        }
        groups.push(group);
    }
    console.log(groups);
};
