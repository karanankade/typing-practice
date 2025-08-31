// -----------------------------
// Typing Practice (script.js)
// Copy-paste, drag/drop & context-menu prevention added
// -----------------------------

const paragraphPool = [
  "Typing is one of the most important skills in the digital age. Fast and accurate typing can save you valuable time every day.",
  "Consistent practice is the key to becoming a better typist. Accuracy should always come before speed.",
  "Good posture helps prevent strain while typing. Sit straight and keep your wrists relaxed.",
  "Professional typists often reach speeds above 100 words per minute with accuracy above ninety five percent.",
  "Typing without looking at the keyboard is known as touch typing. This skill builds muscle memory over time.",
  "Short typing sessions each day are more effective than long and irregular practice.",
  "Errors slow you down more than you realize. Correcting mistakes takes extra time and focus.",
  "Learning keyboard shortcuts can make you more productive in addition to improving typing speed.",
  "Most typing practice tools measure words per minute and accuracy as the main performance metrics.",
  "Reading the text before typing helps you prepare your mind and fingers for the next words.",
  "Typing tests are a great way to track your progress over days and weeks.",
  "Avoid slouching or leaning too close to the screen. A comfortable position boosts efficiency.",
  "Typing rhythm develops naturally as your fingers learn where each key is located.",
  "Improving typing speed requires patience. Focus on steady progress instead of rushing.",
  "Many jobs today require fast and accurate typing skills for daily communication.",
  "Typing exercises with long words challenge your coordination and improve finger agility.",
  "Practicing with real world text such as articles and essays makes typing more practical.",
  "The QWERTY keyboard layout was designed in the 1800s and is still the most common today.",
  "Typing competitions are fun ways to test your skills against others while improving speed.",
  "With dedication, anyone can become a fast typist. The secret is consistency and practice."
];

// Shuffle helper (Fisher–Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Generate unique paragraph order
let paragraphs = shuffleArray([...paragraphPool]);

let currentIndex = 0;
let currentText = paragraphs[currentIndex];
let userInput = '';
let isStarted = false;
let startTime = null;
let timerInterval = null;
let stats = { wpm: 0, accuracy: 100, errors: 0, timeElapsed: 0, completed: 0 };

const textDisplay = document.getElementById('textDisplay');
const typingInput = document.getElementById('typingInput');
const resetBtn = document.getElementById('resetBtn');
const results = document.getElementById('results');

// === Copy / Paste / Drag / Context prevention ===

// Prevent clipboard actions globally (for text selection areas)
['copy', 'cut', 'paste'].forEach(evt =>
  document.addEventListener(evt, function(e) {
    // allow clipboard actions in developer console? No — block everywhere
    e.preventDefault();
  })
);

// Prevent context menu (right-click / long-press menu)
document.addEventListener('contextmenu', function(e) {
  // Allow context menu on inputs only if you want; here we block globally.
  e.preventDefault();
});

// Prevent dragstart and drop globally (so someone can't drag text into the input)
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});
document.addEventListener('drop', function(e) {
  e.preventDefault();
});

// Block keyboard paste/copy/cut shortcuts (Ctrl/Cmd + V/C/X), also Shift+Insert
document.addEventListener('keydown', function(e) {
  // normalize key string
  const key = (e.key || '').toLowerCase();

  // detect CMD or CTRL
  const isMod = e.ctrlKey || e.metaKey;

  if (isMod && (key === 'v' || key === 'c' || key === 'x' || key === 'a')) {
    e.preventDefault();
    return;
  }

  // Shift+Insert (paste) or Ctrl+Insert
  if ((e.shiftKey && key === 'insert') || (e.ctrlKey && key === 'insert')) {
    e.preventDefault();
  }
});

// Additionally prevent dropping text specifically into the typing input
typingInput.addEventListener('drop', (e) => e.preventDefault());

// Prevent paste/copy/cut on the typing input specifically (already present in original)
typingInput.addEventListener("paste", (e) => e.preventDefault());
typingInput.addEventListener("copy", (e) => e.preventDefault());
typingInput.addEventListener("cut", (e) => e.preventDefault());

// Hide selection on mobile long-press / prevent selection on the text display is handled via CSS.
// But we'll also guard touch events to stop some long-press behavior:
let touchTimer = null;
textDisplay.addEventListener('touchstart', function(e) {
  // small guard: prevent long-press select menu on some browsers
  if (touchTimer) clearTimeout(touchTimer);
  touchTimer = setTimeout(() => {
    // if long-press detected, prevent default
    e.preventDefault();
  }, 500);
});
textDisplay.addEventListener('touchend', function() {
  if (touchTimer) clearTimeout(touchTimer);
  touchTimer = null;
});

// === End copy/paste prevention ===

// Rendering & stats functions (unchanged core logic, slightly reorganized)

function displayText() {
  textDisplay.innerHTML = '';
  for (let i = 0; i < currentText.length; i++) {
    const span = document.createElement('span');
    span.className = 'char ' + getCharacterClass(i);
    span.textContent = currentText[i] === ' ' ? '\u00A0' : currentText[i];
    textDisplay.appendChild(span);
  }
}

function getCharacterClass(index) {
  if (index < userInput.length) {
    return userInput[index] === currentText[index] ? 'char-correct' : 'char-incorrect';
  } else if (index === userInput.length) {
    return 'char-current';
  } else {
    return 'char-pending';
  }
}

function updateStatsDisplay() {
  document.getElementById('wpm').textContent = stats.wpm;
  document.getElementById('accuracy').textContent = stats.accuracy + '%';
  document.getElementById('errors').textContent = stats.errors;
  document.getElementById('time').textContent = Math.round(stats.timeElapsed); // seconds
  document.getElementById('paragraphs').textContent = stats.completed;
}

function calculateStats() {
  if (!startTime) return; // only calculate when timer started

  const elapsedMs = Date.now() - startTime;
  const timeElapsedSec = elapsedMs / 1000;
  const timeElapsedMin = elapsedMs / 1000 / 60;

  const wordsTyped = userInput.length / 5;
  const wpm = timeElapsedMin > 0 ? Math.round(wordsTyped / timeElapsedMin) : 0;

  // Count errors only up to the lesser of typed length and currentText length,
  // plus extra chars typed beyond the paragraph count as errors
  let errors = 0;
  const compareLen = Math.min(userInput.length, currentText.length);
  for (let i = 0; i < compareLen; i++) {
    if (userInput[i] !== currentText[i]) errors++;
  }
  if (userInput.length > currentText.length) {
    errors += userInput.length - currentText.length;
  }

  const accuracy = userInput.length > 0 ? Math.max(0, Math.round(((userInput.length - errors) / userInput.length) * 100)) : 100;

  stats.wpm = wpm;
  stats.accuracy = accuracy;
  stats.errors = errors;
  stats.timeElapsed = timeElapsedSec;

  updateStatsDisplay();
}

function startTimer() {
  // ensure no duplicate intervals
  if (timerInterval) clearInterval(timerInterval);
  isStarted = true;
  startTime = Date.now();
  timerInterval = setInterval(calculateStats, 1000);
}

function nextParagraph() {
  // finalize this paragraph
  stats.completed++;

  // stop current timer and reset start flags so next paragraph starts fresh
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  isStarted = false;
  startTime = null;

  // move index and load next (reshuffle when finished)
  currentIndex++;
  if (currentIndex < paragraphs.length) {
    currentText = paragraphs[currentIndex];
  } else {
    paragraphs = shuffleArray([...paragraphPool]);
    currentIndex = 0;
    currentText = paragraphs[currentIndex];
  }

  // reset input for next paragraph
  userInput = '';
  typingInput.value = '';
  displayText();

  // reset per-paragraph visible stats (keeps stats.completed count)
  stats.wpm = 0;
  stats.accuracy = 100;
  stats.errors = 0;
  stats.timeElapsed = 0;
  updateStatsDisplay();

  typingInput.focus();
}

function resetTyping() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  paragraphs = shuffleArray([...paragraphPool]);
  currentIndex = 0;
  currentText = paragraphs[currentIndex];
  userInput = '';
  isStarted = false;
  startTime = null;
  stats = { wpm: 0, accuracy: 100, errors: 0, timeElapsed: 0, completed: 0 };

  typingInput.value = '';
  typingInput.disabled = false;
  results.style.display = 'none';

  updateStatsDisplay();

  displayText();
  typingInput.focus();
}

typingInput.addEventListener('input', function(e) {
  const value = e.target.value;

  // start timer only when user begins typing the current paragraph
  if (!isStarted && value.length > 0) {
    startTimer();
  }

  // accept typing only up to some reasonable limit (we still handle extra chars as errors)
  userInput = value;
  displayText();
  calculateStats();

  // if paragraph finished exactly
  if (value === currentText) {
    nextParagraph();
  }
});

resetBtn.addEventListener('click', resetTyping);

// Initialize
displayText();
typingInput.focus();
