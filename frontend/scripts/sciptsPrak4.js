const greeting = {
    message : "say Hi",
    times : 4
    }
greeting.message = "Hai ges";
console.log(greeting.message)
const imgart = document.getElementsByClassName('imgart');
for (let i = 0; i < imgart.length; i++) {
    if (imgart) {
        console.log(imgart[i]);
    }
    else if (no) {
        console.log('Tidak ada data!!!');
        console.log(i);
    }
}
const p1 = document.getElementById('paragraft');
p1.style.textAlign = 'center';
p1.style.color = 'white';

const p2 = document.getElementsByClassName('paragraft2');
for(let i = 0; i < p2.length; i++){
    p2[i].style.color ='black';
    p2[i].style.textAlign = 'justify';
    p2[i].style.marginLeft = '10px';
    p2[i].style.marginRight = '10px';
    p2[i].style.marginTop = '30px';
}

const h2 = document.querySelector('h2');
h2.style.color = 'black';

const welcome = document.getElementById('welcome');
welcome.style.color = 'white';

const footer = document.getElementsByTagName('footer')[0];
footer.style.backgroundColor = 'black';
footer.style.padding = '20px';

const a = document.querySelectorAll('a');
for(let i = 0; i< a.length; i++){
    a[i].style.Color = 'white';
    a[i].style.textAlign = 'center';
    a[i].style.textDecoration = 'none';
}
