import { questions } from '../data/questions';

const questionsListEl = document.getElementById('quest-list');

questions.forEach(question => {
  const liElement = document.createElement('li');
  liElement.classList.add('quest-item');
  liElement.innerHTML = `
    <h4 class="quest-subtitle">${question.title}</h4>
    <p class="quest-text hidden">${question.text}</p>
    <button class="quest-btn" type="button">
       <span class="plus">+</span><span class="minus hidden">-</span>
    </button>
    <hr>
  `;

  questionsListEl.appendChild(liElement);
});

document.querySelectorAll('.quest-btn').forEach(button => {
  button.addEventListener('click', function () {
    const p = this.previousElementSibling;
    const plus = this.querySelector('.plus');
    const minus = this.querySelector('.minus');

    p.classList.toggle('hidden');
    plus.classList.toggle('hidden');
    minus.classList.toggle('hidden');
  });
});
