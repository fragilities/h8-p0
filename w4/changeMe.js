function changeMe(arr) {
  var person = {};

  for(var i in arr) {
    person = {};
    i = parseInt(i);
    console.log((i+1) + '. ' + arr[i][0] + arr[i][1] + ':');

    for(var j = 0; j < Object.keys(arr[i]).length; j++) {
      if(j == 0) person['firstName'] = arr[i][j];
      else if(j == 1) person['lastName'] = arr[i][j];
      else if(j == 2) person['gender'] = arr[i][j];
    }

    if(Object.keys(arr[i]).length < 4) person['age'] = 'Invalid Birth Year';
    else person['age'] = new Date().getFullYear()-arr[i][3];
    console.log(person);
  }

  if(arr.length == 0) console.log('""');
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""