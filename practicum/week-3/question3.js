/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = (n) => {
    let arr = [];
    let placeHolder;
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j == i) {
                arr[i].push(1);
            } else {
                tmp =
                    (!!arr[i - 1][j - 1] ? arr[i - 1][j - 1] : 0) +
                    (!!arr[i - 1][j] ? arr[i - 1][j] : 0);
                arr[i].push(tmp);
            }
        }
    }
    return arr;
};
