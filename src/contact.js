const contact = () => {
    const inicioButton = document.querySelector(".inicioButton");
const menuButton = document.querySelector(".menuButton");
const contactButton = document.querySelector(".contactButton");
contactButton.style.cssText = "border-bottom: solid white 2px";
menuButton.style.cssText = "border-bottom: hidden";
inicioButton.style.cssText = "border-bottom: hidden";

    const dynamicZone = document.querySelector(".dynamicZone");
    while (dynamicZone.firstChild) {
        dynamicZone.removeChild(dynamicZone.firstChild);
    }

    const contacts = document.createElement("p");
    contacts.classList.add("contacts");
    contacts.textContent = "some contacts";
    dynamicZone.appendChild(contacts);

}
export {contact};