import CreateDomElement from "./createDomElement.js";

export default class testimonialsPopup {
  constructor(data) {
    this.parent = document.querySelector('body');
    this.createDomElement = new CreateDomElement(data, this.parent);
  }

  getReview(e) {
    const review = e.composedPath().find((item) => item.className === 'testimonials__review');

    if (!review) return;

    this.createDomElement.addNewElement(1, 'end', false, 'popup');
    return review.cloneNode(true);
  }

  addReview(review) {
    review.style.position = 'fixed';
    document.querySelector('.popup__container').append(review);

    document.querySelector('.popup__backDrop').addEventListener("click", () => this.closePopup());
    document.querySelector('.popup__close').addEventListener("click", () => this.closePopup());
  }

  openPopup(e) {
    const review = this.getReview(e);
    this.addReview(review);
  }

  closePopup() {
    document.querySelector('.popup').remove();
  }

  setEvents() {
    if (document.documentElement.clientWidth <= 640) {
      const reviewsContainer = document.querySelector('.testimonials__reviewsContainer');
      
      reviewsContainer.addEventListener("click", (e) => this.openPopup(e));
    }
  }
};
