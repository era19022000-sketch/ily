const yes = document.getElementById("yes");
const no = document.getElementById("no");
const invite = document.getElementById("invite");
const success = document.getElementById("success");
const again = document.getElementById("again");

function escapeNo() {
  const area = document.querySelector(".buttons");
  const x = (Math.random() * 170) - 85;
  const y = (Math.random() * 70) - 35;
  no.style.transform = `translate(${x}px, ${y}px)`;
}

no.addEventListener("mouseenter", escapeNo);
no.addEventListener("touchstart", e => {
  e.preventDefault();
  escapeNo();
});
no.addEventListener("click", escapeNo);

yes.addEventListener("click", () => {
  invite.classList.add("hidden");
  success.classList.remove("hidden");
  hearts();
});

again.addEventListener("click", () => {
  success.classList.add("hidden");
  invite.classList.remove("hidden");
  no.style.transform = "";
});

function hearts() {
  const icons = ["❤️","💗","💖","💕","✨"];
  for (let i = 0; i < 35; i++) {
    const h = document.createElement("div");
    h.className = "heart-float";
    h.textContent = icons[Math.floor(Math.random() * icons.length)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 14 + Math.random() * 18 + "px";
    h.style.animationDuration = 1.7 + Math.random() * 2 + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
  }
}
