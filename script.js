let questions = [
    "Will you be my friend forever? 💖",
    "Will you always stay the same? 💞",
    "Will you still talk to me even when I annoy you a LOT? 😜",
    "Will you laugh at my bad jokes too? 😂",
    "Promise you won’t forget me ever? 🥺💞"
];

let index = 0;

function yesClicked() {
    index++;

    if (index < questions.length) {
        document.getElementById("question").innerText = questions[index];
    } else {
        document.getElementById("question").innerText =
            "Yayyyy! Friendship confirmed forever 😍💖✨";
        document.getElementById("yesBtn").style.display = "none";
        document.getElementById("noBtn").style.display = "none";
    }
}

function noClicked() {
    document.getElementById("question").innerText =
        "Hehe 😝 Wrong answer… try YES 💕";
}
