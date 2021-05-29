const menu = () => {
    const inicioButton = document.querySelector(".inicioButton");
const menuButton = document.querySelector(".menuButton");
const contactButton = document.querySelector(".contactButton");
menuButton.style.cssText = "border-bottom: solid white 2px";
inicioButton.style.cssText = "border-bottom: hidden";
contactButton.style.cssText = "border-bottom: hidden";
    const dynamicZone = document.querySelector(".dynamicZone");
    while (dynamicZone.firstChild) {
        dynamicZone.removeChild(dynamicZone.firstChild);
    }

    const menus = document.createElement("img");
    menus.classList.add("menu");
    menus.src = "../img/menu.jpeg";
    menus.addEventListener("click", () => {
        menus.requestFullscreen();
    })

    dynamicZone.appendChild(menus);
}
export { menu };