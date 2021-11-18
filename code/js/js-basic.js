
nomor = 5;
satu = 50;
huruf = "halo halo ";
var angka2 = 20;
let angka3 = 30;
const angka4 = 40;
katabaru = huruf + angka2;
angkabaru = angka2 + angka3;

if (angka2 > angka3) {
    console.log("kondisi ini benar");
} else {
    console.log("kondisi ini salah");
}

function cobaFungsi() {
    return angka3 * angka2;
}
cobaFungsi();

function klikJoss() {
    document.getElementById('teks').style.color = 'green';
}

buah = ["apel", "jeruk", "mangga"];

mobil = {
    roda = 4,
    spion = 2,
    jalan = function() {
        return 1 + 1;
    }
}

mobil.roda;
mobil.jalan();

//console.log(angka1);
// alert(angka1);
// alert(z);
// console.log(z);
// document.getElementById('wadah').innerHTML = z;
// document.getElementById("wadah").innerHTML = "Hello JavaScript";
// document.getElementById('wadah').style.fontSize='35px';
// document.getElementById('wadah').src='pic_bulboff.gif';
// document.getElementById('wadah').style.display='none';
document.getElementById('wadah').innerHTML = cobaFungsi();
document.getElementById('teks').style.color = 'magenta';

























// 1. variabel, menggabungkan variabel, menampilkan variabel
// 2. console, alert, DOM (document)
// 3. scope: var, let, const
// 4. pemrograman dasar: fungsi, argumen, return, if, loop
// 5. struktur data: array, objek
//
// Modern JS
// 6. fungsi arrow
// 7. OOP: class, object, method, properties, overriding
// 8. export, paket, module

