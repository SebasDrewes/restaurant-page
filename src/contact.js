const contact = () => {
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