function checkAB(num) {
  // you can only write your code here!
  var markerA = [];
  var markerB = [];

  for(var i in num) {
    if(num[i].toLowerCase() == 'a') markerA.push(i);
    else if(num[i].toLowerCase() == 'b') markerB.push(i);
  }

  for(var i in markerA) {
    for(var j in markerB) {
      if(Math.abs(markerA[i]-markerB[j]) == 4) return true;
    }
  }

  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false