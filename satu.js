document.write('Selamat datang Vio' +'<br>');
document.write('Silahkan belajar dengan penuh semangat' + '<br>' );
/*var bil1 = perseInt(prompt('masukan bilangan pertama'));
var bil2 = perseInt(prompt('masukan bilangan ke-2'));
*/
/*var bil1 = 30;
var bil2 = 40; 
var bil3 = bil1 + bil2;
document.write('hasil penjumlahan kedua bilangan adalah : ' + bil3 + '<br>');
document.write('hasil penjumlahan kedua bilangan adalah : ' + bil3 + '<br>'); 
document.write(bil1 > bil2); //false 
document.write(bil1 < bil2); //true 
document.write('<br>')
document.write(bil1 > bil2 && bil1 < bil2);*/

/*var nilai = 60;
var kelulusan = (nilai > 70) ? 'lulus' : 'tidak lulus'
document.write(kelulusan); */ 
 /*const bil1 = prompt("masukan bilagan pertama", );
 const bil2 = prompt("masukan bilangan kedua", "");
 var result =  parseInt(bil1) + parseInt(bil2);
 document.write("Hasilnya adalah " + result); */


 /*ar nilai = parseInt(prompt('masukan nilai'));
 var kelulusan = (nilai > 75) ? 'lulus' : 'tidak lulus'
 document.write(kelulusan);*/

 /*var totalBelanja = prompt("Total belanja?", 0);

 if(totalBelanja > 100000){
     document.write("<h2>Selamat Anda dapat hadiah</h2>");
 } */


        var aku = 20;
        var kamu = 19;

        var benar = (aku > kamu);
        var salah = (aku < kamu);
        // operator && (and)
        var hasil = benar && salah;
        document.write(`<br/>`);
        
        // operator || (or)
        var hasil = benar || salah;
        document.write(`${benar} || ${salah} = ${hasil}<br/>`);
        
        // operator ! (not)
        var hasil = !benar
        document.write(`!${benar} = ${hasil}<br/>`);

