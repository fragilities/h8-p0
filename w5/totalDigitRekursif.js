function totalDigitRekursif(angka) {
  var strAngka = angka.toString();

  return strAngka == 'NaN' ? 0 : parseInt(strAngka[0]) + totalDigitRekursif(parseInt(strAngka.substring(1)));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5