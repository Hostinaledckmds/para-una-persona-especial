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
  return `Mensaje especial para el ${date}: ${messageCount === 0 ? "Eres la razón por la que mi corazón late, mi amor.🫀": "Si pudiera hacerte sonreír para siempre, lo haría. Pero como no puedo, te prometo hacerte sonreír cada día, cada hora, cada minuto.😊❤️"}`;
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
    "Te quiero mucho y lo sabes mi amor ☀️🥂",
    "¡A MI ME ENCATA CADA PARTE DE TU CUERPO!.",
    "Como dos llamas que bailan en la oscuridad, nuestra pasión ilumina incluso los rincones más secretos de nuestras almas 🔥🌌",
    "En el teatro de nuestros días, cada acto es una expresión de nuestro amor, una obra maestra que evoluciona con cada escena 🎭💖",
    "Eres la sinfonía que resuena en el corazón, un concierto de emociones que nunca deja de sorprenderme 🎶❤️",
    "Nuestro amor es un misterio que desafía la lógica, una ecuación matemática con resultado infinito ➗💘",
    "Como las olas que besan la playa, tus caricias acarician la piel, dejando una huella imborrable en el ser 🌊💕",
    "Eres la respuesta a todas las oraciones, el milagro que transformó la vida en un paraíso de amor 🙏🌈",
    "Nuestra historia es un cuento de hadas moderno, donde cada capítulo es un nuevo motivo para celebrar nuestro amor 📚🥂",
    "Eres mi estrella fugaz, la que concede deseos con cada destello de tu presencia en la vida 🌠💫",
    "Como dos cómplices en la travesura del amor, nuestras travesías juntas son aventuras sin igual 🕵️‍♂️💖",
"En el concierto de nuestras almas, cada beso es una nota que crea una sinfonía de pasión desbordante 🎻💓",
"Nuestro amor es como un buen vino, mejora con el tiempo y se vuelve más embriagador con cada sorbo 🍷❤️",
"Eres mi fortuna en este juego llamado vida, la apuesta que siempre valió la pena 🎲💰",
"Como un amanecer en cámara lenta, tu amor ilumina el mundo gradualmente, llenándolo de colores vibrantes 🌅🌈",
"Nuestro amor es como una danza, donde cada paso es una expresión de nuestra conexión innegable 💃💖",
"Eres mi confidente silencioso, la razón por la cual los pensamientos susurran tu nombre en cada momento 🤫💭",
"Eres mi oasis en el desierto de la rutina, donde cada encuentro contigo es un manantial de emociones frescas 🏜️💦",
"Nuestro amor es como una novela interminable, con giros y vueltas que mantienen la intriga en cada página 📖🔄",
"En el jardín secreto de nuestro amor, cada beso es una flor que florece con la promesa de un amor eterno 🌹💋",
"Si pudiera hacerte feliz para siempre, lo haría. Pero como no puedo, te prometo amarte para siempre, cuidarte para siempre, protegerte para siempre.❤️💕👀",

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
    messageDiv.innerHTML = "Eres el sueño que nunca quiero dejar de soñar, la realidad ❤️";
    messageDiv.style.color = "#C8A2C8";
  } else {
    messageDiv.innerHTML = "Si pudiera besarte ahora mismo, lo haría. Pero como no puedo, te envío mi amor, mi cariño, mi pasión. 💋❤️🔥";
    messageDiv.style.color = "#FFC0CB";
  }

  messageDiv.style.opacity = 0;
  setTimeout(() => {
    messageDiv.style.opacity = 1;
  }, 100);

  messageCount = (messageCount + 1) % 2;
}