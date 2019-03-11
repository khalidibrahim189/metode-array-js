//tipe data array
//array dimulai dari angka 0

// var kotak = ["hilman", 8 , "roby"];
// kotak[1] = "riko";


// var text = "Namanya adalah " + kotak[1];
// document.getElementById("wrap").innerHTML = text;

//sort, reverse, concat, length, join("separator"),
var namaOrang = ["hilman", "edy", "riko", "robi"];
var namaOrang2 = ["koko", "kaka"];
var namaOrang3 = ["jefry", "alex"];

// length(untuk berfungsi menghitung data)
//join (untuk memberi jarak dengan tanda | atau angka)

// var total = namaOrang.concat(namaOrang2, namaOrang3)// cara menggabungkan dua array atau lebih

//splice->add(mulai, dihapus?, isi), splice->remove
//pop, push, shift(), unshift(),

// namaOrang.splice(2, 1, "emmy", "boby");
// namaOrang.splice(2, 1);

namaOrang.pop();//mengurangi data/nama
namaOrang.push("emmy");


namaOrang.shift();// untuk menghapus data awal
namaOrang.unshift("ega");//menambahkan di bagian awal

document.getElementById("wrap").innerHTML = namaOrang;