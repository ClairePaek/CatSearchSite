import { api } from './api.js';
export default class SearchResult {
  searchResult = null;
  data = null;
  onClick = null;

  constructor({ initialData, onClick }) {
    this.searchResult = document.querySelector('.SearchResult');
    this.data = initialData;
    this.onClick = onClick;
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this?.data?.map((cat) => {
      const item = document.createElement('div');
      item.style.background = `url("${cat.url}")`;
      item.style.backgroundSize = '300px 100%';
      item.style.backgroundRepeat = 'no-repeat';
      item.setAttribute('alt', cat.name);
      item.setAttribute('id', cat.id);
      item.setAttribute('class', 'item');

      const describer = document.createElement('span');
      describer.setAttribute('class', 'describer');
      describer.innerText = cat.name;
      item.appendChild(describer);

      item.addEventListener('mouseover', (event) => {
        describer.style.visibility = 'visible';
      });

      item.addEventListener('mouseout', (event) => {
        describer.style.visibility = 'hidden';
      });

      this.searchResult.appendChild(item);
    });

    this.searchResult.addEventListener('click', async (event) => {
      const info = await api.getCatById(event.target.parentNode.id);
      this.onClick(info.data);
    });
  }
}
