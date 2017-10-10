let input = document.getElementById('screenInput');
let resultOut = document.getElementById('result');
let buttons = document.querySelectorAll('.btn');
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');
let str = '';

for (let i = 0; i < buttons.length; i++) {
  let attr = buttons[i].getAttribute('data');
  buttons[i].onclick = function() {
    input.value += attr;
  }
}

equals.onclick = function() {
  str = input.value;
  input.value = '';
  resultOut.innerText = calc(str, 0);
}

clear.onclick = function() {
  input.value = '';
}

// function that calculate string without brackets;
function calculate(array) {
  let numbers = [];
  let start = 0;
  let end = 0;
  let result = 0;
  // make an array of numbers and signs
  for (let j = 0; j < array.length; j++) {
    if (array[j] === '+' || array[j] === '-' || array[j] === '*' || array[j] === '/') {
      numbers.push(+array.slice(start, j));
      numbers.push(array.slice(j, j+1));
      start = j+1;
    } else {
      end = j+1;
    }
  }
  numbers.push(+array.slice(start, end));
  let signQty = Math.floor((numbers.length - 1) / 2);
  
  // first calculate * and /
  for (let i = 0; i <= signQty; i++) {
    for (let k = 0; k < numbers.length; k++) {
      if (numbers[k] === '*') {
        result = numbers[k-1] * numbers[k+1];
        numbers.splice(k - 1, 3, result);
        break;
      } else if (numbers[k] === '/') {
        result = numbers[k-1] / numbers[k+1];
        numbers.splice(k - 1, 3, result);
        break;
      }
    }
  }
  // then calculate + and -
  signQty = Math.floor((numbers.length - 1) / 2)
  for (let i = 0; i <= signQty; i++) {
    for (let k = 0; k < numbers.length; k++) {
      if (numbers[k] === '+') {
        result = numbers[k-1] + numbers[k+1];
        numbers.splice(k - 1, 3, result);
        break;
      } else if (numbers[k] === '-') {
        result = numbers[k-1] - numbers[k+1];
        numbers.splice(k - 1, 3, result);
        break;
      }
    }
  }
  return result
}

// function finds brackets and run itself one more, until there is no brackets
function calc(arr, index) {
  let newArr= [];
  let res = 0;
  let start = 0;
  let end = 0;
  let arra = '';
  for (let i = index; i < arr.length; i++) {
    if (arr.indexOf('(') === -1) {
      res = calculate(arr); 
      break;
    }
    if (arr[i] === '(') {
      start = i;
      arra = arr.slice(start)
      calc(arra, 1);
    }
    if (arr[i] === ')') {
      newArr = [];
      end = i;
      newArr = newArr.concat(arr.slice(start+1, end)).join('');
      res = calculate(newArr);
      let buf = arr.slice(start, end+1);
      str = str.replace(buf, res);
      arr = str; 
    }
  }
  return res
}