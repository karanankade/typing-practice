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
  "With dedication, anyone can become a fast typist. The secret is consistency and practice.",
  "In today’s digital economy, typing is as essential as reading and writing. People who type efficiently are able to complete tasks more quickly, leaving more time for creative thinking and problem solving. Developing this skill does not happen overnight, but through consistent practice and mindful improvement, anyone can see progress within a few weeks. By focusing on accuracy first and gradually increasing speed, you create a strong foundation that ensures long-term results.",
  
  "The posture you maintain while typing has a direct effect on both your speed and your overall health. Poor habits such as slouching or leaning forward can cause strain on your back, shoulders, and wrists. Over time, this may lead to repetitive strain injuries that are difficult to recover from. To avoid this, keep your feet flat on the floor, your wrists relaxed, and your eyes level with the screen. These adjustments may seem small, but they significantly improve comfort during long sessions.",
  
  "Typing quickly is valuable, but typing accurately is far more important in professional settings. For example, when writing an email to a client, a single error may change the meaning of a sentence or make the writer appear careless. This is why accuracy is emphasized in typing practice. By slowing down at first and ensuring each word is typed correctly, you reduce mistakes and gradually build up the speed required to keep pace with your thoughts.",
  
  "Technology has advanced so much that typing skills are not only limited to computers. Smartphones, tablets, and even wearable devices now rely heavily on text input. While on-screen keyboards differ from physical ones, the underlying principle remains the same: efficient use of muscle memory and precision. Practicing on multiple devices helps you adapt to different layouts, improving your ability to communicate seamlessly across platforms.",
  
  "When measuring typing performance, words per minute and accuracy are the two most common metrics. However, another equally important factor is rhythm. A typist with a steady rhythm experiences fewer interruptions and develops a smoother flow of thought while writing. This is particularly beneficial when drafting essays, programming code, or even chatting online, where speed and clarity both play vital roles in effective communication.",
  
  "The origins of the QWERTY keyboard layout go back to the nineteenth century, when mechanical typewriters were first invented. At that time, the arrangement of letters was carefully designed to prevent typebars from jamming. Despite the availability of more efficient layouts today, QWERTY remains the global standard. This persistence highlights how habits, tradition, and widespread adoption can outweigh efficiency in technological progress.",
  
  "Learning to type without looking at the keyboard, also called touch typing, is the most efficient way to develop speed. At first, it may feel uncomfortable to rely only on your sense of touch. However, over time your brain forms muscle memory that allows your fingers to find the correct keys automatically. This process is similar to learning to ride a bicycle: once mastered, the skill stays with you for life and requires little conscious thought.",
  
  "Short, consistent practice sessions are better than irregular long ones. Typing for just fifteen minutes a day builds familiarity and prevents fatigue, while extended sessions without breaks often lead to frustration. This principle is supported by scientific studies on learning and memory, which show that repetition spaced over time creates stronger neural connections. By practicing daily, even for a short duration, you build skill and confidence faster.",
  
  "Errors in typing are more costly than most people realize. Every mistake requires time to correct, whether it is deleting characters, retyping a word, or reviewing for accuracy. These interruptions break rhythm and slow down overall performance. By training yourself to type accurately at a slower pace, you reduce errors and save time in the long run. Eventually, as your accuracy improves, speed increases naturally without conscious effort.",
  
  "Typing is not only about mechanical input; it is about communication. The speed and accuracy with which you type affect how effectively you express your thoughts. When your fingers can keep up with your mind, ideas flow more smoothly onto the screen. This allows for greater creativity, whether you are writing stories, drafting business documents, or coding software. In this sense, typing is both a technical and a creative skill that enhances productivity.",

  "Many people underestimate the role of typing in career development. Whether you are a programmer, a writer, or even a student, the ability to type quickly and accurately directly influences your productivity. Emails, reports, and documentation all rely on this simple skill. By mastering typing, you gain an edge in virtually every profession that requires digital communication.",
  
  "Typing also plays a significant role in learning. Students who type efficiently can take notes faster, complete assignments more quickly, and research more effectively. Instead of struggling with slow input, their focus remains on comprehension and creativity. This advantage grows over time, making typing practice a worthwhile investment during school years.",
  
  "The human brain adapts quickly to repetitive tasks, and typing is no exception. When you practice consistently, your brain creates stronger neural pathways that guide your fingers without conscious effort. This is why experienced typists often describe the feeling as their hands 'thinking for them.' The more you practice, the more automatic and fluid the process becomes.",
  
  "Distractions are one of the biggest barriers to improving typing speed. Typing requires concentration, hand coordination, and rhythm, all of which are disrupted by notifications or background noise. By setting aside a dedicated practice time in a quiet environment, you maximize learning and minimize errors. Focus is the hidden ingredient in skill development.",
  
  "Professional typists use techniques such as keeping their wrists elevated and their hands in a neutral position to prevent fatigue. Small details like these make a huge difference during long typing sessions. Ignoring ergonomics may not hurt immediately, but over months and years, poor form can cause pain and even injury. Healthy typing habits build sustainable progress.",
  
  "Typing speed is measured in words per minute, but true skill is measured by a balance of speed and accuracy. A person who types 80 words per minute with many errors may not be as effective as someone typing 60 words per minute with near-perfect accuracy. Efficiency comes from this balance, and practice ensures both metrics improve together.",
  
  "Children who learn typing early often excel in school projects and digital tasks. Instead of being slowed down by manual writing or slow input, they can produce essays, presentations, and research papers faster. As classrooms continue to integrate technology, touch typing becomes as valuable as reading comprehension or math skills. Early exposure pays lifelong dividends.",
  
  "Every writer, journalist, and blogger knows the importance of typing speed. Ideas can vanish if not captured quickly, and slow typing creates a barrier between thought and expression. By improving typing, writers create a smoother pipeline from imagination to the page. This allows creativity to flow naturally without interruption.",
  
  "Coding and software development demand high typing efficiency. Programmers spend hours writing syntax, commands, and comments, all of which require precision. Even a small error like a missing semicolon can cause bugs. Developers who type accurately spend less time debugging typos and more time solving real problems.",
  
  "Online communication has become the default mode of interaction for billions of people. Social media, messaging apps, and forums all depend on written input. Fast typists can respond quickly in conversations, keeping discussions lively and engaging. In contrast, slow typing can create delays and frustration in fast-paced digital interactions.",
  
  "Typing competitions have grown popular online, where participants challenge themselves to reach new personal records. These contests are both fun and motivating, pushing typists to focus under pressure. Competing with others provides an extra layer of accountability, making practice feel less like work and more like a game. For many, competition becomes the key driver of progress.",
  
  "In remote work, typing is the backbone of productivity. Teams spread across different locations rely heavily on chat platforms, emails, and collaborative documents. Efficient typing ensures smoother collaboration, fewer delays, and greater clarity in communication. Employers often prefer candidates who demonstrate strong typing ability because it directly impacts workflow efficiency.",
  
  "Typing is not just a mechanical activity; it also sharpens focus and patience. Unlike passive entertainment, typing practice requires active engagement and discipline. Over time, this mental effort strengthens concentration skills that carry over into other areas of life. In this way, typing practice benefits both mind and body.",
  
  "One of the best strategies to improve typing is to practice with varied content. Articles, stories, technical documents, and even poetry provide different kinds of challenges. This variety prevents boredom and builds adaptability, preparing typists for any text they may encounter. Practicing with diverse material creates a more versatile skillset.",
  
  "Muscle memory is the secret ingredient in touch typing. At first, you must consciously think about each finger’s position. Gradually, the brain transfers this process to the subconscious, allowing you to type without looking. This automatic movement frees your mind to focus on content instead of mechanics.",
  
  "Speed drills are a common exercise for typists who want rapid improvement. By repeating sequences of letters, words, or sentences, the fingers become more agile and precise. These drills can be challenging, but they build stamina and confidence. Just like athletes train with repetition, typists sharpen their skills with consistent practice.",
  
  "Typing also influences reading ability. As you type, you develop stronger word recognition skills and faster eye movement across text. This dual reinforcement helps you read and process information more quickly. In this way, typing practice doubles as a reading improvement tool.",
  
  "Ergonomic keyboards, wrist rests, and adjustable chairs may seem unnecessary at first, but they become invaluable for serious typists. These tools prevent strain and improve comfort, especially for people who type for hours every day. A good setup can mean the difference between steady progress and long-term injury. Investing in ergonomics is investing in your health.",
  
  "Digital exams and online tests now often require typing instead of handwriting. Students who type faster gain extra time to think and review answers. Slow typing, on the other hand, can cost valuable minutes. This demonstrates how typing speed directly influences academic performance in modern education.",
  
  "Ultimately, typing is about freedom. When your hands can keep up with your thoughts, you feel empowered to express yourself without barriers. Whether you are writing a novel, chatting with friends, or building software, fast and accurate typing gives you confidence. It is not just a technical skill—it is a lifelong advantage.",

    "Typing is a skill that blends both mental and physical coordination. Your eyes scan the text, your brain processes the words, and your fingers execute the movements in harmony. At first, this feels like juggling too many tasks at once, but with repetition, it becomes second nature. The smoother this coordination becomes, the faster and more accurate your typing will be.",
  
  "Consistency is the single most important factor in skill development. Practicing typing for just ten minutes daily is far more effective than a single hour-long session once a week. Each small session reinforces habits and prevents skill decay. Over time, these small efforts add up to noticeable improvement, proving that steady practice always beats occasional intensity.",
  
  "Some people believe they are naturally 'bad typists,' but this is rarely true. Typing is not about talent—it is about habit formation and repetition. Everyone starts slowly, and mistakes are a natural part of the learning curve. With patience and discipline, even the slowest beginners can develop professional-level typing speed.",
  
  "Typing also improves cognitive sharpness by training the brain to process information faster. When your hands automatically keep up with your thoughts, your mind is free to focus on ideas instead of mechanics. This efficiency boosts creativity and problem-solving skills. In many ways, typing is both a physical skill and a mental workout.",
  
  "The digital workplace is built on written communication. Chat messages, emails, reports, and documentation form the backbone of modern collaboration. A professional who types quickly can participate in discussions seamlessly and complete tasks without delay. This efficiency not only saves time but also creates a more confident and competent impression.",
  
  "Touch typing removes the constant need to glance at the keyboard. This small shift makes a huge difference because your eyes remain on the text or the screen. By reducing visual distractions, you stay more engaged with your work and less likely to make errors. Over time, this creates a sense of flow where typing feels effortless.",
  
  "The process of mastering typing is similar to learning a musical instrument. Both require rhythm, timing, and muscle memory. Just as a pianist practices scales, a typist practices keystrokes and word combinations. This disciplined repetition transforms slow, awkward movements into smooth and natural performance.",
  
  "Typing practice can be gamified to make learning fun. Many platforms introduce challenges, levels, and progress tracking that keep motivation high. Turning practice into a game reduces boredom and increases consistency. This playful approach ensures steady improvement without feeling like a chore.",
  
  "One overlooked aspect of typing is the emotional benefit it provides. Being able to express thoughts quickly gives a sense of control and confidence. Whether you are journaling, messaging a friend, or drafting an important email, typing smoothly makes communication more enjoyable. This positive feedback encourages even more practice.",
  
  "Ultimately, typing is not just about input speed—it is about unlocking your full potential in a digital world. The faster you type, the closer the connection between your thoughts and your words. This creates a direct pipeline from mind to screen, allowing creativity and productivity to thrive. Mastering typing truly means mastering digital expression."

  
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

