let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogador = 0;
let gameOver = false;

let simbolo = ['o', 'x'];

let statusVencidas = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

function receberJogada(posicao) {

    if (gameOver) {
        return;
    }

    if (tabuleiro[posicao] == '') {
        tabuleiro[posicao] = simbolo[jogador];

        // gameOver = jogoFinalizado();

        if (!gameOver) {
            altenarJogador();
            alertaErro(false);
        }

    } else {
        alertaErro(true);
    }

    gameOver = jogoFinalizado();
    return gameOver;
}

function altenarJogador() {
    jogador = (jogador == 0) ? 1 : 0;
}

function jogoFinalizado() {

    for (let i = 0; i < statusVencidas.length; i++) {
        let seq = statusVencidas[i];

        let pos0 = seq[0];
        let pos1 = seq[1];
        let pos2 = seq[2];

        let bloco0 = tabuleiro[pos0];
        let bloco1 = tabuleiro[pos1];
        let bloco2 = tabuleiro[pos2];

        if (bloco0 == bloco1 &&
            bloco0 == bloco2 &&
            bloco0 != '') {

            document.getElementById(pos0.toString()).style.background = 'tomato'
            document.getElementById(pos1.toString()).style.background = 'tomato'
            document.getElementById(pos2.toString()).style.background = 'tomato'

            let vencedor = (bloco0 == 'x') ? 'a estrela' : 'o planeta';
            document.getElementById('alerta').children[0].innerHTML = `Fim de Jogo. O jogador d${vencedor} ganhou`;

            alertaSucesso(true);
            return true;
        }
    }

    return false;
}

function resetGame() {
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    jogador = 0;
    gameOver = false;
    document.getElementById('alerta').removeAttribute('style');

    limparTela();
    viewButton(false);
}