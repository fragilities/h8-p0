function naikAngkot(arrPenumpang) {
  if(arrPenumpang.length == 0) return [];

  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  var angkot = [];
  var penumpang = {};
  var start = 0;
  var end = 0;

  for(var i in arrPenumpang) {
    penumpang = {};
    penumpang['penumpang'] = arrPenumpang[i][0];
    penumpang['naikDari'] = arrPenumpang[i][1];
    penumpang['tujuan'] = arrPenumpang[i][2];

    start = rute.indexOf(penumpang['naikDari'])+1;
    end = rute.indexOf(penumpang['tujuan'])+1;
    penumpang['bayar'] = (end-start)*2000;

    angkot.push(penumpang);
  }

  return JSON.stringify(angkot);
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]