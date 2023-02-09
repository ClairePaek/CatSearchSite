import { api } from '../api.js';
import {
  showLoadingView,
  hideLoadingView,
  showNoSearchResult,
  hideNoSearchResult,
} from '../viewController.js';

async function search(keyword) {
  showLoadingView();
  const result = await searchCore(keyword);
  hideLoadingView();

  return result?.data;
}

async function searchCore(keyword) {
  const result = await api.getCatsByKeyword(keyword);

  if (!result?.data?.length) {
    showNoSearchResult();
  } else {
    hideNoSearchResult();
  }

  return result;
}

async function searchRandom() {
  showLoadingView();
  const result = await api.getRandomCats();
  hideLoadingView();

  return result?.data;
}

export { search, searchRandom };
