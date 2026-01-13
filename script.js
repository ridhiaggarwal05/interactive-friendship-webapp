// Questions (friendship vibe only)
let questions = [
    "Will you be my friend forever?🫂",
    "Will you always stay constant?💙",
    "Will you still talk to me if I yelled at you?👉👈",
    "Can you make me eat pizza today?🍕",
    "Promise you won’t leave me ever?🥺"
];

let index = 0;

// Generate background stars
const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    starsContainer.appendChild(star);
}

function yesClicked() {
    const sound = document.getElementById("yesSound");
    sound.currentTime = 0;
    sound.play();

    createFloatStar();

    index++;
    const q = document.getElementById("question");

    if (index < questions.length) {
        q.innerText = questions[index];
    } else {
        q.innerText = "Yay! Friendship confirmed 🤝✨";
        document.getElementById("yesBtn").style.display = "none";
        document.getElementById("noBtn").style.display = "none";
    }
}

function noClicked() {
    document.getElementById("question").innerText =
        "Hehe 😄 try saying Yes";
}

function createFloatStar() {
    const star = document.createElement("div");
    star.className = "float";
    star.innerText = "⭐";
    star.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(star);

    setTimeout(() => star.remove(), 4000);
}
