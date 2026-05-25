const hearts = ["❤️", "🩷", "💕", "💗", "🍓", "✨", "🌸", "💖", "🌹"];
const cards = [
  {
    icon: "🌹",
    title: "رجعتي وكملت العيد",
    text: "كل عيد وانتي معايا يا ساره، ووجودك في حياتي هو أحلى عيد ❤️",
  },
  {
    icon: "🍓",
    title: "عارف العيد والعيديه انت الاتنين",
    text: "❤️ رجوعنا لبعض كان أحلى هدية قبل العيد، وكل سنة وانتي قلبي وفرحتي يا ساره",
  },
];

const floatingHeartsContainer = document.getElementById("floatingHearts");
const cardSection = document.getElementById("cardSection");
const sheepRow = document.getElementById("sheepRow");
const burstButton = document.getElementById("burstButton");

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function createFloatingHearts() {
  for (let index = 0; index < 18; index += 1) {
    const heart = document.createElement("div");
    heart.className = "fh";
    heart.textContent = randomItem(hearts);
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 8}s`;
    heart.style.animationDuration = `${6 + Math.random() * 6}s`;
    heart.style.fontSize = `${1 + Math.random() * 1.5}rem`;
    floatingHeartsContainer.appendChild(heart);
  }
}

function renderCards() {
  cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "love-card";
    article.innerHTML = `
      <span class="card-icon">${card.icon}</span>
      <h2 class="card-title">${card.title}</h2>
      <p class="card-text">${card.text}</p>
    `;
    cardSection.appendChild(article);
  });
}

function renderSheepRow() {
  sheepRow.textContent = "🐑 🐑 🐑";
}

function burst(event) {
  for (let index = 0; index < 10; index += 1) {
    const burstItem = document.createElement("div");
    burstItem.className = "heart-burst";
    burstItem.textContent = randomItem(hearts);
    burstItem.style.left = `${event.clientX + (Math.random() - 0.5) * 80}px`;
    burstItem.style.top = `${event.clientY}px`;
    burstItem.style.animationDelay = `${Math.random() * 0.3}s`;
    document.body.appendChild(burstItem);
    setTimeout(() => burstItem.remove(), 1500);
  }
}

createFloatingHearts();
renderCards();
renderSheepRow();
burstButton.addEventListener("click", burst);
