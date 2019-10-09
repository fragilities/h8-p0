function fpb(angka1, angka2) {
  for(var i = Math.ceil(Math.min(angka1, angka2)/2); i >= 1; i--) {
    if(angka1%i == 0 && angka2%i == 0) return i;
  }

  return 'no fpb found';
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1