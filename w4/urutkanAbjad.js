function urutkanAbjad(str) {
  // var charArr = [];

  var strArr = [...str].sort(function(a, b) {return a.charCodeAt(0)-b.charCodeAt(0); });
  var sortedStr = '';

  for(var i in strArr) sortedStr = sortedStr + strArr[i];

  return sortedStr;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'