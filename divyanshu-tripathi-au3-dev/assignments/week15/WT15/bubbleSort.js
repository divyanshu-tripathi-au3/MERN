
var giventime = [2, 3, 9, 4, 5]
var score = [3, 5, 11, 6, 7]


// ================================================

function bubbleSort(k) {
    var sum = 0;
    for (var i = 0; i < giventime.length; i++) {
        for (var j = giventime.length - 1; j >= i; j--) {
            if (giventime[j] < giventime[j + 1]) {
                [giventime[j], giventime[j + 1]] = [giventime[j + 1], giventime[j]];
                [score[j], score[j + 1]] = [score[j + 1], score[j]];
            }
        }
    }
    for (let l = 0; l < k; l++) {
        sum += giventime[l];
    }
    return sum;
}
console.log(bubbleSort(3));