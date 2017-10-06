let range = document.getElementById('input-range');
let domino = document.getElementById('one-domino');
let leftRotateBtn = document.getElementById('turn-left');
let rightRotateBtn = document.getElementById('turn-right');
let newBtn = document.getElementById('newBtn');
let deg = 0;

range.onchange = () => {
  domino.style.transform = 'scale('+(range.value*0.01)+','+(range.value*0.01)+')rotate('+deg+'deg)';
}

leftRotateBtn.onclick = () => {
  deg -= 90;
  domino.style.transform = 'scale('+(range.value*0.01)+','+(range.value*0.01)+')rotate('+deg+'deg)';
}

rightRotateBtn.onclick = () => {
  deg += 90;
  domino.style.transform = 'scale('+(range.value*0.01)+','+(range.value*0.01)+')rotate('+deg+'deg)';
}

newBtn.onclick = () => {
  let randIndex = Math.floor(Math.random()*6 + 1);
  randDominoOne = document.getElementById(randIndex).outerHTML;
  randIndex = Math.floor(Math.random()*6 + 1);
  randDominoTwo = document.getElementById(randIndex).outerHTML;
  domino.innerHTML = randDominoOne + randDominoTwo;
}