function kaliTerusRekursif(angka) {
  var strAngka = angka.toString();

  if(strAngka.length == 1) return angka;

  var mult = 1;

  for(var i in strAngka) mult *= parseInt(strAngka[i]);

  return mult.toString().length == 1 ? mult : kaliTerusRekursif(mult);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6