// [Exercises 4] Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)
// Zoe Zachary

// contoh input
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data) {
  // Adding surname
  var fullname = data[1] + ' Elsharawy';

  // Fixing location
  var location = 'Provinsi ' + data[2];

  // MODIFYING name and location
  data.splice(1, 2, fullname, location);

  // removing hobby and adding gender and school

  var gender = 'Pria';
  var school = 'SMA Internasional Metro';

  // could've been used pop() once and push() two times for adding both gender and school, but using splice will be more efficient LOC wise
  data.splice(4, 1, gender, school);

  // PRINTING input
  console.log(data);

  // handling month
  var date = data[3].split('/');
  var month = '';
  switch(date[1]) {
    case '02':
      month = 'Januari';
      break;
    case '02':
      month = 'Februari';
      break;
    case '03':
      month = 'Maret';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'Mei';
      break;
    case '06':
      month = 'Juni';
      break;
    case '07':
      month = 'Juli';
      break;
    case '08':
      month = 'Agustus';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'Oktober';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'Desember';
      break;
  }

  // PRINTING month
  console.log(month);

  // sorting date
  var sortedDate = [...date];
  sortedDate.sort(function(a, b) { return b-a; });

  // PRINTING sortedDate
  console.log(sortedDate);

  // ADDING dash to date and PRINT it
  date = date.join('-');
  console.log(date);

  // Making name to max 15 chars and PRINT it
  fullname = fullname.slice(0, 15);
  console.log(fullname);
}

dataHandling2(input);