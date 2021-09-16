/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function (input) {
    let largestNum = Math.max(...input);
    //console.log(input);
    let index = input.indexOf(largestNum);
    input.splice(index, largestNum);
    //console.log(input);
    //console.log(largestNum);
    let isTwice = true;
    input.forEach((number) => {
        //console.log(number);
        //console.log(number * 2);
        //console.log(number * 2 >= largestNum);
        if (number * 2 >= largestNum) {
            //console.log("should return false");
            isTwice = false;
        }
    });
    return isTwice;
};
