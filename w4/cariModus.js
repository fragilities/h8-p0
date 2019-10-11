function cariModus(arr) {
  var numArr = [];
  var numObj = {};

  var numFound = false;
  var aboveOne = false;
  var highestNum = 0;
  var highestFreq = 0;

  for(var i in arr) {
    numFound = false;

    // search if numArr already have same num, +1 freq if existing num is found
    // aboveOne will be set true because finding a match means a num's freq has more than 1 value
    for(var j in numArr) {
      if(numArr[j]['num'] == arr[i]) {
        numArr[j]['freq'] += 1;
        numFound = true;
        aboveOne = true;
      }
    }

    // if num is not found, make a new obj for that num, and insert it into numArr
    if(numFound === false) {
      numObj = {};
      numObj['num'] = arr[i];
      numObj['freq'] = 1;
      numObj['arrIndex'] = numArr.length;

      numArr.push(numObj);
    }
  }

  // if numArr only has 1 obj, return -1
  // if numArr has more than 1 obj but no number shows up more than once, return -1
  if(numArr.length == 1) return -1;
  else if(aboveOne === false) return -1;
  else {
    // loop through numArr to check which leftmost number is the highest
    for(var i in numArr) {
      if(highestFreq < numArr[i]['freq']) {
        highestNum = numArr[i]['num'];
        highestFreq = numArr[i]['freq'];
      }
    }

    return highestNum;
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1