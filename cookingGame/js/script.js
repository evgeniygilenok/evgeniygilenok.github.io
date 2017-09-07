// defining variables
var myka = {
        name: 'Мука',
        count: 0,
        img: 'img/muka.png',
        price: 10,
    };
var colbasa = {
        name: 'Колбаса',
        count: 0,
        img: 'img/colbasa.png',
        price: 15,
    };
var maslo = {
        name: 'Масло',
        count: 0,
        img: 'img/maslo.png',
        price: 10,
    };
var ytka = {
        name: 'Утка',
        count: 0,
        img: 'img/ytka.png',
        price: 85,
    };
var sir = {
        name: 'Сыр',
        count: 0,
        img: 'img/sir.png',
        price: 35,
    };
var zelen = {
        name: 'Зелень',
        count: 0,
        img: 'img/zelen.png',
        price: 40,
    };
var priprava = {
        name: 'Приправа',
        count: 0,
        img: 'img/priprava.png',
        price: 35,
    };
var capusta = {
        name: 'Капуста',
        count: 0,
        img: 'img/kapusta.png',
        price: 55,
    };
var gorgonzolla = {
        name: 'Горгонзолла',
        count: 0,
        img: 'img/gorgonzolla.png',
        price: 60,
    };
var olivki = {
        name: 'Оливки',
        count: 0,
        img: 'img/olivki.png',
        price: 30,
    };

var products = [myka, colbasa, maslo, ytka, sir, 
    zelen, priprava, capusta, gorgonzolla, olivki];

var randomList = [
    products[0],products[1],products[2],products[9],
    products[0],products[1],products[2],products[9],
    products[0],products[1],products[2],products[9],
    products[0],products[1],products[2],products[9],
    products[0],products[1],products[2],products[3],
    products[4],products[5],products[6],products[7],
    products[4],products[5],products[6],products[7],
    products[4],products[5],products[6],products[8]
]
var b = 100, n = 0;
var bank = document.getElementById('bank');
bank.innerHTML = b;
var randImg = document.getElementsByClassName('rImg');
var randPrice = document.getElementsByClassName('rPrice');
var randA = [];
var bRefresh = document.getElementById('bRefresh');

var prodName = document.getElementsByClassName('prodName');
var prodCount = document.getElementsByClassName('prodCount');
var prodImg = document.getElementsByClassName('prodImg');
var prodPrice = document.getElementsByClassName('prodPrice');
var imgDish = document.getElementsByClassName('imgDish');

var blurBlocks = document.getElementsByClassName('blur');
var sellBtn = document.getElementsByClassName('sellBtn');

var lose = document.getElementById('lose');
var yes = document.getElementById('yes');
var no = document.getElementById('no');
var knewIt = document.getElementById('knewIt');
var help = document.getElementById('help');
var legend = document.getElementById('legend');
var closeHelp = document.getElementById('closeHelp');
var start = document.getElementById('start');
var preloader = document.getElementById('preloader');

// randomizing begin

var randIndex = 0;
function random() {
    randIndex = Math.floor(Math.random()*32);
    return randIndex;
};

function randimize() {
    for (var i = 0; i < randImg.length; i++) {
        n = random();
        randImg[i].innerHTML = '<img src="' + randomList[n].img + '">';
        randPrice[i].innerHTML = '$ '+randomList[n].price;
        randA[i] = randomList[n].name;
    }
};

randimize();
var timer = setInterval(randimize, 5000)
bRefresh.onclick = function() {
    randimize();
    bank.innerHTML -= 25;
    clearInterval(timer);
    timer = setInterval(randimize, 5000);
    checkLose();
};

// randomizing end
// output begin

for (var i = 0; i < 10; i++) {
    prodImg[i].innerHTML = '<img src="'+products[i].img+'">';
    prodName[i].innerHTML = products[i].name;
    prodPrice[i].innerHTML = products[i].price;
}

function calcCount() {
    for (var i = 0; i < prodCount.length; i++) {
        prodCount[i].innerHTML = products[i].count;
    }
};
calcCount();

// output end
// legend logic begin

function checkLose() {
    if (bank.innerHTML < 0) {
        lose.style.display = 'block';
    }
}

var positionYes = false;
yes.onmouseover = function() {
    if (!positionYes) {
        yes.style.left = 400 + 'px';
        no.style.left = 220 + 'px';
        positionYes = true;
    } else if (positionYes) {
        yes.style.left = 220 + 'px';
        no.style.left = 400 + 'px';
        positionYes = false;
    }
}

no.onclick = function() {
    knewIt.style.display = 'block';
}

help.onclick = function() {
    legend.style.display = 'block';
    help.style.display = 'none';
}

closeHelp.onclick = function() {
    legend.style.display = 'none';
    help.style.display = 'block';
}

setTimeout(function() {
    start.style.display = 'block';
}, 2000);

start.onclick = function() {
    preloader.style.display = 'none';
}
// legend logic end
// logic begin

function buy(x) {
    switch (randA[x]) {
        case 'Мука':
            bank.innerHTML -= products[0].price;
            products[0].count += 1;
            break;
        case 'Колбаса':
            bank.innerHTML -= products[1].price;
            products[1].count += 1;
            break;
        case 'Масло':
            bank.innerHTML -= products[2].price;
            products[2].count += 1;
            break;
        case 'Утка':
            bank.innerHTML -= products[3].price;
            products[3].count += 1;
            break;
        case 'Сыр':
            bank.innerHTML -= products[4].price;
            products[4].count += 1;
            break;
        case 'Зелень':
            bank.innerHTML -= products[5].price;
            products[5].count += 1;
            break;
        case 'Приправа':
            bank.innerHTML -= products[6].price;
            products[6].count += 1;
            break;
        case 'Капуста':
            bank.innerHTML -= products[7].price;
            products[7].count += 1;
            break;
        case 'Горгонзолла':
            bank.innerHTML -= products[8].price;
            products[8].count += 1;
            break;
        case 'Оливки':
            bank.innerHTML -= products[9].price;
            products[9].count += 1;
            break;
        default:
            break;
    }
    randImg[x].innerHTML = '';
    randPrice[x].innerHTML = '';
    calcCount();
    dish();
    checkLose();
};

function dish() {
    if ((products[0].count > 0) && 
        (products[1].count > 0) && 
        (products[2].count > 0)) {
            blurBlocks[0].style.display = 'none';
    } else {
        blurBlocks[0].style.display = 'block';
    }
    if ((products[0].count > 0) && 
        (products[2].count > 0) && 
        (products[4].count > 0) && 
        (products[6].count > 0)) {
            blurBlocks[1].style.display = 'none';
    } else {
        blurBlocks[1].style.display = 'block';
    }
    if ((products[0].count > 0) && 
        (products[2].count > 0) && 
        (products[3].count > 0) && 
        (products[4].count > 0) && 
        (products[5].count > 0)) {
            blurBlocks[2].style.display = 'none';
    } else {
        blurBlocks[2].style.display = 'block';
    }
    if ((products[0].count > 0) && 
        (products[1].count > 0) && 
        (products[2].count > 0) && 
        (products[4].count > 0) &&
        (products[5].count > 0) && 
        (products[7].count > 0) && 
        (products[8].count > 0) &&  
        (products[9].count > 0)) {
            blurBlocks[3].style.display = 'none';
    } else {
        blurBlocks[3].style.display = 'block';
    }
    if ((products[0].count > 0) && 
        (products[1].count > 0) && 
        (products[2].count > 0) && 
        (products[3].count > 0) && 
        (products[4].count > 0) && 
        (products[5].count > 0) && 
        (products[6].count > 0) && 
        (products[7].count > 0) && 
        (products[8].count > 0) && 
        (products[9].count > 0)) {
            blurBlocks[4].style.display = 'none';
    } else {
        blurBlocks[4].style.display = 'block';
    }
};

var cookingProcess = false;
function cook(meal) {
    if (!cookingProcess) {
        switch (meal) {
            case 'buter':
                products[0].count -= 1;
                products[1].count -= 1;
                products[2].count -= 1;
                calcCount();
                imgDish[0].classList.toggle('cookingButer');
                setTimeout(anableButer, 3000);
                break;
            case 'blin':
                products[0].count -= 1;
                products[2].count -= 1;
                products[4].count -= 1;
                products[6].count -= 1;
                calcCount();
                imgDish[1].classList.toggle('cookingBlin');
                setTimeout(anableBlin, 3000);
                break;
            case 'hotdog':
                products[0].count -= 1;
                products[2].count -= 1;
                products[3].count -= 1;
                products[4].count -= 1;
                products[5].count -= 1;
                calcCount();
                imgDish[2].classList.toggle('cookingHotdog');
                setTimeout(anableHotdog, 3000);
                break;
            case 'pizza':
                products[0].count -= 1;
                products[1].count -= 1;
                products[2].count -= 1;
                products[4].count -= 1;
                products[5].count -= 1;
                products[7].count -= 1;
                products[8].count -= 1;
                products[9].count -= 1;
                calcCount();
                imgDish[3].classList.toggle('cookingPizza');
                setTimeout(anablePizza, 3000);
                break;
            case 'ytka':
                products[0].count -= 1;
                products[1].count -= 1;
                products[2].count -= 1;
                products[3].count -= 1;
                products[4].count -= 1;
                products[5].count -= 1;
                products[6].count -= 1;
                products[7].count -= 1;
                products[8].count -= 1;
                products[9].count -= 1;
                calcCount();
                imgDish[4].classList.toggle('cookingYtka');
                setTimeout(anableYtka, 3000);
                break;
            default:
                break;
        }
        cookingProcess = true;
    }
}

function anableButer() {
    sellBtn[0].style.display = 'block';
    imgDish[0].classList.toggle('cookingButer');
    cookingProcess = false;
    dish();
};

function anableBlin() {
    sellBtn[1].style.display = 'block';
    imgDish[1].classList.toggle('cookingBlin');
    cookingProcess = false;
    dish();
};
function anableHotdog() {
    sellBtn[2].style.display = 'block';
    imgDish[2].classList.toggle('cookingHotdog');
    cookingProcess = false;
    dish();
};

function anablePizza() {
    sellBtn[3].style.display = 'block';
    imgDish[3].classList.toggle('cookingPizza');
    cookingProcess = false;
    dish();
};

function anableYtka() {
    sellBtn[4].style.display = 'block';
    imgDish[4].classList.toggle('cookingYtka');
    cookingProcess = false;
    dish();
};

function sell(gain) {
    dish();
    switch (gain) {
        case 50:
            sellBtn[0].style.display = 'none';
            break;
        case 120:
            sellBtn[1].style.display = 'none';
            break;
        case 220:
            sellBtn[2].style.display = 'none';
            break;
        case 290:
            sellBtn[3].style.display = 'none';
            break;
        case 450:
            sellBtn[4].style.display = 'none';
            break;
        default:
            break;
    }
    bank.innerHTML = +bank.innerHTML + +gain;
};
