const loadFrontPage = () => {

const content = document.querySelector("#content");
const title = document.createElement("h1");
const image = document.createElement("img");
const paragraph = document.createElement("p");

title.textContent = "Pizzeria";
image.src = "../src/image.jpg";
paragraph.textContent = "some copy about how wonderful the restaurant is";
content.appendChild(title);
content.appendChild(image);
content.appendChild(paragraph);

}
export {loadFrontPage}