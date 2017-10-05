// getting collection of blocks
const blocks = document.querySelectorAll('.block');

// getting manipulates buttons
const initializeButton = document.getElementById('initialize');
const disableButton = document.getElementById('disable');



class ScrollBlocks {

  constructor(items) {
    this.items = items;
    this.blocksCoords = [];
    this.offsetBlock = 0;
    self = this;
    let start = window.pageYOffset;
    window.scrollTo(0,0);
    // fill an array of blocks coordinates
    if (items && items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (typeof items[i] === 'object' && items[i].classList.contains('block')) {
          this.blocksCoords[this.blocksCoords.length] = items[i].getBoundingClientRect().top;
        } else {
          console.log('it must be blocks');
          break;
        }
      }
    } else {
      console.log('no data');
    }
    window.scrollTo(0,start);
    self.blocksCoordsLength = this.blocksCoords.length
  }
  
  scrolling() {
    // getting scroll coordinates
    let scrollCoords = window.pageYOffset;

    if (self.blocksCoords[self.offsetBlock] < scrollCoords) {
      self.items[self.offsetBlock].children[0].classList.add('fix');
      self.items[self.offsetBlock].children[1].classList.add('padd');
      self.offsetBlock++;
    } else if (self.blocksCoords[self.offsetBlock] >= scrollCoords) {
      self.items[self.offsetBlock].children[0].classList.remove('fix');
      self.items[self.offsetBlock].children[1].classList.remove('padd');
      self.offsetBlock--;
    }
    if (self.offsetBlock < 0) {
      self.offsetBlock = 1;
    } else if (self.offsetBlock > self.blocksCoordsLength - 1) {
      self.offsetBlock = self.blocksCoordsLength - 1;
    }
    
    // going through an array blocksCoords and adding or remove fixed position to the title
    // for (let i = 0; i < self.blocksCoords.length; i++) {
    //   if (self.blocksCoords[i] < scrollCoords) {
    //     self.items[i].children[0].classList.add('fix');
    //     self.items[i].children[1].classList.add('padd');
    //   } else if (self.blocksCoords[i] > scrollCoords) {
    //     self.items[i].children[0].classList.remove('fix');
    //     self.items[i].children[1].classList.remove('padd');
    //   }
    // }
  }
    
  initialize() {
    let cord = window.pageYOffset;
    for (let i = 0; i < self.blocksCoords.length; i++) {
      if (self.blocksCoords[i] < cord) {
          self.items[i].children[0].classList.add('fix');
          self.items[i].children[1].classList.add('padd');
      } else {
        self.offsetBlock = i;
        break;
      }
    }
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
