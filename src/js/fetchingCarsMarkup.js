import { fetchData } from './fetchData.js';
import { defaultImageUrls } from '../data/carsImgUrl.js';

const heroButton = document.querySelector('.hero-button');
const carWrapper = document.querySelector('.car-wrapper');

const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * defaultImageUrls.length);
  return defaultImageUrls[randomIndex];
};

export const renderCars = cars => {
  carWrapper.innerHTML = '';
  cars.forEach(car => {
    const imageUrl = car.imageUrl ? car.imageUrl : getRandomImageUrl();

    const imageWidth = 295;
    const imageHeight = 200;
    const carHTML = `
    <li class="car-item">
        <img src="${imageUrl}" alt="${
      car.make
    }" width="${imageWidth}" height="${imageHeight}" class="car-image">
        <div class="car-title__wrapper">
            <p class="car-text">${car.year}</p>
            <h4 class="car-title">${car.make} ${car.model}</h4>
        </div>
        <div class="car-text__wrapper">
            <p class="car-descr">${car.mileage.toLocaleString('en-US')} km</p>
            <p class="car-descr">${car.transmission}</p>
            <p class="car-descr">${car.fuelType}</p>
        </div>
        <h2 class="car-price">$${car.price.toLocaleString('en-US')}</h2>
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
