var items = ["ab", "cd", "e", "j", "asd", "ljffg", "df"]
function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[0];
  var left = [];
  var right = [];
  for (var i = 1; i < array.length; i++) {
    array[i].length < pivot.length ? left.push(array[i]) : right.push(array[i]);
  }
  return quicksort(left).concat(pivot, quicksort(right));
};

console.log(quicksort(items));