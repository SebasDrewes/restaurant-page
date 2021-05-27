const menu = () => {
    const dynamicZone = document.querySelector(".dynamicZone");
    while (dynamicZone.firstChild) {
        dynamicZone.removeChild(dynamicZone.firstChild);
    }

    const menus = document.createElement("p");
    menus.classList.add("menu");
    menus.textContent = "some menus";
    dynamicZone.appendChild(menus);

}
export { menu };