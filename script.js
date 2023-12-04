let messageCount = 0;
let currentDate = getCurrentDate();
let messagesHistory = [];

function getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  return `${day}-${month}-${year}`;
}

function nextCard() {
  const card = document.getElementById('card');
  const message = generateMessage(currentDate);

  card.innerHTML = `<div class="message" id="message">${message}</div>`;
  messagesHistory.push(message);
  animateMessage();
}

function animateMessage() {
  const messageDiv = document.getElementById('message');
  messageDiv.style.opacity = 0;
  setTimeout(() => {
    messageDiv.style.opacity = 1;
  }, 100);
}

function generateMessage(date) {
  return `Mensaje especial para el ${date}: ${messageCount === 0 ? "¡A MI ME ENCATA CADA PARTE DE TU CUERPO!": "¡Gracias por estar en mi vida!"}`;
}

function previousCard() {
  const card = document.getElementById('card');
  if (messagesHistory.length > 0) {
    const previousMessage = messagesHistory.pop();
    card.innerHTML = `<div class="message" id="message">${previousMessage}</div>`;
    animateMessage();
  } else {
    card.innerHTML = `<div class="message" id="message">No hay mensajes anteriores, mi amor.</div>`;
  }
}

function randomCard() {
  const card = document.getElementById('card');
  const message = generateRandomMessage();

  card.innerHTML = `<div class="message" id="message">${message}</div>`;
  animateMessage();
}

function generateRandomMessage() {
  const designs = [
    "Eres mi faro en la oscuridad, iluminando incluso los días más sombríos. 🌅",
    "Tu sonrisa es la melodía que alegra mi corazón. 😊🎶",
    "Nuestro amor es la inspiración que da vida a los sueños. ✨💑",
    "Cada día contigo es un regalo que atesoro. 🎁❤️",
    "Eres el sueño que nunca quiero despertar. 💤💖",
    "Juntos, creamos nuestro propio mundo mágico lleno de amor. 🌌💏",
    "Eres mi ancla en las tormentas, mi refugio seguro. ⚓🏠",
    "En tu abrazo, encuentro paz y el lugar donde pertenezco. 🤗❤️",
    "Nuestro amor es un poema eterno, escrito en las estrellas. ✨📜",
    "Eres la chispa que enciende la llama de mi corazón. 🔥❤️",
    "En cada beso tuyo, siento la magia del amor verdadero. 💋💫",
    "Eres mi sol en los días nublados, mi luz constante. ☀️🌦️",
  "Tu amor es la melodía que da ritmo a mi vida. 🎵❤️",
  "En tus ojos, encuentro un universo lleno de amor y ternura. 👀💖",
  "Eres la razón por la cual cada día es especial. 🌈💝",
  "Nuestro amor es un cuento de hadas moderno, con un final feliz. 📖👸",
  "Eres mi confidente, mi apoyo inquebrantable. 🤝💕",
  "En cada pequeño gesto tuyo, encuentro un amor inmenso. 💓🌼",
  "Nuestro amor es un viaje mágico que nunca quiero que termine. 🚀💞",
  "Eres la pieza que faltaba en mi rompecabezas del corazón. 🧩❤️",
    "¡En cada palabra que susurras al oído, en cada caricia que me haces temblar, encuentro el eco del amor más puro y sincero. Contigo. 💕🌟",
    "Buenas noches, mi dulce amada. Que las estrellas iluminen tus sueños. Que sepas que mi amor y pensamiento están contigo. Descansa, mi vida, y nos encontraremos en nuestros sueños. 💫🌙😴",
    "El señor Corazón y yo susurramos elogios apasionados sobre ti, describiendo tu aura como algo irreal, y tememos que nuestras vidas perderían su esencia sin tu presencia.👀🌺",
    "Espero estar contigo un largo rato de buenos momentos, de caricias, de abrazos, de besos, lo que quiero es estar contigo y que diosito nos guie 🙃🌻",
    "Nuestro amor es como una rosa que nunca deja de florecer. 🌹",
    "Te quiero mucho y lo sabes mi amor ☀️🥂"

  ];


  return designs[Math.floor(Math.random() * designs.length)];
}

document.getElementById('card').addEventListener('click', revealMessage);
document.getElementById('nextButton').addEventListener('click', nextCard);
document.getElementById('previousButton').addEventListener('click', previousCard);
document.getElementById('randomButton').addEventListener('click', randomCard);

function revealMessage() {
  const messageDiv = document.getElementById('message');
  if (messageCount === 0) {
    messageDiv.innerHTML = "Eres la persona más especial, mi cielo. 🌟";
    messageDiv.style.color = "#C8A2C8";
  } else {
    messageDiv.innerHTML = "Gracias por ser parte de mi vida. 💖";
    messageDiv.style.color = "#FFC0CB";
  }

  messageDiv.style.opacity = 0;
  setTimeout(() => {
    messageDiv.style.opacity = 1;
  }, 100);

  messageCount = (messageCount + 1) % 2;
}