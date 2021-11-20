// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

/*
let boton = document.querySelector(".up-arrow");
 
let action = function(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
boton.addEventListener("click", action);
*/
let subir = document.querySelector(".up-arrow").addEventListener("click", ()=>{
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});