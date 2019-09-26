// [Exercises 2] Tantangan Array 1 (Mengakses Nilai dalam Array)
// Zoe Zachary

function balikString(str) {
  var temp = '';
  for(i = str.length-1; i >= 0; i--) temp = temp + str[i];

  return temp;
}

console.log(balikString(prompt('masukan string')));
