//burger meni
var meni=document.querySelector(".stranice");
var dugme=document.querySelector(".burger_meni");

dugme.addEventListener("click",function(){
    meni.classList.toggle("pomeri");
});

//provera form

$("input").on("focus blur", function(e){
    if(e.type == "focus"){
        $(this).css("background-color", "#C4A484");
    }else{
        $(this).css("background-color", "white");
    }

})

const ime=document.getElementById("ime");
const prezime=document.getElementById("prezime");
const email=document.getElementById("email");
const check=document.getElementById("politika");
const korisnicko=document.getElementById("alias");
const password=document.getElementById("lozinka");
const password1=document.getElementById("potvrda");
var submitDugme=document.getElementById("submitDugme");


submitDugme.addEventListener("click",registracijaFja);

function registracijaFja(){
    if(provera()==true){
    let string="\n\n Dobrodošli: "+ime.value+" "+prezime.value;
    confirm("Uspešno ste se prijavili"+string);
    location.reload("true");
    }
}

function provera(){
    if(ime.value==="" || ime.value==null){
       alert("Niste uneli ime.");
       return false;
    }
    if(prezime.value==="" || prezime.value==null){
        alert("Niste uneli prezime");
        return false;
    }
    if(email.value==="" || email.value==null){
        alert("Niste uneli email adresu.");
        return false;
    }
    if(password.value==="" || password.value==null || password.value.length < 8){
        alert("Lozinka mora imati bar 8 znakova.");
        return false;
    }
    if(password1.value==="" || password1.value==null || password1.value!==password.value){
        alert("Lozinke se ne poklapaju");
        return false;
    }
    if(korisnicko.value==="" || korisnicko.value==null || korisnicko.value.length < 8){
        alert("Korisnicko ime mora imati bar 8 znakova.");
        return false;
    }
  
    return true;
}

//vracanje gore
var gore = document.querySelector("#ft_slika");
gore.addEventListener("click",function(){
    window.scrollTo({
        top: 0,behavior: "smooth"
    });
});