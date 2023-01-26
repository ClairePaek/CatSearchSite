import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import ImageInfo from './ImageInfo.js';
import { api } from './api.js';

const loading_view = document.querySelector('.loading_view');
const darkmode_input = document.querySelector('.darkmode_input');
//const searchList = document.querySelector(".SearchList");
const searchList = [];
const randomButton = document.querySelector('.random_button');

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      onSearch: async (keyword) => {
        loading_view.style.visibility = 'visible';
        const result = await api.fetchCats(keyword);
        this.setState(result.data);
        loading_view.style.visibility = 'hidden';
        addToSearchList(keyword);
      },
    });

    this.searchList = [];

    this.searchResult = new SearchResult({
      initialData: this.data,
      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });

    randomButton.addEventListener('click', () => this.fetchRandom());

    darkmode_input.addEventListener('click', (event) => {
      if (event.target.checked) {
        document.body.dataset.theme = 'dark-mode';
      } else {
        document.body.dataset.theme = 'light-mode';
      }
    });
  }

  async fetchRandom() {
    loading_view.style.visibility = 'visible';
    const result = await api.fetchRandom();
    this.setState(result.data);
    loading_view.style.visibility = 'hidden';
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}

function addToSearchList(keyword) {}
