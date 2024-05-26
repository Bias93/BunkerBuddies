// commands.js

const help = [
  'whois           Cos\'è Bunker Buddies?',
  'dossier         Profili dettagliati di personaggi e NPC',
  'resources       Database di risorse disponibili per i personaggi',
  'missions        Dettagli specifici sulle missioni correnti',
  'intel           Informazioni di intelligence che i personaggi hanno raccolto'
];

function processCommand() {
  const input = document.getElementById('commandInput');
  const terminal = document.getElementById('outputt');
  const cmd = input.value.toLowerCase();
  input.value = ''; // Clear input after command
  resetCaret(); // Reset the caret position to the beginning

  // Store command in history
  if (cmd !== '') {
    commandHistory.push(cmd);
    historyIndex = commandHistory.length;
  }

  let responseLines = []; // This will hold lines of text as array elements.

  // Display the command in the terminal
  const commandDisplay = document.createElement('p');
  commandDisplay.textContent = '> ' + cmd;
  commandDisplay.style.color = 'lime';
  commandDisplay.style.fontFamily = "'VT323', monospace";
  commandDisplay.style.fontSize = '1.5rem';
  commandDisplay.style.textShadow = '0 0 5px rgba(0, 255, 0, 0.5)';
  commandDisplay.style.margin = '0';
  commandDisplay.style.lineHeight = '1.3em';
  terminal.appendChild(commandDisplay);

  // Determine response based on command
  switch (cmd) {
    case 'help':
      responseLines = help;
      break;
    case 'whois':
      responseLines = ['Bunker Buddies è un gioco di ruolo ...'];
      break;
    case 'shadow_files':
      responseLines = ['Accesso ai file segreti ...'];
      break;
    case 'dossier':
      responseLines = ['Caricamento dei dossier ...'];
      break;
    case 'resources':
      responseLines = ['Accesso al database delle risorse ...'];
      break;
    case 'missions':
      responseLines = ['Dettagli sulle missioni correnti ...'];
      break;
    case 'intel':
      responseLines = ['Informazioni di intelligence ...'];
      break;
    default:
      responseLines = ['Comando non riconosciuto. Prova "help" per una lista di comandi.'];
  }

  
  // Create and append a blank <p> element as a spacer before the response
  const preSpacer = document.createElement('p');
  preSpacer.style.minHeight = '1.5rem'; // Ensure the spacer has a visible height
  terminal.appendChild(preSpacer);

  // Append each line as a <p> element directly to the terminal div
  responseLines.forEach(line => {
    const p = document.createElement('p');
    p.textContent = line;
    p.style.color = 'lime';
    p.style.fontFamily = "'VT323', monospace";
    p.style.fontSize = '1.5rem';
    p.style.textShadow = '0 0 5px rgba(0, 255, 0, 0.5)';
    p.style.margin = '0';
    p.style.lineHeight = '1.3em';
    p.style.marginLeft = '20px';
    outputt.appendChild(p);
  });

    // Create and append a blank <p> element as a spacer after the response
    const postSpacer = document.createElement('p');
    postSpacer.style.minHeight = '1.5rem'; // Ensure the spacer has a visible height
    terminal.appendChild(postSpacer);

  // Ensure the input field is always in view after executing command
  input.scrollIntoView(false);
}


function resetCaret() {
  const textWidthCalculator = document.getElementById('textWidthCalculator');
  const customCaret = document.getElementById('customCaret');
  textWidthCalculator.textContent = ''; // Clear the text width calculator
  customCaret.style.transform = 'translateX(0px)'; // Reset caret position
}