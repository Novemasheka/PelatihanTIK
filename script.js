let navigasi = document.getElementById("header") 
let nav = document.getElementsByClassName("nav_cards");
let roti = document.getElementsByClassName("roti")
let hamburger = document.getElementsByClassName("menu");

window.onscroll = function () {Headers()};
function Headers() {
   if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navigasi.style.position = "fixed";
   } else {
      navigasi.style.position = "relative";
   }
}

nav[0].style.opacity = "0"
nav[0].style.height = "0"
hamburger[0].addEventListener("click", ()=> {
   roti[0].style.transform = roti[0].style.transform ? "" : "translateY(10px) rotate(90deg)"
   roti[1].style.transform = roti[1].style.transform ? "" : "translateX(10px) rotate(60deg) translateY(15px)"
   roti[1].style.width = roti[1].style.width ? "" : "20px"
   roti[2].style.width = roti[2].style.width ? "" : "20px"
   roti[2].style.transform = roti[2].style.transform ? "" : "translateX(10px) rotate(-60deg) translateY(-6px)"

   // let statusNav = window.getComputedStyle(nav[0]).display;
   if(nav[0].style.opacity === "0") {
      nav[0].style.opacity = "100"
      nav[0].style.height = "130px"
   } else {
      nav[0].style.opacity = "0"
      nav[0].style.height = "0"
      
   }
})

// lingkaran


function countLingkaran() {
   let jari2 = Number(document.getElementById("jari").value);
   let diameter = Number(document.getElementById("diameter").value);
   let outputBundar = document.getElementById("outputBundar")

   let pie = 3.14;

   if(jari2 > 0){
      oDiameter = jari2 * 2;
      keliling = 2 * pie * (oDiameter/2)
      luas = pie * (oDiameter/2) **2

      outputBundar.innerHTML = `
      Diameter : ${oDiameter} <br>
      Keliling : ${keliling} <br>
      Luas     : ${luas}
   `
   } else if (diameter > 0) {
      oJari2 = diameter /2;
      keliling = 2 * pie * oJari2
      luas = pie * oJari2 **2

      outputBundar.innerHTML = `
      Jari     : ${oJari2} <br>
      Keliling : ${keliling} <br>
      Luas     : ${luas}
      `
   }
}