import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import ImageInfo from './ImageInfo.js';
import { search, searchRandom } from './utils/searcher.js';
import { initializeTheme, setTheme } from './viewController.js';
import { updateSearchList } from './searchList.js';

const randomButton = document.querySelector('.random_button');

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      onSearch: async (keyword) => {
        updateSearchList(keyword);
        this.setState(await search(keyword));
      },
    });

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
      data: {
        visible: false,
        image: null,
      },
    });

    randomButton.addEventListener('click', async () =>
      this.setState(await searchRandom())
    );

    initializeTheme();
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
