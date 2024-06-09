import { fetchData } from './fetchData.js';
import { renderCars } from './fetchingCarsMarkup.js';

const filterCars = () => {
  const selectedYear = parseInt(document.getElementById('year').value);
  const selectedMake = document.getElementById('make').value;
  const selectedModel = document.getElementById('model').value;
  const selectedFuelType = document.getElementById('fuelType').value;
  const selectedMileage = document.getElementById('mileage').value;
  const sortCriteria = document.getElementById('sort-select').value;

  fetchData()
    .then(data => {
      const filteredCars = data.filter(car => {
        return (
          (!selectedYear || parseInt(car.year) === selectedYear) &&
          (!selectedMake || car.make === selectedMake) &&
          (!selectedModel || car.model === selectedModel) &&
          (!selectedFuelType || car.fuelType === selectedFuelType) &&
          (!selectedMileage || car.mileage <= selectedMileage)
        );
      });

      if (sortCriteria === 'Price (ascending)') {
        filteredCars.sort((a, b) => a.price - b.price);
      } else if (sortCriteria === 'Price (descending)') {
        filteredCars.sort((a, b) => b.price - a.price);
      } else if (sortCriteria === 'Mileage (ascending)') {
        filteredCars.sort((a, b) => a.mileage - b.mileage);
      } else if (sortCriteria === 'Mileage (descending)') {
        filteredCars.sort((a, b) => b.mileage - a.mileage);
      }

      renderCars(filteredCars);
      const noCarsMessage = document.querySelector('.no-cars-message');
      if (filteredCars.length === 0) {
        noCarsMessage.classList.remove('hidden');
      } else {
        noCarsMessage.classList.add('hidden');
      }
    })

    .catch(error => console.error(error));
};

const offersButton = document.querySelector('.offers-btn');
offersButton.addEventListener('click', filterCars);
