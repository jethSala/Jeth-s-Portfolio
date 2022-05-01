const contain = document.querySelector(".thanks");
const btn = document.querySelector(".btn-submit");
const text = document.querySelector(".text");
const name = document.querySelector(".inp-name");
const eMail = document.querySelector(".inp-email");
const plsInp = document.querySelector(".pls-inp");

btn.addEventListener("click", () => {
    let nValue = name.value.trim();
    let eValue = eMail.value.trim();

    if (nValue.length == 0 || eValue.length == 0) {
        plsInp.classList.add("un");
        contain.classList.remove("un");
    } else {
        contain.classList.add("un");
        plsInp.classList.remove("un");
        text.innerHTML= "Thank you "+ name.value +", for contacting us. We'll make sure to contact you back as soon as possible!";
    }
});
