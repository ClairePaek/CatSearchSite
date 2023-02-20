const searchList = document.querySelector('.search_list');
const searchQueue = [];

function updateQueue(keyword) {
  if (searchQueue.length >= 5) {
    searchQueue.shift();
  }

  searchQueue.push(keyword);
}

function drawSearchList() {
  let html = '';

  console.log(searchQueue);
  searchQueue.forEach((x) => {
    html += getListItem(x);
  });

  searchList.innerHTML = html;
}

function getListItem(item) {
  return `<li>${item}</li>`;
}

function updateSearchList(keyword) {
  updateQueue(keyword);
  drawSearchList();
}

export { updateSearchList };
