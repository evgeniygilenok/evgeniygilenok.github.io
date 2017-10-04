// getting collection of blocks
const blocks = document.querySelectorAll('.block');

// getting manipulates buttons
const initializeButton = document.getElementById('initialize');
const disableButton = document.getElementById('disable');

class ScrollBlocks {

  constructor(items) {
    this.items = items;
    this.blocksCoords = [];
    self = this;

    // fill an array of blocks coordinates
    for (let i = 0; i < items.length; i++) {
        this.blocksCoords[this.blocksCoords.length] = items[i].getBoundingClientRect().top;
    }
  }
  
  scrolling() {

    // getting scroll coordinates
    let scrollCoords = window.pageYOffset;

    // going through an array blocksCoords and adding or remove fixed position to the title
    for (let i = 0; i < self.blocksCoords.length; i++) {
      if (self.blocksCoords[i] < scrollCoords) {
          self.items[i].children[0].classList.add('fix');
          self.items[i].children[1].classList.add('padd');
      } else if (self.blocksCoords[i] > scrollCoords) {
        self.items[i].children[0].classList.remove('fix');
        self.items[i].children[1].classList.remove('padd');
      }
    }
  }

  initialize() {
    window.addEventListener("scroll", this.scrolling)
  }

  disable() {
    window.removeEventListener("scroll", this.scrolling);

    // clear all additional classes from blocks
    let delBlocks = document.querySelectorAll('.block');
    for (let i = 0; i < delBlocks.length; i++) {
        delBlocks[i].childNodes[1].classList.remove('fix');
        delBlocks[i].childNodes[3].classList.remove('padd');
    }
  }

}

let obj = new ScrollBlocks(blocks);

initializeButton.onclick = () => {
  obj.initialize();
  initializeButton.classList.add('active');
  disableButton.classList.remove('active');
}
disableButton.onclick = () => {
  obj.disable();
  initializeButton.classList.remove('active');
  disableButton.classList.add('active');
}