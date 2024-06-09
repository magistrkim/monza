import { sortingOptions } from '../data/sortSelectOptions';
import sortAscIcon from '../assets/icons/sortAsc.svg';
import sortDescIcon from '../assets/icons/sortDesc.svg';

const sortSelect = document.getElementById('sort-select');

const ascendingImage = `url(${sortAscIcon})`;
const descendingImage = `url(${sortDescIcon})`;

const populateSortingOptions = () => {
  sortingOptions.forEach(optionText => {
    const option = document.createElement('option');
    option.value = optionText;
    option.textContent = optionText;
    sortSelect.appendChild(option);
  });
};

const updateSortIcon = () => {
  const selectedOption = sortSelect.value.toLowerCase();
  if (selectedOption.includes('ascending')) {
    sortSelect.style.backgroundImage = ascendingImage;
  } else if (selectedOption.includes('descending')) {
    sortSelect.style.backgroundImage = descendingImage;
  }
};

sortSelect.addEventListener('change', updateSortIcon);

populateSortingOptions();
updateSortIcon();
