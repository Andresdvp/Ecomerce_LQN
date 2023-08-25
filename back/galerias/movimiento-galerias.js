const carousel= document.querySelector(".carousel");
const flechaBtn = document.querySelectorAll(".galerias span");
const primeraCarta = carousel.querySelector(".card").offsetWidth;

 const deplasamiento =4;

flechaBtn.forEach(btn=> {
    btn.addEventListener("click",()=>{
        carousel.scrollLeft += btn.id === "left" ? -primeraCarta * deplasamiento: primeraCarta * deplasamiento;
    });
});