alert("NEW SCRIPT LOADED");

/**********************************************************
 * GLOBAL STATE
 **********************************************************/
let mode = "training";     // "training" | "exam"
let score = 0;
let correctCount = 0;
let wrongQuestions = [];
let current = 0;
let activeQuestions = [];
let currentSubject = "";
let selectedSubject = null;

// holds shuffled answers for CURRENT question only
let currentAnswers = [];
let currentCorrectIndex = -1;

/**********************************************************
 * SUBJECT NAMES
 **********************************************************/
const subjectNames = {
  airlaw: "Air Law",
  comms: "Communication",
  human: "Human Performance",
  meteo: "Meteorology",
  nav: "Navigation",
  ops: "Operational Procedures",
  perf: "Flight Performance",
  agk: "Aircraft General Knowledge",
  pof: "Principles of Flight"
};

/**********************************************************
 * QUESTION POOLS
 **********************************************************/
const subjectPools = {
  airlaw: AIRLAW_QUESTIONS,
  comms: COMMUNICATION_QUESTIONS,
  human: HUMAN_QUESTIONS,
  meteo: METEO_QUESTIONS,
  nav: NAV_QUESTIONS,
  ops: OPS_QUESTIONS,
  perf: PERFORMANCE_QUESTIONS,
  agk: AGK_QUESTIONS,
  pof: POF_QUESTIONS
};

/**********************************************************
 * MODE POPUP
 **********************************************************/
function openModePopup(subject) {
  selectedSubject = subject;
  document.getElementById("modeTitle").innerText =
    "Select mode — " + subjectNames[subject];
  document.getElementById("modeModal").style.display = "block";
}

function closeModePopup() {
  document.getElementById("modeModal").style.display = "none";
}

function confirmTraining() {
  closeModePopup();
  startTraining(selectedSubject);
}

function confirmExam() {
  closeModePopup();
  startExam(selectedSubject);
}

/**********************************************************
 * START
 **********************************************************/
function startTraining(subject) {
  mode = "training";
  resetStats();
  startQuiz(subject);
}

function startExam(subject) {
  mode = "exam";
  resetStats();
  startQuiz(subject);
}

function resetStats() {
  score = 0;
  correctCount = 0;
  wrongQuestions = [];
}

/**********************************************************
 * INIT QUIZ
 **********************************************************/
function updateCorrectCounter() {
  document.getElementById("correctCounter").innerText =
    `Correct answers: ${correctCount}`;
}

function startQuiz(subject) {
  currentSubject = subject;

  const pool = subjectPools[subject];
  if (!pool || pool.length === 0) {
    alert("No questions available for this subject yet.");
    return;
  }

  if (mode === "exam" && pool.length < 20) {
    alert("Not enough questions for exam mode.");
    return;
  }

  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("quizMain").style.display = "block";
  document.getElementById("quizEnd").style.display = "none";

  if (mode === "exam") {
    activeQuestions = [...pool].sort(() => Math.random() - 0.5).slice(0, 20);
  } else {
    activeQuestions = [...pool]; // keep original order
  }

  current = 0;
  updateCorrectCounter();
  showQuestion();
}

/**********************************************************
 * SHOW QUESTION
 **********************************************************/
function showQuestion() {
  const q = activeQuestions[current];

  document.getElementById("progress").innerText =
    `Question ${current + 1} / ${activeQuestions.length}`;
  document.getElementById("question").innerText = q.question;

  const shuffled = shuffleAnswers(q);
  currentAnswers = shuffled.answers;
  currentCorrectIndex = shuffled.correct;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  currentAnswers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => selectAnswer(i, btn);
    answersDiv.appendChild(btn);
  });

  document.getElementById("nextBtn").disabled = true;
}

/**********************************************************
 * ANSWER
 **********************************************************/
function selectAnswer(index, btn) {
  const buttons = document.querySelectorAll("#answers button");

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === currentCorrectIndex) b.classList.add("correct");
  });

  if (index === currentCorrectIndex) {
    btn.classList.add("correct");
    correctCount++;
    if (mode === "exam") score++;
  } else {
    btn.classList.add("wrong");
    wrongQuestions.push(activeQuestions[current]);
  }

  updateCorrectCounter();
  document.getElementById("nextBtn").disabled = false;
}

/**********************************************************
 * NAVIGATION
 **********************************************************/
function nextQuestion() {
  current++;
  if (current >= activeQuestions.length) endQuiz();
  else showQuestion();
}

/**********************************************************
 * EXIT QUIZ (CONFIRM MODAL)
 **********************************************************/
function exitQuiz() {
  document.getElementById("exitModal").style.display = "block";
}

function closeExitModal() {
  document.getElementById("exitModal").style.display = "none";
}

function confirmExit() {
  // Optional: autosave can go here later

  // Reset state
  mode = "training";
  score = 0;
  correctCount = 0;
  wrongQuestions = [];
  activeQuestions = [];
  current = 0;
  currentSubject = "";
  currentAnswers = [];
  currentCorrectIndex = -1;

  // Reset UI
  document.getElementById("correctCounter").innerText = "Correct answers: 0";
  document.getElementById("exitModal").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("menu").style.display = "block";
}


/**********************************************************
 * END
 **********************************************************/
function endQuiz() {
  const percent = Math.round(
    (correctCount / activeQuestions.length) * 100
  );

  if (mode === "exam") saveExamResult();

  const color = percent >= 75 ? "green" : "red";

  document.getElementById("quizMain").style.display = "none";
  document.getElementById("quizEnd").style.display = "block";

  document.getElementById("quizEnd").innerHTML = `
    <h2>Quiz finished</h2>
    <p style="font-size:20px;color:${color}">
      Correct: ${correctCount} / ${activeQuestions.length} (${percent}%)
    </p>
    <button onclick="location.reload()">Back to menu</button>
  `;
}

/**********************************************************
 * SHUFFLE ANSWERS (SAFE)
 **********************************************************/
function shuffleAnswers(question) {
  const indexed = question.answers.map((a, i) => ({ text: a, idx: i }));
  indexed.sort(() => Math.random() - 0.5);

  return {
    answers: indexed.map(i => i.text),
    correct: indexed.findIndex(i => i.idx === question.correct)
  };
}
