import View from './view.js';
import Model from './model.js';

class Control {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.display(this.model.data, this.displayMore);
  }

  displayMore = (event) => {
    const removeable = document.querySelectorAll('.removeable');
    Array.from(removeable).forEach((element) => {
      if (event.target.classList.contains('display-less')) {
        event.target.innerText = 'See More';
        element.classList.remove('appear');
        element.style.display = 'none';
      } else {
        event.target.innerText = 'See Less';
        element.classList.add('appear');
        element.style.display = 'flex';
      }
    });
    Array.from(removeable).forEach(() => {
      event.target.classList.toggle('display-less');
    });
  }
}

const control = new Control(new Model(), new View());
control.init();
