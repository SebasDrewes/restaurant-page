const home = () => {
const inicioButton = document.querySelector(".inicioButton");
const menuButton = document.querySelector(".menuButton");
const contactButton = document.querySelector(".contactButton");
inicioButton.style.cssText = "border-bottom: solid white 2px";
menuButton.style.cssText = "border-bottom: hidden";
contactButton.style.cssText = "border-bottom: hidden";


const dynamicZone = document.querySelector(".dynamicZone");
while (dynamicZone.firstChild) {
    dynamicZone.removeChild(dynamicZone.firstChild);
}
const inicio = document.createElement("div");
inicio.classList.add("inicio");
const firstParagraph = document.createElement("p");
const secondParagraph = document.createElement("p");
const image = document.createElement("img");
image.classList.add("image");
const thirdParagraph = document.createElement("p");

firstParagraph.textContent = "La mejor Pizza de Roma";
secondParagraph.textContent = "Pizzería en Rione Di Trastevere, Lazio, Italy";
firstParagraph.classList.add("firstParagraph");
secondParagraph.classList.add("secondParagraph");
image.src = "../src/profile.jpg";
thirdParagraph.textContent = "Pedi online o visitanos!";
thirdParagraph.classList.add("thirdParagraph");
dynamicZone.appendChild(inicio);
inicio.appendChild(firstParagraph);
inicio.appendChild(secondParagraph);
inicio.appendChild(image);
inicio.appendChild(thirdParagraph);

}
export {home}