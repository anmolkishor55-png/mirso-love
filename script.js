const heartContainer = document.getElementById("hearts");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function createHeart() {
  if (reduceMotion || document.hidden) return;

  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = ["♡", "♥", "💕", "✧"][Math.floor(Math.random() * 4)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 18 + "px";
  heart.style.color = ["#ffacd0", "#d8c7ff", "#ffffff"][
    Math.floor(Math.random() * 3)
  ];

  const duration = 7 + Math.random() * 5;
  heart.style.animationDuration = duration + "s";

  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

if (!reduceMotion) {
  setInterval(createHeart, 650);
}

const letterButton = document.getElementById("open-letter");
const letter = document.getElementById("love-letter");

letterButton.addEventListener("click", () => {
  const opening = letter.hidden;

  letter.hidden = !opening;
  letterButton.textContent = opening
    ? "Close my letter ♡"
    : "Open my letter ♡";

  letterButton.setAttribute("aria-expanded", String(opening));

  if (opening) {
    setTimeout(() => {
      letter.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "center"
      });
    }, 100);
  }
});

const heartButton = document.getElementById("heart-button");
const heartMessage = document.getElementById("heart-message");

heartButton.addEventListener("click", () => {
  heartMessage.textContent =
    "A million little hearts, all sent to Mirso! 💗🌙";

  for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 100);
  }
});
