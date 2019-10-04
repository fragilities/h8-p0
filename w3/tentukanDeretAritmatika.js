// [Exercises 11 (Auto)] Deret Aritmatika
// Zoe Zachary - Phase 0 - Week 3

function tentukanDeretAritmatika(arr) {
  // you can only write your code here!

  var difference = arr[1] - arr[0];

  // getting difference from next index - current index
  for(var i in arr) {

    // break out of the loop on last index because nothing to compare
    if(i == arr.length-1) break;
    
    // because the i is somehow a string, have to parse this into an integer
    i = parseInt(i);
    if(difference != (arr[i+1]-arr[i])) return false;
  }

  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false