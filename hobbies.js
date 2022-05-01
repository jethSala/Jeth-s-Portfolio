const tDr = document.querySelectorAll('td');
const h2r = document.querySelectorAll('h2');

const prog = document.querySelector(".prog");
const gaming = document.querySelector(".gaming");
const sing = document.querySelector(".sing");
const read = document.querySelector(".read");
const mming = document.querySelector(".mming");
const draw = document.querySelector(".draw");
const drive = document.querySelector(".drive");
const model = document.querySelector(".model");
const basket = document.querySelector(".basketb");
const swim = document.querySelector(".swim");

tDr[0].addEventListener("click", function() {
    prog.classList.add("unhide");
});

h2r[0].addEventListener("click", function() {
    prog.classList.remove("unhide");
});

//-----------------------------------
tDr[1].addEventListener("click", function() {
    gaming.classList.add("unhide");
});

h2r[1].addEventListener("click", function() {
    gaming.classList.remove("unhide");
});

//-----------------------------------
tDr[2].addEventListener("click", function() {
    sing.classList.add("unhide");
});

h2r[2].addEventListener("click", function() {
    sing.classList.remove("unhide");
});

//-----------------------------------
tDr[3].addEventListener("click", function() {
    read.classList.add("unhide");
});

h2r[3].addEventListener("click", function() {
    read.classList.remove("unhide");
});

//-----------------------------------
tDr[4].addEventListener("click", function() {
    mming.classList.add("unhide");
});

h2r[4].addEventListener("click", function() {
    mming.classList.remove("unhide");
});

//-----------------------------------
tDr[5].addEventListener("click", function() {
    draw.classList.add("unhide");
});

h2r[5].addEventListener("click", function() {
    draw.classList.remove("unhide");
});

//-----------------------------------
tDr[6].addEventListener("click", function() {
    drive.classList.add("unhide");
});

h2r[6].addEventListener("click", function() {
    drive.classList.remove("unhide");
});

//-----------------------------------
tDr[7].addEventListener("click", function() {
    model.classList.add("unhide");
});

h2r[7].addEventListener("click", function() {
    model.classList.remove("unhide");
});

//-----------------------------------
tDr[8].addEventListener("click", function() {
    basket.classList.add("unhide");
});

h2r[8].addEventListener("click", function() {
    basket.classList.remove("unhide");
});

//-----------------------------------
tDr[9].addEventListener("click", function() {
    swim.classList.add("unhide");
});

h2r[9].addEventListener("click", function() {
    swim.classList.remove("unhide");
});