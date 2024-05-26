// history.js

let commandHistory = [];
let historyIndex = 0;

document.getElementById('commandInput').addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp') {
    if (historyIndex > 0) {
      historyIndex--;
      this.value = commandHistory[historyIndex];
    }
    event.preventDefault();  // Prevent the cursor from moving.
  } else if (event.key === 'ArrowDown') {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      this.value = commandHistory[historyIndex];
    } else if (historyIndex === commandHistory.length - 1) {
      this.value = '';
    }
    event.preventDefault();  // Prevent the cursor from moving.
  }
});

document.getElementById('passwordInput').addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp') {
    if (historyIndex > 0) {
      historyIndex--;
      this.value = commandHistory[historyIndex];
    }
    event.preventDefault();
  } else if (event.key === 'ArrowDown') {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      this.value = commandHistory[historyIndex];
    } else if (historyIndex === commandHistory.length - 1) {
      this.value = '';
    }
    event.preventDefault();
  }
});