// commands.js

const help = [
  'whois       Cos\'è Bunker Buddies?',
  'dossier       Profili dettagliati di personaggi e NPC',
  'resources       Database di risorse disponibili per i personaggi',
  'missions       Dettagli specifici sulle missioni correnti',
  'intel       Informazioni di intelligence che i personaggi hanno raccolto'
];

function processCommand() {
  const input = document.getElementById('commandInput');
  const output = document.getElementById('output');
  const cmd = input.value.toLowerCase();
  input.value = ''; // Clear input after command

    commandInput.value = "";
    textWidthCalculator.textContent = ""; // Resetta il calcolatore di larghezza
    customCaret.style.transform = "translateX(0px)"; // Resetta la posizione del caret

  // Store command in history
  if (cmd !== '') {
    commandHistory.push(cmd);
    historyIndex = commandHistory.length;
  }

  switch (cmd) {
    case 'help':
      output.innerHTML = help.join('<br>');
      break;
    case 'whois':
      output.innerHTML = 'Bunker Buddies è un gioco di ruolo ...';
      break;
    case 'shadow_files':
      output.innerHTML = 'Accesso ai file segreti ...';
      break;
    case 'dossier':
      output.innerHTML = 'Caricamento dei dossier ...';
      break;
    case 'resources':
      output.innerHTML = 'Accesso al database delle risorse ...';
      break;
    case 'missions':
      output.innerHTML = 'Dettagli sulle missioni correnti ...';
      break;
    case 'intel':
      output.innerHTML = 'Informazioni di intelligence ...';
      break;
    default:
      output.innerHTML = 'Comando non riconosciuto. Prova "help" per una lista di comandi.';
  }
}
