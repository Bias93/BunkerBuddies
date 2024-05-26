// focus.js

function keepFocus(id) {
  document.getElementById(id).focus();
}

// Stessa gestione degli eventi di prima, inclusa la funzione submitOnEnter
function submitOnEnter(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
}

function checkPassword() {
  const passwordInput = document.getElementById('passwordInput');
  const errorMessage = document.getElementById('errorMessage');
  const password = passwordInput.value;
  if (password === "1234") { // Sostituisci con la tua password reale
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('main').style.display = 'flex';
    document.getElementById('commandInput').focus(); // Imposta il focus sull'input del comando dopo il login
  } else {
    errorMessage.style.display = 'block'; // Mostra il messaggio di errore
    setTimeout(() => {
      errorMessage.style.display = 'none'; // Nascondi il messaggio dopo un breve intervallo
    }, 2000); // Intervallo di tempo prima che il messaggio scompaia
    passwordInput.value = '';
    passwordInput.focus(); // Reimposta il focus sulla password in caso di errore
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Nascondi il terminale all'inizio
  document.getElementById('main').style.display = 'none';

  // Imposta il focus iniziale sull'input della password
  document.getElementById('passwordInput').focus();
});

// Mantieni il focus sull'input del comando
const commandInput = document.getElementById('commandInput');
commandInput.addEventListener('blur', function() {
  commandInput.focus();
});

// Mantieni il focus sull'input della password
const passwordInput = document.getElementById('passwordInput');
passwordInput.addEventListener('blur', function() {
  passwordInput.focus();
});

let customCaret = document.getElementById('customCaret');

commandInput.addEventListener('input', function() {
  customCaret.textContent = this.value.endsWith('_') ? ' ' : '_';
});

const textWidthCalculator = document.getElementById('textWidthCalculator');

commandInput.addEventListener('input', function() {
  // Copia il contenuto di commandInput in textWidthCalculator
  textWidthCalculator.textContent = this.value;

  // Misura la larghezza del testoWidthCalculator
  const textWidth = textWidthCalculator.offsetWidth;

  // Sposta il customCaret in base alla larghezza del testo
  customCaret.style.transform = `translateX(${textWidth}px)`;
});

// Aggiornamento iniziale al caricamento della pagina per posizionare correttamente il caret
document.addEventListener('DOMContentLoaded', function() {
  // Inizializza la posizione del caret se c'è del testo preesistente
  textWidthCalculator.textContent = commandInput.value;
  const textWidth = textWidthCalculator.offsetWidth;
  customCaret.style.transform = `translateX(${textWidth}px)`;
});

passwordInput.addEventListener('input', function() {
  // Usa un calcolatore di larghezza simile se necessario o riposiziona direttamente il caret
  let textWidth = passwordInput.value.length * 10; // Approssimazione basata sulla larghezza carattere
  passwordCaret.style.transform = `translateX(${textWidth}px)`;
});

// Assicurati che il caret venga posizionato correttamente all'inizio
document.addEventListener('DOMContentLoaded', function() {
  let textWidth = passwordInput.value.length * 10;
  passwordCaret.style.transform = `translateX(${textWidth}px)`;
});