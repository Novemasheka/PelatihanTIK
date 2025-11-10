let navigasi = document.getElementById("header") 
let nav = document.getElementsByClassName("nav_cards");
let roti = document.getElementsByClassName("roti")
let hamburger = document.getElementsByClassName("menu");
let container = document.getElementsByClassName("container")
let introduction = document.getElementById("introduction")



// Create a MediaQueryList object
var handphone = window.matchMedia("(max-width: 700px)")
function responsiveScroll() {
   if(handphone.matches) {
      if(document.documentElement.scrollTop > 50) {
         navigasi.style.position = "fixed"
      } else {
          navigasi.style.position = "relative"
      }
   } else {
      navigasi.style.position = "relative"
   }
}
window.addEventListener("scroll", responsiveScroll);
handphone.addEventListener("change", responsiveScroll)



hamburger[0].addEventListener("click", ()=> {
   roti[0].style.transform = roti[0].style.transform ? "" : "translateY(10px) rotate(90deg)"
   roti[1].style.transform = roti[1].style.transform ? "" : "translateX(10px) rotate(60deg) translateY(15px)"
   roti[1].style.width = roti[1].style.width ? "" : "20px"
   roti[2].style.width = roti[2].style.width ? "" : "20px"
   roti[2].style.transform = roti[2].style.transform ? "" : "translateX(10px) rotate(-60deg) translateY(-6px)"

   let statusNav = window.getComputedStyle(nav[0]).display;
   if(statusNav === "none") {
      nav[0].style.display = "block"
   } else {
      nav[0].style.display = "none"
   }
})
function navLink() {
   let statusNav = [window.getComputedStyle(nav[0]).opacity,window.getComputedStyle(nav[0]).height];
   roti[0].style.transform = roti[0].style.transform ? "" : "translateY(10px) rotate(90deg)"
   roti[1].style.transform = roti[1].style.transform ? "" : "translateX(10px) rotate(60deg) translateY(15px)"
   roti[1].style.width = roti[1].style.width ? "" : "20px"
   roti[2].style.width = roti[2].style.width ? "" : "20px"
   roti[2].style.transform = roti[2].style.transform ? "" : "translateX(10px) rotate(-60deg) translateY(-6px)"
   nav[0].style.opacity = "0"
   nav[0].style.height = "0"
}
// lingkaran

outputBundar.innerHTML = `
      <span style="color: var(--blue)">Keliling</span> : ? <br>
      <span style="color: var(--blue)">Luas</span>    &nbsp;&nbsp;&nbsp; : ? 
   `
function countLingkaran() {
   let jari2 = Number(document.getElementById("jari").value);
   let diameter = Number(document.getElementById("diameter").value);
   let outputBundar = document.getElementById("outputBundar")
   
   let pie = 3.14;
   if(jari2 > 0 && diameter == 0){
      oDiameter = jari2 * 2;
      keliling = 2 * pie * (oDiameter/2)
      luas = pie * (oDiameter/2) **2
      outputBundar.innerHTML = `
      <span style="color: var(--blue)">Diameter</span> : ${oDiameter} cm<br>
      <span style="color: var(--blue)">Keliling</span> : ${keliling} cm<br>
      <span style="color: var(--blue)">Luas</span>     &nbsp;&nbsp;&nbsp;&nbsp: ${luas} cm²
   `
   } else if (diameter > 0 && jari2 == 0) {
      oJari2 = diameter /2;
      keliling = 2 * pie * oJari2
      luas = pie * oJari2 **2

      outputBundar.innerHTML = `
      <span style="color: var(--blue)">Jari²</span> &nbsp;&nbsp;&nbsp: ${oJari2} cm<br>
      <span style="color: var(--blue)">Keliling</span> : ${keliling} cm<br>
      <span style="color: var(--blue)">Luas</span> &nbsp;&nbsp;&nbsp;&nbsp: ${luas} cm²
      `
   } else if (jari2 == 0 && diameter == 0) {
      alert("tolong diisi ya, jangan dikosongkan ^^")
   }
}