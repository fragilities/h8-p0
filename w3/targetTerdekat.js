// [Exercises 13 (Auto)] Target Terdekat
// Zoe Zachary - Phase 0 - Week 3

function targetTerdekat(arr) {
  // you can only write your code here!
  var x_cur = [];
  var o_cur = -1;
  var nearest = 0;

  for(var i in arr) {
    if(arr[i] == 'x') x_cur.push(i);
    else if(arr[i] == 'o') o_cur = i;
  }

  // when one of x nor o is found return 0, else search for the nearest of 'o' to 'x'
  if(x_cur.length == 0 || o_cur.length == 0) return 0;
  else {
    var difference = 0;

    for(var i in x_cur) {
      difference = Math.abs(o_cur-x_cur[i]);

      // if nearest is zero, update. or if nearest is bigger than the difference, update.
      if(nearest == 0 || nearest > difference) nearest = difference;
    }

    return nearest;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2