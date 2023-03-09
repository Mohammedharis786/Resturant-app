export function menuPage(){
   
    const divContent = document.querySelector("#content");

    divContent.replaceChildren();

    const heading1 = document.createElement("h2");
    heading1.textContent = "Pink wave Cup";
    heading1.classList.add("h2");
    divContent.appendChild(heading1);
     
    const secondimage = document.createElement("img");
    secondimage.classList.add("first-images");
    secondimage.src = "../assets/images/Tea_cup1.png";
    divContent.appendChild(secondimage);

}