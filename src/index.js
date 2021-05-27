import{loadFrontPage} from "./frontPage"
import{menu} from "./menu"
import{contact} from "./contact"

const content = document.querySelector("#content");
const header = document.createElement("header");
header.classList.add("header");

const footer = document.createElement("footer");
footer.classList.add("footer")

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Pizzeria";


const loadFrontPageButton = document.createElement("button");
loadFrontPageButton.textContent = "Home";
loadFrontPageButton.classList.add("loadFrontPageButton");
loadFrontPageButton.addEventListener("click", () => {
    loadFrontPage();
})

const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
menuButton.classList.add("menuButton");
menuButton.addEventListener("click", () => {
    menu();
})

const contactButton = document.createElement("button");
contactButton.textContent = "Contacto"
contactButton.classList.add("contactButton");
contactButton.addEventListener("click", () => {
    contact();
})

const dynamicZone = document.createElement("div");
dynamicZone.classList.add("dynamicZone");

const footerContent = document.createElement("p");
footerContent.textContent = "Some footer content";
footerContent.classList.add("footerContent")

content.appendChild(header);
header.appendChild(title);
header.appendChild(loadFrontPageButton);
header.appendChild(menuButton);
header.appendChild(contactButton);
content.appendChild(dynamicZone);
content.appendChild(footer);
footer.appendChild(footerContent);

window.onload = function () {
    loadFrontPage();
}