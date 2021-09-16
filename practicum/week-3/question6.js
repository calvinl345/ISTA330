/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function (input) {
    const mNumber = input.length / 2;
    let mElementIndex = -1;
    let counts = {};
    for (const num of input) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
        if (counts[num] > mNumber) {
            mElementIndex = input.indexOf(num);
        }
    }
    if (mElementIndex === -1) {
        return mElementIndex;
    } else {
        return input[mElementIndex];
    }
};
