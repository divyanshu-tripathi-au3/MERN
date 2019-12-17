function binarySearch(arr, element, flag) {
    let left = 0;
    let right = arr.length - 1
    let count = 0;
    let occurance;

    const result = {}
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        count++;


        if (arr[mid] == element) {
            occurance = mid;
            if (flag == "lastelement") {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else {

            if (array[mid] > element) {
                right = mid - 1
            } else {
                left = mid + 1;
            }
        }
    }
    result.occurance = occurance;
    return result;
}
// =================================================

let array = [2, 5, 5, 5, 6, 6, 7]
function count(array, target) {
    let output = (binarySearch(array, target, "lastelement").occurance - binarySearch(array, target, "firstelement").occurance) + 1
    let result = {}
    result.output = output;
    return result;
}
console.log(count(array, 5));