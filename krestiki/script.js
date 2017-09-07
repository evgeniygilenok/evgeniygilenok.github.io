'use strict';

$(function () {
    var player = 'X';
    var count = 0;
    var win = [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6']
    ];
    var X = [];
    var O = [];

    function winning(A) {
        for (var i = 0; i < win.length; i++) {
            count = 0;
            for (var j = 0; j < win[i].length; j++) {
                for (var k = 0; k < A.length; k++) {
                    if (win[i][j] == A[k]) {
                        count++;
                    }
                    if (count == 3) {
                        return true;
                    }
                }
            }
        }
    }
    $('#title').html(player + ' goes');
    function go() {
        $('.cell').on('click', function () {
            if (!$(this).attr('data-play') && (player == 'X')) {
                $(this).addClass('x').html('X').attr('data-play', 'x');
                player = 'O';
                X.push($(this).attr('data-cell'));
                $('#title').html(player + ' goes');
                if (winning(X)) {
                    $('.cell').off('click');
                    $('#title').html('Player X WIN').addClass('winner');
                }
            } else if (!$(this).attr('data-play') && (player == 'O')) {
                $(this).addClass('o').html('0').attr('data-play', '0');
                player = 'X';
                O.push($(this).attr('data-cell'));
                $('#title').html(player + ' goes');
                if (winning(O)) {
                    $('.cell').off('click');
                    $('#title').html('Player O WIN').addClass('winner');
                }
            }
            $('#newGame').on('click', function () {
                $('.cell').html('').removeClass('x o').removeAttr('data-play')
                $('#newGame').off('click');
                $('#title').html(player + ' goes').removeClass('winner');
                X = [];
                O = [];
                go();
            })
        })
    }
    go();
})