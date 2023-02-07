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

document.body.addEventListener('click', (event) => {
  if (event.target.nodeName == 'BUTTON' && event.target.className == 'close') {
    event.target.parentNode.parentNode.parentNode.style.display = 'none';
  }

  if (event.target.className == 'ImageInfo') {
    event.target.style.display = 'none';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const imageInfo = document.querySelector('.ImageInfo');

    if (imageInfo) {
      imageInfo.style.display = 'none';
    }
  }
});

export {
  showLoadingView,
  hideLoadingView,
  showNoSearchResult,
  hideNoSearchResult,
  initializeTheme,
  setTheme,
};
