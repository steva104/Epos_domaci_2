
//burger meni
var meni=document.querySelector(".stranice");
var dugme=document.querySelector(".burger_meni");

dugme.addEventListener("click",function(){
    meni.classList.toggle("pomeri");
});

// //dugme pogledaj
// var dugme2 = document.querySelector("#dugme_registracija");

// dugme2.addEventListener("click", function(){
//     window.location.href='../HTML/registracija.html'; // preusmerava na drugu stranicu
// })


$(".dugme").on("click", function(){

  window.location.href='../HTML/registracija.html';

});

var gore = document.querySelector("#ft_slika");
gore.addEventListener("click",function(){
    window.scrollTo({
        top: 0,behavior: "smooth"
    });
});
