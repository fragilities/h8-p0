function digitPerkalianMinimum(angka) {
  var digit1 = 0;
  var digit2 = 0;
  var totalDigit = 0;
  var leastDigit = 100;

  for(var i = 1; i <= angka; i++) {
    if(angka%i == 0) {
      digit1 = i.toString().length;
      digit2 = (angka/i).toString().length;
      totalDigit = digit1+digit2;

      if(leastDigit > totalDigit) leastDigit = totalDigit;
    }
  }
  
  return leastDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2