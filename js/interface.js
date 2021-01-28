document.addEventListener('DOMContentLoaded', () => {
    let blocos = document.querySelectorAll('.bloco');

    blocos.forEach((bloco) => {
        bloco.addEventListener('click', receberClick);
    });
});

function receberClick(evento){
    let bloco = evento.target;
    let posicao = bloco.id;

    if(receberJogada(posicao)){
        viewButton(true);
    };
    atualizarBloco(posicao);
}

function atualizarBloco(posicao){
    let blocos = document.getElementById(posicao.toString());
    let simbolo = tabuleiro[posicao];
    
    if(simbolo != ''){
        blocos.innerHTML = `<div class='${simbolo}'></div>`
    }
}

function limparTela(){
    let blocos = document.querySelectorAll('.bloco');

    blocos.forEach((bloco) => {
        bloco.innerHTML = `<div></div>`;
        bloco.removeAttribute('style');
    });
}

function alertaErro(boolean){
    let alert = document.getElementById('alerta');
    if(boolean){
        document.getElementById('alerta').children[0].innerHTML = `Está posição já está ocupada. Por favor, jogue em outra casa.`;
        alert.setAttribute('class', 'card alerta');
        alert.style.display = 'inline-block';
    }else{
        alert.style.display = 'none';
    }
}

function alertaSucesso(boolean){
    let alert = document.getElementById('alerta');
    if(boolean){
        alert.style.display = 'inline-block';
        alert.setAttribute('class', 'card sucess');
        

    }
}

function viewButton(boolean){
    let btn_reset = document.getElementById('reset');
    btn_reset.style.display = (boolean == true) ? 'inline-block' : 'none';
}

function msgVelha(){
    document.getElementById('alerta').children[0].innerHTML = `Deu velha<p>Ninguém venceu essa partida</p>`;
}

function msgVencedor(vencedor){
    document.getElementById('alerta').children[0].innerHTML = `Fim de Jogo.<p>O jogador d${vencedor} ganhou</p>`;
}