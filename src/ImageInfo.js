import { openImageModal, updateImageModal } from './viewController.js';

export default class ImageInfo {
  constructor({ data }) {
    this.data = data;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  async render() {
    if (this.data.visible && this.data.image) {
      const { name, url, temperament, origin } = this.data.image;

      updateImageModal(`
        <div class="title">
          <span>${name}</span>
          <button class="close">x</button>
        </div>
        <img src="${url}" alt="${name}"/>
        <div class="description">
          <div>성격: ${temperament}</div>
          <div>태생: ${origin}</div>
        </div>`);
      openImageModal();
    }
  }
}
