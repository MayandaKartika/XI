var Nama = "Rhodey";
var TB = 1.7;
var BB = 90;

var BMI = BB / Math.pow(TB,2);

if (BMI >= 30.0){
    console.log(Nama + " Kegemukan ( Obesitas)")
}else if (BMI <= 25.0 && BMI >= 29.9){
    console.log(Nama + " Kelebihan berat badan")
}else if (BMI >= 18.5 && BMI <= 24.9){
    console.log(Nama + " Normal (Ideal)")
}else{
    console.log(Nama + " Kekurangan berat badan")
} 