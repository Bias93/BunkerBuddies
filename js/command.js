// commands.js

const help = [
  'whois              Cos\'è Bunker Buddies?',
  'dossier            Profili dettagliati di personaggi e NPC',
  'resources          Database di risorse disponibili per i personaggi',
  'missions           Dettagli specifici sulle missioni correnti',
  'intel              Informazioni di intelligence che i personaggi hanno raccolto'
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

  function addLineWithDelay(line, index, totalLines) {
    const p = document.createElement('p');
    p.textContent = line;
    p.classList.add('output-line'); // Add class for initial styling
    p.style.color = 'lime';
    p.style.fontFamily = "'VT323', monospace";
    p.style.fontSize = '1.5rem';
    p.style.textShadow = '0 0 5px rgba(0, 255, 0, 0.5)';
    p.style.margin = '0';
    p.style.lineHeight = '1.3em';
    p.style.marginLeft = '20px';
    p.style.whiteSpace = 'pre';
    p.style.overflow = 'hidden';
    // Calculate delay based on index
    let animationDelay = index * 0.1; // 0.5 seconds per line
    p.style.animation = `typing 0.5s steps(30, end) ${animationDelay}s forwards`;
    outputt.appendChild(p);
  }
  
  // Loop through responseLines and apply function with delay
  responseLines.forEach((line, index) => {
    addLineWithDelay(line, index, responseLines.length);
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

window.onload = function() {
  const titleElement = document.getElementById('title');
  const lines = titleElement.textContent.split('\n');
  titleElement.textContent = ''; // Clear the existing content

  for (let i = 0; i < lines.length; i++) {
    const p = document.createElement('p');
    p.textContent = lines[i];
    p.classList.add('titles'); // Add the 'titles' class
    p.style.whiteSpace = 'pre';
    p.style.overflow = 'hidden';
    let animationDelay = i * 0.07; // 0.1 seconds per line
    p.style.animation = `typing 0.5s steps(30, end) ${animationDelay}s forwards`;
    titleElement.appendChild(p);
  }
};