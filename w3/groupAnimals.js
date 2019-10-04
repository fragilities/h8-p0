// [Exercises 15] Mengelompokkan Hewan
// Zoe Zachary - Phase 0 - Week 3

function groupAnimals(animals) {
  // you can only write your code here!
  var groupedAnimals = [];
  var temp = [];
  var found = false;

  for(var i in animals) {
    temp = [];

    if(groupedAnimals.length == 0) {
      temp.push(animals[i]);
      groupedAnimals.push(temp);
    }
    else {
      // check if there is a matching group first
      found = false;

      for(var j in groupedAnimals) {

        // push the current animal into the matching group
        if(animals[i][0][0] == groupedAnimals[j][0][0]) {
          groupedAnimals[j].push(animals[i]);
          found = true;
          break;
        }
      }

      // if no group yet, create new group in temp, and push the animal along with the new group into groupedAnimals
      if(!found) {
        temp.push(animals[i]);
        groupedAnimals.push(temp);
      }
    }
  }

  return groupedAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]