const sortSelect = document.getElementById('sort-select');
const sortingOptions = [
  'Publication date (descending)',
  'Price (ascending)',
  'Price (descending)',
  'Mileage (ascending)',
  'Mileage (descending)',
  'Performance (ascending)',
  'Performance (descending)',
];

function populateSortingOptions() {
  sortingOptions.forEach(optionText => {
    const option = document.createElement('option');
    option.value = optionText;
    option.textContent = optionText;
    sortSelect.appendChild(option);
  });
}

populateSortingOptions();
