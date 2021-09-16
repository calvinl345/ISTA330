/*
Given an array of integers, 
return true if the array contains any duplicates.
Your function should return true 
if any value appears at least twice 
in the array, 
and it should return false 
if every element is distinct.
 
Example:
 input: [19,1,1,23,23,4,3,23,1,2]
 output: true
*/

var hasDuplicates = (input) => {
    let unique_input = new Set(input);
    //console.log(input);
    //console.log(unique_input);

    if (unique_input.size < input.length) {
        //console.log("true");
        return true;
    } else {
        //console.log("true");
        return false;
    }

    //let result = false;
    //let findDuplicates = (input) =>
    //    input.filter((item, index) => input.indexOf(item) != index);
    //console.log(findDuplicates(input));
    //if (findDuplicates(input) > 1) {
    //    result = true;
    //}
    //return result;
};

//hasDuplicates([3, 5, 90, 21, 3]);
