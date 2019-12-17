// Given an n x n matrix .In the given matrix, you have to print the elements of the matrix in the snake pattern.
// Input :mat[][] = [[10, 20, 30, 40],
//                   [15, 25, 35, 45],
//                   [27, 29, 37, 48],
//                   [32, 33, 39, 50]];
// Output : 10 20 30 40 45 35 25 15 27 29
//         37 48 50 39 33 32


function snakeorder(array){

    return array.map((item, index) => index % 2 ==! 0 ? item.reverse() : item).join().split(',')
}

console.log(snakeorder([[10, 20, 30, 40],[15, 25, 35, 45],[27, 29, 37, 48], [32, 33, 39, 50]]))