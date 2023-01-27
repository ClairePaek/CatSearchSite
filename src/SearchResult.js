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
    this.searchResult.innerHTML = this?.data
      ?.map(
        (cat) =>
          `<div class="item">
        <img src=${cat.url} alt=${cat.name} id=${cat.id} />
      </div>`
      )
      .join('');

    this.searchResult.addEventListener('click', (event) => {
      this.onClick(this.data.find((cat) => cat.id == event.target.id));
    });
  }
}
