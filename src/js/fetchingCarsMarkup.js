import { fetchData } from './fetchData.js';
import { defaultImageUrls } from '../data/carsUrl.js';

const heroButton = document.querySelector('.hero-button');
const carWrapper = document.querySelector('.car-wrapper');

const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * defaultImageUrls.length);
  return defaultImageUrls[randomIndex];
};

const renderCars = cars => {
  carWrapper.innerHTML = '';
  cars.forEach(car => {
    const imageUrl = car.imageUrl ? car.imageUrl : getRandomImageUrl();

    const imageWidth = 295;
    const imageHeight = 200;
    const carHTML = `
      <li>
        <img src="${imageUrl}" alt="${car.make}" width="${imageWidth}" height="${imageHeight}">
        <h3>${car.make}</h3>
        <p>${car.model}</p>
        <p>${car.year}</p>
        <span>$${car.price}</span>
      </li>
    `;
    carWrapper.innerHTML += carHTML;
  });
};

heroButton.addEventListener('click', async () => {
  try {
    const data = await fetchData();
    renderCars(data);
    carWrapper.classList.remove('hidden');
  } catch (error) {
    console.error(error);
  }
});
