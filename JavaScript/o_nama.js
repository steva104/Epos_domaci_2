//burger meni
var meni=document.querySelector(".stranice");
var dugme=document.querySelector(".burger_meni");

dugme.addEventListener("click",function(){
    meni.classList.toggle("pomeri");
});

//vracanje gore
var gore = document.querySelector("#ft_slika");
gore.addEventListener("click",function(){
    window.scrollTo({
        top: 0,behavior: "smooth"
    });
});