function graduates (students) {
  if(students.length == 0) return {};

  var classes = {};
  var graduating = [];

  for(var i in students) {
    // check if the class have existed in classes
    if(classes.hasOwnProperty(students[i]['class'])) {
      // class does exist, check whether or not the student can graduate
      if(students[i]['score'] > 75) {
        var student = {
          name: students[i]['name'],
          score: students[i]['score'],
        }

        classes[students[i]['class']].push({...student});
      }
    } else { // class does not exist, initialize
      // if the student's score is above 75, let them graduate
      if(students[i]['score'] > 75) {
        var student = {
          name: students[i]['name'],
          score: students[i]['score'],
        }

        classes[students[i]['class']] = [];
        classes[students[i]['class']].push({...student});
      }
    }
  }

  return JSON.stringify(classes);
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}