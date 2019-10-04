// [Exercises 6 (Auto)] Palindrome Angka
// Zoe Zachary - Phase 0 - Week 3

function angkaPalindrome(num) {
  // you can only write your code here!
  var newNum = num+1;

  var strNum = newNum.toString().split('');
  var invertedStrNum = [...strNum];
  invertedStrNum.reverse();

  //join
  strNum = strNum.join("");
  invertedStrNum = invertedStrNum.join("");

  if(strNum == invertedStrNum) return newNum;
  else return angkaPalindrome(newNum);
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001