const medsos = document.getElementsByClassName('medsos');
medsos[0].style.backgroundColor = 'cyan';

const judul = document.getElementById('judul');
judul.style.color = 'purple';
judul.style.backgroundColor = 'grey';

const p = document.getElementsByClassName('p1');
p[0].style.color = 'yellow';
p[0].innerHTML = 'SELAMAT DATANG DI BLOG GWEH';

const time = new Date().getHours();
let selamat;
if (time < 10) {
    selamat = "Ohayou";
} else if (time < 20) {
    selamat = "Konichiwa";
} else {
    selamat = "Konbanwa";
}
judul.innerHTML = selamat;

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

const teks = document.getElementsByTagName('p');
teks[1].style.color = 'white';
teks[1].style.backgroundColor = 'green';
