/*var a=1;
// let (rekom)
// const
a=3;

// di js cuman ada 3 number, string, boolean(tergantung nilai a)


console.log(typeof a);
*/

/*var mantanKu = ["alu","nana"];

for(let i=0;i<mantanKu.length;i++){
    console.log(mantanKu[i])
}
*/

/*
var a=6/2;

if(a == 3) console.log("benar");
else console.log("salah");
*/


const h1=document.getElementById("coba");
h1.style.color="green"

const h2=document.getElementsByTagName("p");
h2[0].style.color="red";

// const h3=document.getElementsByClassName(coba_saja)
// h3[1].style.color ="black";

// const h4=document.querySelector("#cobaaja")

// maniulation node

var a=document.createElement("h1");
a.innerText="Haallo salamat pagi";

document.body.append(a);


var b=document.createElement(h2);
var n=document.createTextNode("Hallo selamat sore");

b.appendChild(n);
