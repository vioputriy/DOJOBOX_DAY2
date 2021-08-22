function hitungLuasPersegi(sisi){
    
    var luasSegiEmpat = sisi*sisi
    return luasSegiEmpat; 
}

function hitungLuasPersegiPanjang(panjang, lebar){
    
    var luasSegiPanjang = panjang*lebar
    return luasSegiPanjang; 
}

function hitungLuasSegitiga(alas,tinggi){
    
    var luasSegitiga = 0.5*(alas*tinggi)
    return luasSegitiga; 
}

function hitungLuasLingkaran(jari){
    
    var luasLingkaran = 3.14*(jari*jari)
    return luasLingkaran; 
}

function hitungKelilingPersegi (sisi){

        var kelilingPersegi = 4*sisi;
        return kelilingPersegi;
}

function hitungKelilingPersegiPanjang (panjang,lebar){

    var kelilingPersegiPanjang = 2*(panjang+lebar);
    return kelilingPersegiPanjang;
}

function hitungKelilingLingkaran(jari){

    var kelilingLingkaran = 2*3.14*jari
    return kelilingLingkaran;
}

function hitungKelilingSegitiga (alas,tinggi,sisi_miring){

    var kelilingSegitiga = alas+tinggi+sisi_miring;
    return kelilingSegitiga;
}

//Menu

var menu = prompt('silahkan pilih menu yang tersedia','1 - Luas, 2 - Keliling')
if(menu==1){

    //mengoperasikan menu luas
    alert('Anda telah meminih menu Luas Bangun Datar');
    var menuLuas = prompt('Masukan bangun datar yang akan dihitung luasnya','1 - Persegi ; 2 - Persegi Panjang; 3 - Segitiga; 4 - Lingkaran')

    if(menuLuas==1){
        //Luas persegi
        tampilLuasPersegi();
    }else if(menuLuas==2){
        //Luas persegi panjang
        tampilLuasPersegiPanjang()
    }else if (menuLuas==3){
        //Luas segitiga
        tampilLuasSegitiga()
    }else if (menuLuas == 4){
        //Luas lingkaran
        tampilLuasLingkaran()
    }

}else if(menu == 2){
    //mengoperasikan keliling
    alert('Anda telah meminih menu Keliling Bangun Datar');
    var menuKeliling = prompt('Masukan bangun datar yang akan dihitung kelilingnya','1 - Persegi ; 2 - Persegi Panjang; 3 - Segitiga; 4 - Lingkaran')

    if(menuKeliling==1){
        //keliling persegi
        tampilKelilingPersegi()
    }else if(menuKeliling==2){
        //kliling persegi panjang
        tampilKelilingPersegiPanjang()
    }else if (menuKeliling==3){
        //keliling segitiga
        tampilKelilingSegitiga()
    }else if (menuKeliling == 4){
        //keliling lingkaran
        tampilKelilingLingkaran()
    }


}else{
    document.write('Menu yang anda pilih tidak valid ' + '<br>')
}


//Operation
//Input dan output

//Luas
//perseegi (1 variabel)
function tampilLuasPersegi(){
    var persegi = parseInt(prompt('Masukan sisi persegi : '));
    var luas = hitungLuasPersegi(persegi)
    document.write('Luas Persegi adalah : ' + luas);
}
//persegi panjang (2 variable)

function tampilLuasPersegiPanjang(){

    var panjang = parseInt(prompt('Masukan panjang persegi : '));
    var lebar = parseInt(prompt("Masukan lebar persegi panjang : "));
    var luas = hitungLuasPersegiPanjang(panjang,lebar)
    document.write('Luas persegi panjang adalah : ' +luas)
}
//segitiga (2 variabel)

function tampilLuasSegitiga(){

    var alas = parseInt(prompt('Masukan alas segitiga : '));
    var tinggi = parseInt(prompt("Masukan tinggi segitiga : "));
    var luas = hitungLuasSegitiga(alas,tinggi)
    document.write('Luas segitiga adalah : ' +luas)
}
//lingkaran (1 variable)

function tampilLuasLingkaran(){

    var jari = parseInt(prompt('Masukan jari lingkaran : '));
    var luas = hitungLuasLingkaran(jari)
    document.write('Luas lingkaran adalah : ' +luas)
}
//Keliling

//perseegi (1 vaiabel)

function tampilKelilingPersegi(){

    var sisi = parseInt(prompt('Masukan sisi persegi : '));
    var keliling = hitungKelilingPersegi(sisi)
    document.write('Keliling persegi adalah : ' +keliling)
}
//persegi panjang (2 variable)
function tampilKelilingPersegiPanjang(){

    var panjang = parseInt(prompt('Masukan panjang persegi panjang : '));
    var lebar = parseInt(prompt('Masukan lebar persegi panjang : '));
    var keliling = hitungKelilingPersegiPanjang(panjang,lebar)
    document.write('Keliling persegi panjang adalah : ' +keliling)
}

//segitiga (3 variable)
function tampilKelilingSegitiga(){

    var sisi1 = parseInt(prompt('Masukan sisi 1 segitiga : '));
    var sisi2 = parseInt(prompt('Masukan sisi 2 segitiga : '));
    var sisi3 = parseInt(prompt('Masukan sisi 3 segitiga : '));
    var keliling = hitungKelilingSegitiga(sisi1,sisi2,sisi3)
    document.write('Keliling segitiga adalah : ' +keliling)
}

//lingkaran(1 variable)

function tampilKelilingLingkaran(){

    var jari = parseInt(prompt('Masukan jari jari lingkaran : '));
    var keliling = hitungKelilingLingkaran(sisi)
    document.write('Keliling lingkaran adalah : ' +keliling)
}
