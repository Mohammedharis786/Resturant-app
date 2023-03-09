export function contactPage(){
    const divContent = document.querySelector("#content");

    divContent.replaceChildren();

    const heading1 = document.createElement('p');
    heading1.textContent = "the cheez that most beautiful";
    heading1.classList.add(".landing-page");
    divContent.appendChild(heading1);

    const thirdImages = document.createElement("img");
    thirdImages.classList.add("first-images");
    thirdImages.src = "../assets/images/contact.png";
    divContent.appendChild(thirdImages);
}