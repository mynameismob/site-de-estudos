import { quizBank } from './data.js';

const container = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

let currentQuestions = [];

function generateQuiz(count = 10) {
  // pick random questions
  const shuffled = [...quizBank].sort(() => Math.random() - 0.5);
  currentQuestions = shuffled.slice(0, Math.min(count, quizBank.length));
  container.innerHTML = '';
  currentQuestions.forEach((q, idx) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'question-block';
    const qHeading = document.createElement('h3');
    qHeading.textContent = `${idx + 1}. ${q.question}`;
    qDiv.appendChild(qHeading);
    q.options.forEach(opt => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${idx}`;
      input.value = opt;
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      qDiv.appendChild(label);
      qDiv.appendChild(document.createElement('br'));
    });
    container.appendChild(qDiv);
  });
}

submitBtn.addEventListener('click', () => {
  let score = 0;
  const total = currentQuestions.length;
  currentQuestions.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  const percentage = Math.round((score / total) * 100);
  resultDiv.textContent = `Você acertou ${score} de ${total} questões (${percentage}%).`;
});

// initialise
generateQuiz();
