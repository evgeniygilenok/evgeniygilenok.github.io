$(function () {
    var LM = 1;
    var levelNumber = 1;
    var livesCount = 3;
    var totalScore = 0;
    var fireCount = 3;
    var playerN = 'ЧелМедведоСвин';

    $('#rules-btn').on('click', function () {
        $('.rules').css('display', 'block');
    });

    $('#close-rules').on('click', function () {
        $('.rules').css('display', 'none');
    });

    $('.dashboard-btn').on('click', function () {
        $('.dashboard').css('display', 'block');
    });

    $('#close-dashboard').on('click', function () {
        $('.dashboard').css('display', 'none');
    });

    $('#start-btn').on('click', function () {
        $('.start-page').css('display', 'none');
        $('#start-level').css('display', 'block');
        // ifYouNotMoving();
    });

    $('#start-new-level').on('click', function () {
        $(document).off('keydown');
        $('#start-level').css('display', 'none');
        resetRestart();
        // ifYouNotMoving();
    });

    $('#restart-btn').on('click', function () {
        $(document).off('keydown');
        $('#restart').css('display', 'none');
        resetRestart();
        // ifYouNotMoving();

    });

    $('#new-game-btn').on('click', function () {
        $('#new-game').css('display', 'none');
        LM = 1;
        levelNumber = 1;
        livesCount = 3;
        resetRestart();
        // ifYouNotMoving();
    });

    function resetRestart() {
        fireCount = 3;
        outputHearts();
        $('#score').html('0');
        $('#level').html(levelNumber);
        $('#enemy').html('0');
        outputFires();
        $('.box').removeClass('tunnel hero gold stone enemy stone engryEnemy one-life fire web');
        $('.box').attr('data-hero-id', '').html('');
        startNewLevel(LM);
    };

    // Outpusts begin

    function outputHearts() {
        var livesStr = '';
        for (var i = 0; i < livesCount; i++) {
            livesStr += '<img src="img/heart.png" alt="">'
        };
        $('.health').html(livesStr);
    };

    function outputFires() {
        var firesStr = '';
        for (var i = 0; i < fireCount; i++) {
            firesStr += '<img src="img/fireCount.png" alt="">'
        };
        $('.fireCountOutput').html(firesStr);
    };

    // Outputs end

    function startNewLevel(levelM) {
        var levelGoldQty = 0;
        var qtyStone = 10 + 5 * levelM;
        var qtyGold = 10 + 5 * levelM;
        var stones = [];

        // stone gold position begin
        function stoneRand() {
            for (var i = 0; i < qtyStone; i++) {
                var x = Math.floor(Math.random() * 400);
                $('.box[data-block-id=' + x + ']').addClass('stone');
            }
        }
        stoneRand();

        var golds = [];

        function goldsRand() {
            for (var j = 0; j < qtyGold; j++) {
                var x = Math.floor(Math.random() * 400);
                if (($('.box[data-block-id=' + x + ']').hasClass('stone')) || (x == 189)) {
                    j--;
                    continue;
                }
                $('.box[data-block-id=' + x + ']').addClass('gold');
            }
            $('#score-max').html($('.gold').length);
        }
        goldsRand();

        // stone gold position end

        // hero logic begin
        $('.box[data-block-id="189"]').addClass('hero');
        // a - 97, w - 119, d - 100, s - 115

        function moveHero(xx) {
            $('.hero').addClass('tunnel');
            $('.hero').removeClass('hero');
            $('.box[data-block-id="' + xx + '"]').addClass('hero');
            $('.box[data-block-id="' + xx + '"]').attr('data-hero-id', heroPosId++);
        }

        function makeGold(gg) {
            if ($('.box[data-block-id="' + gg + '"]').hasClass('gold')) {
                goldCount++;
                totalScore++;
                $('#total-score').html(totalScore);
                $('#score').html(goldCount);
                $('.box[data-block-id="' + gg + '"]').removeClass('gold');
            }
            calculateGold();
        }

        function addHeart(hh) {
            if ($('.box[data-block-id="' + hh + '"]').hasClass('one-life')) {
                livesCount++;
                outputHearts();
                $('.box[data-block-id="' + hh + '"]').removeClass('one-life');
            }
        }

        var goldCount = 0;

        function calculateGold() {
            levelGoldQty = $('.gold').length;
            if (levelGoldQty === 0) {
                console.log('win!');
                LM++;
                levelNumber++;
                $('#lvl-number').html(levelNumber);
                $('#start-level').css('display', 'block');
                $(document).off('keydown');
                $(document).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        $('#start-level').css('display', 'none');
                        resetRestart();
                    }
                });
            }
        }

        var heroPosId = 0;
        var stackHero = false;

        $(document).on('keydown', function keyMovingHero(e) {
            e.preventDefault();
            // left a
            if (!stackHero) {
                if (e.keyCode == 37) {
                    var a = +($('.hero').attr('data-block-id'));
                    var left = $('.box[data-block-id="' + a + '"]').css('left');
                    a = a - 1;
                    if (!($('.box[data-block-id="' + a + '"]').hasClass('stone'))) {
                        left = parseInt(left);
                        if (left > 0) {
                            moveHero(a);
                        } else {
                            a = a + 1;
                            $('.box[data-block-id="' + a + '"]').addClass('hero');
                        }
                    }
                    makeGold(a);
                    addHeart(a);
                    // up w
                } else if (e.keyCode == 38) {
                    var a = +($('.hero').attr('data-block-id'));
                    var top = $('.box[data-block-id="' + a + '"]').css('top');
                    a = a - 20;
                    if (!($('.box[data-block-id="' + a + '"]').hasClass('stone'))) {
                        top = parseInt(top);
                        if (top > 0) {
                            moveHero(a);
                        } else {
                            a = a + 20;
                            $('.box[data-block-id="' + a + '"]').addClass('hero');
                        }
                    }
                    makeGold(a);
                    addHeart(a);
                    // right d
                } else if (e.keyCode == 39) {
                    var a = +($('.hero').attr('data-block-id'));
                    var left = $('.box[data-block-id="' + a + '"]').css('left');
                    a = a + 1;
                    if (!($('.box[data-block-id="' + a + '"]').hasClass('stone'))) {
                        left = parseInt(left);
                        if (left < 570) {
                            moveHero(a);
                        } else {
                            a = a - 1;
                            $('.box[data-block-id="' + a + '"]').addClass('hero');
                        }
                    }
                    makeGold(a);
                    addHeart(a);
                    // down s
                } else if (e.keyCode == 40) {
                    var a = +($('.hero').attr('data-block-id'));
                    var top = $('.box[data-block-id="' + a + '"]').css('top');
                    a = a + 20;
                    if (!($('.box[data-block-id="' + a + '"]').hasClass('stone'))) {
                        top = parseInt(top);
                        if (top < 570) {
                            moveHero(a);
                        } else {
                            a = a - 20;
                            $('.box[data-block-id="' + a + '"]').addClass('hero');
                        }
                    }
                    makeGold(a);
                    addHeart(a);
                }
            }

            if ($('.box[data-block-id="' + a + '"]').hasClass('web')) {
                stackHero = true;
                $('.box[data-block-id="' + a + '"]').addClass('stackedHero');
                setTimeout(function () {
                    $('.box[data-block-id="' + a + '"]').removeClass('web');
                    $('.box[data-block-id="' + a + '"]').removeClass('stackedHero');
                    stackHero = false;
                }, 1500)
            }

            var randomWeb = Math.floor(Math.random() * (Math.floor(15 + 20 / levelM)));
            if (randomWeb == 1) {
                setTimeout(function () {
                    if ($('.box[data-block-id="' + a + '"]').hasClass('tunnel')) {
                        $('.box[data-block-id="' + a + '"]').addClass('web');
                    }
                }, 800)
            }
        });

        // game features begin

        var fireOn = false;
        $(document).on('keydown', function (e) {
            if (!fireOn) {
                if (e.keyCode == 32) {
                    fireCount--;
                    // fireOn = true;
                    if (fireCount < 0) {
                        return
                    };
                    outputFires();
                    addingFire();
                };
            };

            function addingFire() {
                fireOn = true;
                var setIntervalFire = 3;
                $('.hero').addClass('fire').html(setIntervalFire);
                var posFire = +$('.fire').attr('data-block-id');

                var timerFire = setInterval(function () {
                    setIntervalFire--;
                    $('.box[data-block-id="' + posFire + '"]').html(setIntervalFire);
                    if (setIntervalFire == 0) {
                        $('.box[data-block-id="' + posFire + '"]').removeClass('fire');
                        $('.box[data-block-id="' + posFire + '"]').html('');
                        clearInterval(timerFire);
                        fireOn = false;
                    } else return;
                }, 1000);

                var webPositions = [1, -1, 20, -20];
                var removeWebPos = 0;
                for (var k = 0; k < webPositions.length; k++) {
                    removeWebPos = posFire + webPositions[k];
                    $('.box[data-block-id="' + removeWebPos + '"]').removeClass('web')
                }

            }
        });

        // game features end
        // hero logic end

        // enemy begin

        var enemies = [];
        var e = 0;
        var qtyEnemy = 0;
        var movingSpeed = 800;
        var oneMoreEnemy = 0;
        setTimeout(function () {
            oneMoreEnemy = setInterval(function () {
                qtyEnemy++;
                enemies[enemies.length] = makeEnemy();
                $('#enemy').html(enemies.length);
                if (qtyEnemy == (2 + 1 * levelM)) {
                    clearInterval(oneMoreEnemy)
                }
            }, 3500);
        }, 500);

        function makeEnemy() {
            var ePos = 189;
            var pos = ePos;
            $('.box[data-block-id="' + ePos + '"]').addClass('enemy');
            if ($('.box[data-block-id="' + ePos + '"]').hasClass('hero')) {
                console.log('you loose!');
                livesCount--;
                if (livesCount <= 0) {
                    outputHearts();
                    $('#new-game').css('display', 'block');
                    playerN = prompt('Enter your name:');
                    if ((playerN == null) || (playerN == '')) {
                        playerN = 'Синхрофазатрон';
                    }
                    addToDashboard();
                } else {
                    $('#restart').css('display', 'block');
                }
                $(document).off('keydown');
                $(document).on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        $('#restart').css('display', 'none');
                        resetRestart();
                    }
                });
                clearInterval(enemySpeedInterval);
                clearInterval(oneMoreEnemy);
                enemies = [];
            } else {
                var enemyTimer = 0;
                var enemySpeedInterval = setInterval(enemySpeed, movingSpeed);

                function enemySpeed() {
                    enemyTimer++;
                    if (enemyTimer < 10) {
                        pos = moveEnemy(pos);
                        clearInterval(enemySpeedInterval);
                        movingSpeed = 600;
                        enemySpeedInterval = setInterval(enemySpeed, movingSpeed);
                    } else {
                        pos = moveEngryEnemy(pos);
                        clearInterval(enemySpeedInterval);
                        movingSpeed = 300;
                        enemySpeedInterval = setInterval(enemySpeed, movingSpeed);
                    };

                    if (levelGoldQty === 0) {
                        clearInterval(enemySpeedInterval);
                        clearInterval(oneMoreEnemy);
                    } else if ($('.box[data-block-id="' + pos + '"]').hasClass('hero')) {
                        console.log('you loose!');
                        livesCount--;
                        if (livesCount <= 0) {
                            outputHearts();
                            $('#new-game').css('display', 'block');
                            playerN = prompt('Enter your name:');
                            if ((playerN == null) || (playerN == '')) {
                                playerN = 'Синхрофазатрон';
                            }
                            addToDashboard();
                        } else {
                            $('#restart').css('display', 'block');
                        }
                        $(document).off('keydown');
                        $(document).on('keydown', function (e) {
                            if (e.keyCode == 13) {
                                $('#restart').css('display', 'none');
                                resetRestart();
                            }
                        });
                        clearInterval(enemySpeedInterval);
                        clearInterval(oneMoreEnemy);
                        enemies = [];
                    };
                };
                return 'enemy' + e++;
            }
        }

        function moveEnemy(position) {
            position = parseInt(position);
            var pospos = [-1, 20, 1, -20];
            var prePos = position;
            var positions = [];
            for (var z = 0; z < pospos.length; z++) {
                prePos = position + pospos[z];
                if (($('.box[data-block-id="' + prePos + '"]').hasClass('tunnel')) &&
                    (!($('.box[data-block-id="' + prePos + '"]').hasClass('enemy'))) &&
                    (!($('.box[data-block-id="' + prePos + '"]').hasClass('fire')))
                ) {
                    positions[positions.length] = pospos[z];
                }
            }
            var side = Math.ceil(Math.random() * positions.length);
            side = positions[side - 1];
            var pos = +position + +side;
            var newPosBlock = $('.box[data-block-id="' + pos + '"]');
            if ((newPosBlock.hasClass('tunnel')) &&
                (!(newPosBlock.hasClass('stone'))) &&
                (!(newPosBlock.hasClass('enemy'))) &&
                (!(newPosBlock.hasClass('fire')))
            ) {
                newPosBlock.addClass('enemy');
                $('.box[data-block-id="' + position + '"]').removeClass('enemy');
                $('.box[data-block-id="' + position + '"]').removeClass('one-life');
                $('.box[data-block-id="' + position + '"]').html('');
                return pos;
            } else return position;
        }

        function moveEngryEnemy(position) {
            position = parseInt(position);
            var heroId = [];
            var pospos = [-1, 20, 1, -20];
            var prePos = position;
            var max = 0;
            for (var z = 0; z < 4; z++) {
                prePos = position + pospos[z];
                heroId[heroId.length] = parseInt($('.box[data-block-id="' + prePos + '"]').attr('data-hero-id'));
                if (heroId[z] > max) {
                    max = heroId[z];
                }
            }
            var side = pospos[heroId.indexOf(max)];
            var pos = +position + +side;
            var newPosBlock = $('.box[data-block-id="' + pos + '"]');
            if (!(newPosBlock.hasClass('enemy')) &&
                (!(newPosBlock.hasClass('engryEnemy'))) &&
                (!(newPosBlock.hasClass('fire')))
            ) {
                newPosBlock.addClass('engryEnemy');
                $('.box[data-block-id="' + position + '"]').removeClass('enemy');
                $('.box[data-block-id="' + position + '"]').removeClass('engryEnemy');
                $('.box[data-block-id="' + position + '"]').removeClass('one-life');
                var randomHeart = Math.floor(Math.random() * 80);
                if (randomHeart == 1) {
                    $('.box[data-block-id="' + position + '"]').addClass('one-life');
                }
                return pos;
            } else return position
        }
    };
    // enemy end

    // total score dashboard begin

    var names = [];
    var scores = [];
    var localObject = {
        "names": ["ЧелМедведоСвин", "ЧелМедведоСвин", "ЧелМедведоСвин", "ЧелМедведоСвин", "ЧелМедведоСвин",
            "ЧелМедведоСвин", "ЧелМедведоСвин", "ЧелМедведоСвин", "ЧелМедведоСвин", "ЧелМедведоСвин"
        ],
        "scores": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    if ((localStorage.getItem('dashboard') === null)) {
        localObject = JSON.stringify(localObject);
        localStorage.setItem('dashboard', localObject);
    }

    function addToDashboard() {
        localObject = localStorage.getItem('dashboard');
        localObject = JSON.parse(localObject);
        names = localObject.names;
        scores = localObject.scores;
        names[names.length] = playerN;
        scores[scores.length] = totalScore;
        var b = 0;

        function change() {
            for (var i = 0; i < scores.length; i++) {
                for (var j = i + 1; j < scores.length; j++) {
                    if (scores[i] < scores[j]) {
                        b = scores[i];
                        scores[i] = scores[j];
                        scores[j] = b;
                        b = names[i];
                        names[i] = names[j];
                        names[j] = b;
                    }
                }
            }
        }
        change();
        names = names.slice(0, 11);
        scores = scores.slice(0, 11);
        var scoreString = '';
        for (var i = 0; i < 10; i++) {
            scoreString += '<li><span class="playerName">' + names[i] + '</span>\
            <span class="playerScore">' + scores[i] + '</span></li>';
        }
        $('#best-list').html(scoreString);
        localObject = {
            names,
            scores
        };
        localObject = JSON.stringify(localObject);
        localStorage.setItem('dashboard', localObject);
        totalScore = 0;
    };

    // total score dashboard end

});