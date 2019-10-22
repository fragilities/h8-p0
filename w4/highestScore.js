function highestScore (students) {
  if(students.length == 0) return {};

  var classes = {};

  for(var i in students) {
    // exist
    if(classes.hasOwnProperty(students[i]['class'])) {
      // check what class
      // then check if the student has higher score than previous student in the class

      if(classes[students[i]['class']]['score'] < students[i]['score']) {
        var student = {
          name: students[i]['name'],
          score: students[i]['score'],
        }
  
        classes[students[i]['class']] = {...student};
      }
    }
    else { // class key doesn't exist, initialize
      var student = {
        name: students[i]['name'],
        score: students[i]['score'],
      }

      classes[students[i]['class']] = {...student};
    }
  }

  return classes;
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}