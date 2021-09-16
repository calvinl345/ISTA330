/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function (input) {
    console.log(input);
    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] > input[i + 1]) {
            increasing = false;
        }
        if (input[i] < input[i + 1]) {
            decreasing = false;
        }
    }
    return increasing || decreasing;
};

isMonotonic([12, 6, 2, 2, 2, 3]);
