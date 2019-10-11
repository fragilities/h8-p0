function urutkanAbjad(str) {
  var charArr = [];

  for(var i in str) {
    charArr.push(str[i]);
  }

  charArr.sort(function(a, b) { return a.charCodeAt(0)-b.charCodeAt(0); });

  var strTemp = '';
  for(var i in charArr) strTemp = strTemp + charArr[i];

  return strTemp;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'