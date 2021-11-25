/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function (input, shuffleIndices) {
    let shuffled = new Array(shuffleIndices.length);

    const inputSplit = input.split("");
    inputSplit.forEach((letter, index) => {
        shuffled[shuffleIndices[index]] = letter;
        //shuffled += input[i];
    });

    return shuffled.join("");
};
