/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function (input) {
    let counts = {};
    for (const num of input) {
        //console.log(num);
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    output = -1;
    for (const [key, value] of Object.entries(counts)) {
        //console.log(`${key}: ${value}`);
        if (key == value && value > output) {
            output = value;
        }
    }
    //console.log(output);
    //console.log("###");
    return output;
};
d_integer([3, 5, 3, 3, 5, 1]);
