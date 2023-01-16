var questaoAtual = 0;
var score = 0;
var questaoToda = questoes.length;


var container = document.getElementById('quizContainer');
var questaoEl = document.getElementById('questao');
var opc1 = document.getElementById('opc1');
var opc2 = document.getElementById('opc2');
var opc3 = document.getElementById('opc3');
var opc4 = document.getElementById('opc4');
var proximoBotao = document.getElementById('proximoBotao');
var resultadoCont = document.getElementById('resultado');

function carregarQuestao (questaoIndice) {
    var q = questoes[questaoIndice];
    questaoEl.textContent = (questaoIndice + 1) + '. ' + q.questao;
    opc1.textContent = q.opcao1;
    opc2.textContent = q.opcao2;
    opc3.textContent = q.opcao3;
    opc4.textContent = q.opcao4;
};
 function carregarProxQuestao () {
     var selecionarOpcao = document.querySelector('input[type=radio]:checked');
     if (!selecionarOpcao){
         alert('Por favor selecione uma resposta');
         return
     }
     var resposta = selecionarOpcao.value;
     if (questoes[questaoAtual].resposta == resposta){
         score ++ ;
     }
     selecionarOpcao.checked = false;
     questaoAtual++;
     if (questaoAtual == questaoToda - 1) {
        proximoBotao.textContent = 'Fim';
     }
     if (questaoAtual == questaoToda) {
         container.style.display = 'none';
         resultadoCont.style.display = '';
         resultadoCont.textContent = 'Pontuação: ' +score;
         return;
     }
     carregarQuestao(questaoAtual);
 }
 carregarQuestao(questaoAtual);