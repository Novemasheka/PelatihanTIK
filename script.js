let navigasi = document.getElementById("header") 

window.onscroll = function () {Headers()};
function Headers() {
   if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navigasi.style.position = "fixed";
   } else {
      navigasi.style.position = "relative";
   }
}

