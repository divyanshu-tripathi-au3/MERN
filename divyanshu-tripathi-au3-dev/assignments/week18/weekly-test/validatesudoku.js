// Validate Sudoku
// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// 1) Each row must contain the digits 1-9 without repetition.
// 2) Each column must contain the digits 1-9 without repetition.
// 3) Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// The Sudoku board could be partially filled, where empty cells are filled with the character '.'
// Input:
// [
//  ["5","3",".",".","7",".",".",".","."],
//  ["6",".",".","1","9","5",".",".","."],
//  [".","9","8",".",".",".",".","6","."],
//  ["8",".",".",".","6",".",".",".","3"],
//  ["4",".",".","8",".","3",".",".","1"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".","6",".",".",".",".","2","8","."],
//  [".",".",".","4","1","9",".",".","5"],
//  [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Input:
// [
//  ["8","3",".",".","7",".",".",".","."],
//  ["6",".",".","1","9","5",".",".","."],
//  [".","9","8",".",".",".",".","6","."],
//  ["8",".",".",".","6",".",".",".","3"],
//  ["4",".",".","8",".","3",".",".","1"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".","6",".",".",".",".","2","8","."],
//  [".",".",".","4","1","9",".",".","5"],
//  [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. 
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.


var isValidSudoku = function(board) {
    // col
    for(var i = 0; i < board.length; i++){
        var dupCheck = [];

        for(var j = 0; j < board[0].length; j++){
            if(board[i][j] !== '.' && dupCheck[board[i][j]]){
                return false;
            } else {
                dupCheck[board[i][j]] = true;
            }
        }
    }

    for(i = 0; i < board.length; i++){
        dupCheck = [];

        for(j = 0; j < board[0].length; j++){
            if(board[j][i] !== '.' && dupCheck[board[j][i]]){
                return false;
            } else {
                dupCheck[board[j][i]] = true;
            }
        }
    }

    for(i = 0; i < board.length; i+=3){
        for(j = 0; j < board.length; j+=3){
            dupCheck = [];

            for(var x = 0; x < 3; x++){
                for(var y = 0; y < 3; y++){
                    if(board[i+x][j+y] !== '.' && dupCheck[board[i+x][j+y]]){
                        return false;
                    } else {
                        dupCheck[board[i+x][j+y]] = true;
                    }
                }
            }
        }
    }

    return true;

};

console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]))

console.log(isValidSudoku([
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]))