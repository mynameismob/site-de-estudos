import { searchIndex } from './data.js';

const input = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions');

function clearSuggestions() {
  suggestionsList.innerHTML = '';
}

function showSuggestions(results) {
  clearSuggestions();
  results.slice(0, 10).forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    li.setAttribute('role', 'option');
    li.addEventListener('mousedown', () => {
      // Navigate to the section anchor when clicked
      location.hash = item.id;
      clearSuggestions();
    });
    suggestionsList.appendChild(li);
  });
}

input.addEventListener('input', () => {
  const query = input.value.toLowerCase().trim();
  if (!query) {
    clearSuggestions();
    return;
  }
  const results = searchIndex.filter(item => item.title.toLowerCase().includes(query) || item.text.includes(query));
  showSuggestions(results);
});

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
  if (!suggestionsList.contains(e.target) && e.target !== input) {
    clearSuggestions();
  }
});
