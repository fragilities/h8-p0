function changeVocals (str) {
  var changedVocals = '';

  for(var i in str) {
    // check if the char is an uppercase
    if(str[i] == 'a' || str[i] == 'A' || str[i] == 'i' || str[i] == 'I' || str[i] == 'u' || str[i] == 'U' || str[i] == 'e' || str[i] == 'E' || str[i] == 'o' || str[i] == 'O')
      changedVocals = changedVocals + String.fromCharCode(str[i].charCodeAt(0)+1);
    else changedVocals = changedVocals + str[i];
  }

  return changedVocals;
}

function reverseWord (str) {
  var strArr = [];
  for(var i in str) strArr.push(str[i]);

  strArr.reverse();

  var reversedWord = '';

  for(var i in strArr) reversedWord = reversedWord + strArr[i];

  return reversedWord;
}

function setLowerUpperCase (str) {
  var inversedCaseStr = '';

  for(var i in str) {
    if(str[i] == str[i].toLowerCase()) inversedCaseStr = inversedCaseStr + str[i].toUpperCase();
    else inversedCaseStr = inversedCaseStr + str[i].toLowerCase();
  }

  return inversedCaseStr;
}

function removeSpaces (str) {
  return str.replace(/\s+/g, '');
}

function passwordGenerator (name) {
  if(name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';

  name = changeVocals(name);
  name = reverseWord(name);
  name = setLowerUpperCase(name);
  name = removeSpaces(name);
  
  return name;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'