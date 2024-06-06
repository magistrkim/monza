import { fetchData } from './fetchData';

const populateSelect = (selectElement, data, key) => {
  while (selectElement.options.length > 1) {
    selectElement.remove(1);
  }

  const uniqueValues = [...new Set(data.map(item => item[key]))];

  uniqueValues.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  fetchData().then(cars => {
    const selectMap = {
      year: 'year',
      make: 'make',
      model: 'model',
      fuelType: 'fuelType',
      mileage: 'mileage',
    };

    Object.keys(selectMap).forEach(selectId => {
      const selectElement = document.getElementById(selectId);
      if (selectElement) {
        populateSelect(selectElement, cars, selectMap[selectId]);
      }
    });
  });
});
