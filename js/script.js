const images = [
    {
        image: "img/01.webp",
        title: "Marvel's Spiderman Miles Morale",
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    }, {
        image: "img/02.webp",
        title: "Ratchet & Clank: Rift Apart",
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
    }, {
        image: "img/03.webp",
        title: "Fortnite",
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: "img/04.webp",
        title: "Stray",
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
    }, {
        image: "img/05.webp",
        title: "Marvel's Avengers",
        text: "Marvel\"s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

const imgElem = document.querySelector(".items");
let innerStr  = "";

images.forEach((curImage) => {
    return innerStr += `
                <img class="item" src= ${curImage.image} alt="">
                <h3 class = "img-title">${curImage.title}</h3>
                <p class = "img-text">${curImage.text}</p>
    `
})

imgElem.innerHTML += innerStr

const itemElem   = document.querySelectorAll(".item");
const titleElem  = document.querySelectorAll(".img-title");
const textElem   = document.querySelectorAll(".img-text");
let curItemIndex = 0;
itemElem[curItemIndex].classList.add("active");
titleElem[curItemIndex].classList.add("active");
textElem[curItemIndex].classList.add("active");

document.querySelector(".next").addEventListener("click", handleNextBtnClick)
document.querySelector(".prev").addEventListener("click", handlePrevBtnClick)




/******************************/
//FUNCTION

function handleNextBtnClick(){
    if(curItemIndex < itemElem.length - 1){
        itemElem[curItemIndex].classList.remove("active");
        titleElem[curItemIndex].classList.remove("active");
        textElem[curItemIndex].classList.remove("active");
        curItemIndex++;
        itemElem[curItemIndex].classList.add("active")
        titleElem[curItemIndex].classList.add("active");
        textElem[curItemIndex].classList.add("active");

    } else if (curItemIndex === itemElem.length - 1){
        itemElem[curItemIndex].classList.remove("active");
        titleElem[curItemIndex].classList.remove("active");
        textElem[curItemIndex].classList.remove("active");
        curItemIndex = 0;
        itemElem[curItemIndex].classList.add("active")
        titleElem[curItemIndex].classList.add("active");
        textElem[curItemIndex].classList.add("active");
    }
}

function handlePrevBtnClick(){
    if(curItemIndex > 0){
        itemElem[curItemIndex].classList.remove("active");
        titleElem[curItemIndex].classList.remove("active");
        textElem[curItemIndex].classList.remove("active");
        curItemIndex--;
        itemElem[curItemIndex].classList.add("active")
        titleElem[curItemIndex].classList.add("active");
        textElem[curItemIndex].classList.add("active");

    } else if (curItemIndex === 0){
        itemElem[curItemIndex].classList.remove("active");
        titleElem[curItemIndex].classList.remove("active");
        textElem[curItemIndex].classList.remove("active");
        curItemIndex = itemElem.length - 1;
        itemElem[curItemIndex].classList.add("active")
        titleElem[curItemIndex].classList.add("active");
        textElem[curItemIndex].classList.add("active");
    }
}