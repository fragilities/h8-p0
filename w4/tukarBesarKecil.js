function tukarBesarKecil(kalimat) {
  var kalimatArr = [];
  for(var i in kalimat) kalimatArr.push(kalimat[i]);

  kalimat = '';

  for(var i in kalimatArr) {
    if(kalimatArr[i] == kalimatArr[i].toUpperCase()) kalimatArr[i] = kalimatArr[i].toLowerCase();
    else kalimatArr[i] = kalimatArr[i].toUpperCase();

    kalimat = kalimat + kalimatArr[i];
  }

  return kalimat;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"