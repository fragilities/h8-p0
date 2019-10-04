// [Exercises 8 (Auto)] Pasangan Angka Terbesar
// Zoe Zachary - Phase 0 - Week 3

function pasanganTerbesar(num) {
  // you can only write your code here!

  // make strNum
  var strNum = num.toString();

  // variables for value comparison
  var biggestValue = 0;
  var currentPair = 0;
  var strNumTemp = '';

  // computing the biggest value pair
  for(var left = 0, right = left+2; left < strNum.length-1; left++, right++) {
    strNumTemp = strNum.slice(left, right);
    currentPair = parseInt(strNumTemp);

    if(biggestValue < currentPair) biggestValue = currentPair;
  }

  return biggestValue;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99