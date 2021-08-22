/* var nilai = 1; 

while(nilai<=10){
    document.write('hallo admin' +'<br>');
    nilai += 1;
}  */

/* for(let nilai = 1; nilai < 10; nilai++){
    document.write("<p>Perulangan ke-" + nilai + "</p>")
}  
for(counter = 0; counter < 50; counter+=2){
    document.write("<p>Perulangan ke-"+counter+"</p>");
} */

/* for(nilai =1; nilai < 5; nilai++){
    document.write("nilai ke" + nilai +)
}  */

/* // var vista = 1;
// while(vista<=5; vista++){
//     document.write('member TA vista' +'<br>');
//     vista += 1;
// } */

/* var angka=1
while(angka<=5){
    document.write("<p>Siswa dengan nomor induk " +angka+" TA Vista </p>")
    angka+=1;
}
for(var angka = 5; angka < 10; angka++){
    document.write("<p>Siswa dengan nomor induk  " + angka + " TA Intan</p>")
}  */ 

/* var buah=[];
buah = ["apel", "belimbing", "cempedak", "duku", "durian"]
document.write(typeof(buah) + '<br>');
document.write(buah);
document.write('<br>');
document.write(buah.length);
document.write('<br>');
var iniadalahFungsi = function(){
    alert('hallo dojobox');
}

var myArr = ['text', 1234, true, iniadalahFungsi, [2,3,4]]
document.write('<br>');
document.write(myArr[4][1]);

var myArr2 =[];
myArr2[0] = 'senin';
myArr2[1] = 'selasa';
myArr2[2] = 'rabu';
myArr2[2] =undefined; 
myArr2[3] = 'kamis';
 */


/* var newBuah = buah.slice(1,1)
document.write('<br>');
document.write('<br>');

document.write(newBuah.join('<br>')) */


/* buah.array.forEach(fungction(e.i){
    document.write((i+1) + '. ' + e +
    '<br>')
}); */

/* var buahBaru = buah.map(function(e,i){
    return e + 'enak dimakan'
})
document.write('<br>');
document.write('<br>');
 */

/* function cetak(panjangSisiKubusA, panjangSisiKubusB){

}
var sisi1 = parseInt(prompt('masukan sisi1 '));
//var sisi2 = parseInt(prompt('masukan sisi2'));

function volumeKubus(sisi){
        var volume
        volume = sisi * sisi * sisi
        return volume
}
 */

/* function cetak(bil1, bil2){
    document.write('Tagihan pertama sebesar : Rp. ' + bil1 + '<br>');
    document.write('Tagihan kedua sebesar : Rp. ' + bil2 + '<br>')
}    

cetak ('200.000','500.000');
 */
/* function diskon(hargaAwal){
    var diskon;
    diskon = 0.4 * hargaAwal;
    hargaDiskon = hargaAwal - diskon;
    return hargaDiskon;
}
var harga = prompt("Masukan Harga : Rp. ");
var total = prompt("masukan banyak barang");
document.write("")
document.write("Harga Setelah diskon 40% Menjadi : Rp. " + diskon(harga)); */

/* var x = 5; 
var y = 8.5; 
let jumlah = function(x,y){
    return x+y;
}

let kurang = function(x,y){
    return x-y;
    
}

let kali = function(x,y){
    return x*y;
}

let bagi = function(x,y){
    return x/y;
}

document.write(`Hasil dari penjumlahan ${x} - ${y} = ${jumlah(x,y)}<br/>`);
document.write(`Hasil dari pengurangan ${x} - ${y} = ${kurang(x,y)}<br/>`);
document.write(`hasil dari perkalian ${x} x ${y} = ${kali(x,y)}<br/>`);
document.write(`Hasil dari pembagian ${x} / ${y} = ${bagi(x,y)} <br>`); */

var nilaiK = parseInt(prompt("masukan nilai ",'0-100'));

switch(true){
    case (nilaiK> 80 && nilai <= 100): 
    document.write('Nilai kamu A');
    break;
    case (nilaiK> 60 && nilai <= 80): 
    document.write("Nilai kamu B");
    break;
    case (nilaiK> 40 && nilai <= 60): 
    document.write("Nilai kamu C");
    break;
    case (nilaiK> 20 && nilai <=40) : 
    document.write("Nilai kamu D");
    break;
    case (nilaiK>20):
        document.write("Nilai kamu E");
    default:
        document.write('Input salah');
} 

var dataSiswa = [
    ["jojo", 55.5, nilaiK(55.5)],
    ["Andika", 70.1, nilaiK(70.1)],
    ["Alif", 19, nilaiK(19)],
    ["Vista", 102, nilaiK(102)]
];

for (var i = 0, l1 = dataSiswa.length; i < l1; 1++){
    for (var j = 0, l2 = dataSiswa[i].length; j < l2; j++){
        document.write(dataSiswa[i][j], '<br>')
    }
}





