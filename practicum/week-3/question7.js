/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = (M) => {
    const rows = M.length;
    const cols = M[0].length;
    const grid = [];
    for (let j = 0; j < cols; j++) {
        grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[j][i] = M[i][j];
        }
    }
    return grid;
};
