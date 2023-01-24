'use strict';

export default class SearchInput {
  constructor({ onSearch }) {
    this.searchInput = document.querySelector('.SearchInput');
    this.searchInput?.focus();

    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        onSearch(e.target.value);
        e.target.blur();
      }
    });

    this.searchInput.addEventListener('focusin', () => {
      if (this.searchInput.value) {
        this.searchInput.value = '';
      }
    });
  }

  render() {}
}
