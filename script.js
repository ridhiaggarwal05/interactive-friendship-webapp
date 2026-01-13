let questions = [
    "Will you be my friend forever? 🥺💖",
    "Will you always stay the same? 💞",
    "Will you still talk to me when I annoy you? 😜",
    "Will you laugh at my bad jokes? 😂",
    "Promise you won’t forget me ever? 🥹💗"
];

let index = 0;

function yesClicked() {
    const sound = document.getElementById("yesSound");
    sound.currentTime = 0;
    sound.play();

    createHeart();
    createHeart();

    index++;
    const q = document.getElementById("question");

    if (index < questions.length) {
        q.innerText = questions[index];
    } else {
        q.innerText = "Yayyyy!! Besties forever 💕🥰✨";
        document.getElementById("yesBtn").style.display = "none";
        document.getElementById("noBtn").style.display = "none";
    }
}

function noClicked() {
    const q = document.getElementById("question");
    q.innerText = "Hehe 🙈 wrong choice… try YES 💖";
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}
