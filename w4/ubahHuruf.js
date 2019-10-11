function ubahHuruf(kata) {
  var changedWord = '';
  var charCodeTemp = 0;

  for(var i in kata) {
    charCodeTemp = kata.charCodeAt(i);
    changedWord = changedWord + String.fromCharCode(charCodeTemp+1);
  }

  return changedWord;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu