function merge(str1, str2) {
    let result = [];


    while (str1.length && str2.length) {
        if (str1[0].length <= str2[0].length) {
            result.push(str1[0]);
            str1 = str1.slice(1);
        }
        else {
            result.push(str2[0]);
            str2 = str2.slice(1);
        }
    }

    while (str1.length) {
        result.push(str1.shift())
    } while (str2.length) {
        result.push(str2.shift());
    }
    return result;
}

// =========================================================

 
function mergeSort(str) {
    if (str.length < 2) {
        return str;
    }
    let mid = str.length / 2;
    let left = mergeSort(str.slice(0, mid))
    let right = mergeSort(str.slice(mid, str.length));
    return merge(left, right)
}
console.log(mergeSort(["ab", "cd", "e", "j", "asd", "ljffg", "df"]));