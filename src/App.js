import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import ImageInfo from './ImageInfo.js';
import { api } from './api.js';

const loading = document.querySelector('.loading');
//const searchList = document.querySelector(".SearchList");
const searchList = [];

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    console.log('app is running!');
    this.$target = $target;
    this.randomButton = document.querySelector('.random_button');

    this.searchInput = new SearchInput({
      onSearch: async (keyword) => {
        loading.style.visibility = 'visible';
        const result = await api.fetchCats(keyword);
        this.setState(result.data);
        loading.style.visibility = 'hidden';
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

    this.randomButton.addEventListener('click', () => this.fetchRandom());
  }

  async fetchRandom() {
    loading.style.visibility = 'visible';
    const result = await api.fetchRandom();
    this.setState(result.data);
    loading.style.visibility = 'hidden';
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}

function addToSearchList(keyword) {}
