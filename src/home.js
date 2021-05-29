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
const image = document.createElement("img");
const paragraph = document.createElement("p");

image.src = "../src/image.jp";
paragraph.textContent = "some copy about how wonderful the restaurant is";
paragraph.classList.add("paragraph");
dynamicZone.appendChild(image);
dynamicZone.appendChild(paragraph);

}
export {home}