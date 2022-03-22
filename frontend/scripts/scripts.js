const medsos = document.getElementsByClassName('medsos');
medsos[0].style.backgroundColor = 'red';

const j2 = document.getElementById('judul');
j1.style.color = 'red';
j1.style.backgroundColor = 'red';

const p = document.getElementsByClassName('p1');
p[0].style.color = 'aqua';
p[0].innerHTML = 'SELAMAT DATANG';


var i = 21;
console.log(i);

const time = new Date().getHours();
let selamat;
if (time < 10) {
    selamat = "Selamat Pagi";
} else if (time < 20) {
    selamat = "Selamat Siang";
} else {
    selamat = "Selamat Malam";
}
j1.innerHTML = selamat;

for(var i = 1; i <= 10; i++) {
    console.log(i);
}

const bawah = document.getElementsByClassName(".bottom"); 
for (let i = 0; i< bawah.length; i++){     
    bawah[i].style.color ="red"; 
}

const tombol = document.querySelectorAll('.tombol');
tombol[0].style.marginTop = '25px';
tombol[1].style.marginTop = '15px';