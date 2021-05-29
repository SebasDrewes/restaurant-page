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
    const contacts = document.createElement("div")
    contacts.classList.add("contacts");
    const telefono = document.createElement("p");
    telefono.classList.add("telefono");
    const direccion = document.createElement("p");
    direccion.classList.add("direccion");
    const googleMap = document.createElement("iframe");
    googleMap.classList.add("googleMap")

    telefono.textContent = "Telefono: 0123456789";
    direccion.textContent = "Direccion: Via della Lungaretta, 101, Roma, Italia"
    googleMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1483631403994!2d12.470578614996793!3d41.88966627267005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f60480182dd0f%3A0x6d8c00c1bf4a92f1!2sVia%20della%20Lungaretta%2C%20101%2C%2000153%20Roma%20RM%2C%20Italia!5e0!3m2!1ses!2sar!4v1622294804554!5m2!1ses!2sar"
    dynamicZone.appendChild(contacts);
    contacts.appendChild(telefono);
    contacts.appendChild(direccion)
    contacts.appendChild(googleMap);

}
export {contact};