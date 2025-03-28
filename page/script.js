const Container = document.querySelector(".corps");
const div1 = document.getElementById("V1");
const div2 = document.getElementById("V2");
const div3 = document.getElementById("V3");
const div4 = document.getElementById("V4");

function Touche(event){
    event.preventDefault();

    div1.style.display = "none";
    div2.style.display = "none";

    setTimeout(function(){
        div3.style.display = "flex";
        div4.style.display = "flex";    
        div3.style.opacity = 1;
        div4.style.opacity = 1;
   },100);
}
BT2.addEventListener("click", Touche);
