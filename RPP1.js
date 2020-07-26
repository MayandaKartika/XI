var Nama = "Pak Arman";
var Harga = 1500000;
var Uk1 = 20.5;
var Uk2 = 30;
var PPN = 15/100;

var HargatanpaPPN = Uk1 * Uk2 * Harga;
var HargadgnPPN = HargatanpaPPN * PPN;
var Hasil = HargatanpaPPN + HargadgnPPN;

console.log("Harga yg harus dibayar " + Nama + " adalah " + Hasil)