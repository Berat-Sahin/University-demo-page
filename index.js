let index = 0;

let navLinks = document.getElementById("navLinks");
let hamburger = document.getElementById("hamburger");

let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

let textDiv = document.querySelector(".texts-inside");


const text = [
    "Boğaziçi University takes pride in its lively and colorful campus life.",
    "Thanks to its on-campus housing facilities, it remains active around the clock. Campus life aims to cultivate a liberal, democratic and happy Bogazici community.",
    "To complement and enrich the academic experience with an active campus life, the university supports student clubs, arts and sports activities, and provides a variety of services from health care to counseling for students and staff."
]



function showMenu() {
    navLinks.style.right = "0";
    hamburger.style.zIndex = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
    hamburger.style.display = "2";
}


gsap.from(".texts", .8, { y: '-100%' })

gsap.from(".text-box", .8, { y: '-100%' })

gsap.from(".main-nav", .8, { y: '-100%' })

function scrollPhotoRight() {
    if (index == 0) {
        gsap.to(".images", .8, { x: '-100%' })
        index = 1;
        textDiv.textContent = text[index];
    }
    else if (index == 1) {
        gsap.to(".images", .8, { x: '-200%' })
        index = 2;
        textDiv.textContent = text[index];
    }
    else if (index == 2) {
        gsap.to(".images", .8, { x: '-0%' })
        index = 0;
        textDiv.textContent = text[index];
    }

}

function scrollPhotoLeft() {
    if (index == 0) {
        gsap.to(".images", .8, { x: '-200%' })
        index = 1;
    }
    else if (index == 1) {
        gsap.to(".images", .8, { x: '-100%' })
        index = 2;
    }
    else if (index == 2) {
        gsap.to(".images", .8, { x: '-0%' })
        index = 0;
    }
}




