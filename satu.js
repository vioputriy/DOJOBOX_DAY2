//alert('test');
/*var namaVar = '123';
document.write(typeof(namaVar) + '<br>');
var namaPengunjung = prompt('Silahkan masukan nama anda');
document.write('hai ' + namaPengunjung + ',selamat datang');

var konfirmasi = confirm("mau tetap disii? ")
var hasil = (konfirmasi==true)?  " iyaa " : "tidak"
document.write(hasil); */
/*var angka = parseInt(prompt("masukan angka"));
if (angka > 10) {
    document.write("nilai anda benar");
}
else if(nilai > 20) {
    document.write("nilai anda salah");
}
else {
    document.write("nilai anda tidak tahu")
}*/

/*var nilaiK = parseInt(prompt("masukan nilai ",'0-100'));

switch(true){
    case (nilaiK>=90): 
    document.write('Nilai kamu A');
    break;
    case (nilaiK>=80): 
    document.write("Nilai kamu B");
    break;
    case (nilaiK>=70): 
    document.write("Nilai kamu C");
    break;
    case (nilaiK>=60): 
    document.write("Nilai kamu D");
    break;
    default:
        document.write('Input salah');
} */
//perbedaan antara penggunaan treu dan tidak
var jawab = prompt("Kamu beruntung! Silahakn pilih hadiahmu dengan memasukan angka 1 sampai 5");
        var hadiah = "";
        
        switch(jawab){
            case "1":
                hadiah = "Tisu";
                break;
            case "2":
                hadiah = "1 Kotak Kopi";
                break;
            case "3":
                hadiah = "Sticker";
                break;
            case "4":
                hadiah = "Minyak Goreng";
                break;
            case "5":
                hadiah = "Uang Rp 50.000";
                break;
            default:
                document.write("<p>Opps! anda salah pilih</p>");
        }
        if(hadiah === ""){
            document.write("<p>Kamu gagal mendapat hadiah</p>");
        } else {
            document.write("<h2>Selamat kamu mendapatkan " + hadiah + "</h2>");
        }






