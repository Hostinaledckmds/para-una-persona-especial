let messageCount = 0;

document.getElementById('card').addEventListener('click', function() {
  revealMessage();
});

document.getElementById('nextButton').addEventListener('click', function() {
  nextCard();
});

function revealMessage() {
  const messageDiv = document.getElementById('message');
  if (messageCount === 0) {
    messageDiv.innerHTML = "Eres la persona mas especial mi cielo. 🌟";
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

function nextCard() {
  const card = document.getElementById('card');
  const message = generateMessage();

  card.innerHTML = `<div class="message" id="message">${message}</div>`;
}

function generateMessage() {
  const designs = [
    "¡En cada palabra que susurras al oído, en cada caricia que me haces temblar, encuentro el eco del amor más puro y sincero. Contigo. 💕🌟",
    "Buenas noches, mi dulce amada. Que las estrellas iluminen tus sueños. Que sepas que mi amor y pensamiento están contigo. Descansa, mi vida, y nos encontraremos en nuestros sueños. 💫🌙😴",
    "El señor Corazón y yo susurramos elogios apasionados sobre ti, describiendo tu aura como algo irreal, y tememos que nuestras vidas perderían su esencia sin tu presencia.👀🌺",
    "Espero estar contigo un largo rato de buenos momentos, de caricias, de abrazos, de besos, lo que quiero es estar contigo y que diosito nos guie 🙃🌻",
    "Nuestro amor es como una rosa que nunca deja de florecer. 🌹",
    "Te quiero mucho y lo sabes mi amor ☀️🥂"
  ];

  return designs[Math.floor(Math.random() * designs.length)];
}