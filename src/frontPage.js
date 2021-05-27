const loadFrontPage = () => {

const dynamicZone = document.querySelector(".dynamicZone");
while (dynamicZone.firstChild) {
    dynamicZone.removeChild(dynamicZone.firstChild);
}
const image = document.createElement("img");
const paragraph = document.createElement("p");

image.src = "../src/image.jpg";
paragraph.textContent = "some copy about how wonderful the restaurant is";
paragraph.classList.add("paragraph");
dynamicZone.appendChild(image);
dynamicZone.appendChild(paragraph);

}
export {loadFrontPage}