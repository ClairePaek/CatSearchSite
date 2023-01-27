const loading_view = document.querySelector('.loading_view');
const noSearchResult = document.querySelector('.no_search_result');
const mediaQuery = '(prefers-color-scheme: dark)';
const darkmode_input = document.querySelector('.darkmode_input');

function showLoadingView() {
  loading_view.style.visibility = 'visible';
}

function hideLoadingView() {
  loading_view.style.visibility = 'hidden';
}

function showNoSearchResult() {
  noSearchResult.style.visibility = 'visible';
}

function hideNoSearchResult() {
  noSearchResult.style.visibility = 'hidden';
}

function initializeTheme() {
  setTheme(window.matchMedia(mediaQuery));
  window.matchMedia(mediaQuery).addEventListener('change', setTheme);
  darkmode_input.addEventListener('click', onChangeMode);
}

function setTheme(mediaQueryList) {
  document.body.dataset.theme = mediaQueryList.matches
    ? 'dark-mode'
    : 'light-mode';
}

function onChangeMode(event) {
  if (event.target.checked) {
    document.body.dataset.theme = 'dark-mode';
  } else {
    document.body.dataset.theme = 'light-mode';
  }
}

export {
  showLoadingView,
  hideLoadingView,
  showNoSearchResult,
  hideNoSearchResult,
  initializeTheme,
  setTheme,
};
