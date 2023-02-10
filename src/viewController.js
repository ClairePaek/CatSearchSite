const loading_view = document.querySelector('.loading_view');
const noSearchResult = document.querySelector('.no_search_result');
const mediaQuery = '(prefers-color-scheme: dark)';
const darkmode_input = document.querySelector('.darkmode_input');
const imageInfo = document.querySelector('.ImageInfo');
const contentWrapper = document.querySelector('.content-wrapper');

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

function openImageModal() {
  imageInfo.style.visibility = 'visible';
  contentWrapper.style.opacity = '1';
}

function closeImageModal() {
  contentWrapper.style.opacity = '0';
  setTimeout(() => (imageInfo.style.visibility = 'hidden'), 300);
}

function updateImageModal(innerHTML) {
  contentWrapper.innerHTML = innerHTML;
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
    event.preventDefault();
    closeImageModal();
  }

  if (event.target.className == 'ImageInfo') {
    event.preventDefault();
    closeImageModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeImageModal();
  }
});

export {
  showLoadingView,
  hideLoadingView,
  showNoSearchResult,
  hideNoSearchResult,
  initializeTheme,
  setTheme,
  openImageModal,
  closeImageModal,
  updateImageModal,
};
