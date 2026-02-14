// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const footer = document.getElementById("letter-footer");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// Move NO button
noBtn.addEventListener("mouseover", () => {
  const distance = 200;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES clicked
yesBtn.addEventListener("click", () => {
  title.style.display = "none";   // Hide the Happy Valentine's text
  catImg.src = "cat_dance.gif";
  footer.style.display = "none";
  buttons.style.display = "none";
  finalText.style.display = "block";
});


// Heart Burst on Click
document.addEventListener("click", function(e) {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight
    },
    colors: ["#ff69b4", "#ff1493", "#ffc0cb", "#c60505","#e4ef0b","#590e66"],
    scalar: 1.2
  });
});

// Colorful Stardust Trail
let lastSpawn = 0;

const colors = [
  "#ff69b4",
  "#ffb6c1",
  "#ffd700",
  "#87cefa",
  "#dda0dd",
  "#98fb98",
  "#ffffff"
];

function spawnStardust(x, y) {
  const now = Date.now();
  if (now - lastSpawn < 30) return;
  lastSpawn = now;

  const star = document.createElement("div");
  star.className = "stardust";

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  star.style.setProperty("--glow-color", randomColor);

  star.style.left = x + "px";
  star.style.top = y + "px";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 800);
}

document.addEventListener("mousemove", function(e) {
  spawnStardust(e.clientX, e.clientY);
});

document.addEventListener("touchmove", function(e) {
  const touch = e.touches[0];
  if (!touch) return;
  spawnStardust(touch.clientX, touch.clientY);
}, { passive: true });

const music = document.getElementById("bg-music");

function tryPlayMusic() {
  if (!music) return;
  music.playbackRate = 1;
  music.play().catch(() => {
    // Browser blocked autoplay; next user interaction will retry.
  });
}

window.addEventListener("load", tryPlayMusic);

["click", "touchstart", "keydown"].forEach((eventName) => {
  document.addEventListener(eventName, tryPlayMusic, { once: true });
});

