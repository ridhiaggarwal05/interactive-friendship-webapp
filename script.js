let questions = [
    "Will you be my friend forever?🫂",
    "Will you always stay constant?💙",
    "Will you still talk to me if I yelled at you?👉👈",
    "Can you make me eat pizza today?🍕",
    "Promise you won’t leave me ever?🥺"
];

let index = 0;

const starsBox = document.querySelector(".stars");
const questionEl = document.getElementById("question");

/* CREATE STARS */
for (let i = 0; i < 250; i++) {
    const s = document.createElement("div");
    s.className = "star";
    s.style.top = Math.random() * 100 + "%";
    s.style.left = Math.random() * 100 + "%";
    starsBox.appendChild(s);
}

/* RESET + REPLAY QUESTION ANIMATION */
function animateQuestion(text) {
    questionEl.classList.remove("noEffect");
    questionEl.style.animation = "none";
    questionEl.offsetHeight; // reflow
    questionEl.innerText = text;
    questionEl.style.animation =
        "questionReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards";
}

function yesClicked() {
    document.getElementById("yesSound").play();
    document.body.classList.add("yes-mode");

    index++;
    if (index < questions.length) {
        animateQuestion(questions[index]);
    } else {
        animateQuestion("FRIENDSHIP CONFIRMED💙\n Chl ab pizza khila🙂‍↔️");
        document.getElementById("yesBtn").style.display = "none";
        document.getElementById("noBtn").style.display = "none";
    }
}

function noClicked() {
    document.body.classList.remove("yes-mode");
    questionEl.classList.add("noEffect");
    animateQuestion("Arey seriously?🤨");
}
