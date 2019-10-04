// [Exercises 5 (Auto)] Palindrome
// Zoe Zachary - Phase 0 - Week 3

function palindrome(kata) {
  var invertedKata = kata.split("");
  invertedKata.reverse();
  invertedKata = invertedKata.join("");

  if(kata == invertedKata) return true;
  else return false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
