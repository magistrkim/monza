import { questions } from '../data/questionsContent.js';

const questionsListEl = document.getElementById('quest-list');

questions.forEach(question => {
  const liElement = document.createElement('li');
  liElement.classList.add('quest-item');
  liElement.innerHTML = `
  <div  class="quest-wrapper">
    <h3 class="quest-subtitle">${question.id}. ${question.title}</h3>
    <button class="quest-btn" type="button">
       <span class="plus">+</span><span class="minus hidden">-</span>
    </button>
  
</div>
<div class="hidden">
    <p class="quest-text">${question.text}</p>
</div>
  `;

  questionsListEl.appendChild(liElement);
});

document.querySelectorAll('.quest-btn').forEach(button => {
  button.addEventListener('click', function () {
    const textDiv = this.parentElement.nextElementSibling;
    const plus = this.querySelector('.plus');
    const minus = this.querySelector('.minus');

    textDiv.classList.toggle('hidden');
    plus.classList.toggle('hidden');
    minus.classList.toggle('hidden');

    this.closest('.quest-item').classList.toggle('expanded');
  });
});
