// [Exercises 9 (Auto)] Cari Mean
// Zoe Zachary - Phase 0 - Week 3

function cariMean(arr) {
  // you can only write your code here!

  var counter = 0;
  var value = 0;

  for(var i in arr) {
    value += arr[i];
    counter++;
  }

  return Math.ceil(value/counter);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7