// [Exercises 11 (Auto)] Deret Aritmatika
// Zoe Zachary - Phase 0 - Week 3

function perkalianUnik(arr) {
  // you can only write your code here!

  var tempArr = [];
  var resultArr = [];
  var multiplicationValue = 1;

  for(var i in arr) {
    // reset multiplicationValue
    multiplicationValue = 1;

    // making new temporary array with current index's data removed
    tempArr = [...arr];
    tempArr.splice(i, 1);

    for(var j in tempArr) {
      multiplicationValue *= tempArr[j];
    }

    resultArr.push(multiplicationValue);
  }

  return resultArr;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]