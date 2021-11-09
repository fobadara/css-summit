export default class View {
  createElement = (tag, className) => {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement = (selector) => {
    const element = document.querySelector(selector);
    return element;
  }

  display(speakers, more) {
    // console.log(typeof(speakers))
    // const speakers = tutors
    // console.log(speakers)
    this.app = this.getElement('.speakers');
    this.fragment = document.createDocumentFragment();
    this.divContainer = this.createElement('div', 'div-container');
    this.headDiv = this.createElement('div', 'head-div');
    this.heading5 = this.createElement('h5', 'featured-speakers');
    this.heading5.textContent = 'Featured Speakers';
    // this.heading5.style.cssText = ''
    this.dash = this.createElement('div', 'dash');
    this.dash.style.cssText = 'background-color: #ec5242; height: 1.5px; width: 1em; margin: auto; margin-bottom: 2em';
    this.headDiv.append(this.heading5, this.dash);
    this.divContainer.append(this.headDiv);
    this.divContainer.style.cssText = 'padding-bottom: 2em;';
    this.fragment.append(this.divContainer);

    let i = 0;
    if (speakers) {
      Object.keys(speakers).forEach((speaker) => {
        this.pattern = this.createElement('img', 'pattern');
        this.pattern.src = speakers[speaker].bg;
        this.pattern.setAttribute('width', 40);
        this.pattern.setAttribute('height', 40);
        this.pattern.style.cssText = 'position: relative; float: left; bottom: 2.2em; width: 2.5em;';
        this.image = this.createElement('img', 'pic');
        this.image.src = speakers[speaker].image;
        this.image.setAttribute('width', 90);
        this.image.setAttribute('height', 90);
        this.image.style.cssText = 'position: relative; right:1.5em';
        this.heading6 = this.createElement('h6', 'name');
        this.heading6.textContent = speakers[speaker].name;
        this.job = this.createElement('p', 'job');
        this.job.classList.add('orange');
        this.job.textContent = speakers[speaker].job;
        this.expertise = this.createElement('p', 'expertise');
        this.wrapper = this.createElement('div', 'wrapper');
        this.wrapper.style.cssText = 'display: flex; padding: 0.5em';
        if (i >= 3) {
          this.wrapper.classList.add('removeable');
          if (this.wrapper.classList.contains('removeable')) {
            this.wrapper.style.cssText = 'display: none;';
          }
        }
        i += 1;
        this.subWrapper1 = this.createElement('div');
        this.subWrapper1.style.cssText = 'width: 20%; display: flex; position: relative; align-items: center ';
        this.subWrapper2 = this.createElement('div');
        this.subWrapper2.style.cssText = 'width: 65%; display: flex; flex-direction: column; margin-left: 2.3em; padding-left: 1.5em;';

        this.subWrapper1.append(this.pattern, this.image);
        this.subWrapper2.append(this.heading6, this.job, this.expertise);
        this.wrapper.append(this.subWrapper1, this.subWrapper2);
        this.divContainer.append(this.wrapper);
      });

      this.seeMoreWrap = this.createElement('div', 'more-wrap');
      this.seeMore = this.createElement('button', 'see-more');
      this.seeMore.setAttribute('type', 'button');
      this.seeMore.textContent = 'See More';
      this.seeMore.style.cssText = 'width: 92%; border: solid thin rgba(173, 163, 163, 0.5); margin: 2em 10px;';
      this.seeMoreWrap.append(this.seeMore);
      this.fragment.append(this.seeMoreWrap);

      this.app.append(this.fragment);
      this.event = this.seeMoreWrap.addEventListener('click', more);
    }
  }
}
