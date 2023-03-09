export function homeloader(){
    const divContent = document.querySelector("#content");
    
    divContent.replaceChildren();
    
    const head = document.createElement("h2");
    head.textContent = "The Imperial spice"
    head.classList.add("h2");
    divContent.appendChild(head);

    const myImages = document.createElement("img");
    myImages.classList.add("first-images");
    myImages.src="../assets/images/resturant2.png";
    divContent.appendChild(myImages);

    const heading1 = document.createElement("h1");
    heading1.textContent = "The Famous sea Resturant ";
    heading1.classList.add("h1");
    divContent.appendChild(heading1);


   const myImages1 = document. createElement("img");
   myImages1.classList.add("first-images");
   myImages1.src = "../assets/images/sea_resturant.png";
   divContent.appendChild(myImages1);

}