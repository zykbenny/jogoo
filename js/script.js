import { perguntas } from "./perguntas.js";
import { aleatorio, nome } from "./aleatorio.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoCreditos = document.querySelector(".creditos-btn");
const telaCreditos = document.querySelector(".tela-creditos");
const botaoVoltarInicio = document.querySelector(".voltar-inicio-btn");

let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";

botaoIniciar.addEventListener("click", iniciaJogo);
botaoJogarNovamente.addEventListener("click", reiniciaJogo);
botaoCreditos.addEventListener("click", mostraCreditos);
botaoVoltarInicio.addEventListener("click", reiniciaJogo);

function iniciaJogo() {
  reiniciaJogo();
  faseDaPartida = "jogando";

  telaInicial.style.display = "none";
  caixaPerguntas.style.display = "block";
  caixaAlternativas.style.display = "flex";
  mostraPergunta();
}

function reiniciaJogo() {
  atual = 0;
  historiaFinal = "";
  faseDaPartida = "inicio";

  caixaPerguntas.textContent = "";
  caixaAlternativas.replaceChildren();
  tituloResultado.textContent = "";
  textoResultado.textContent = "";

  telaInicial.style.display = "block";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "none";
  telaCreditos.style.display = "none";
  botaoCreditos.style.display = "none";
  botaoJogarNovamente.style.display = "inline-block";
}

function mostraPergunta() {
  const perguntaAtual = perguntas[atual];

  if (perguntaAtual.final === "vitoria") {
    mostraVitoria(perguntaAtual.enunciado);
    return;
  }

  caixaPerguntas.textContent = perguntaAtual.enunciado.replace(/você/gi, nome);
  caixaAlternativas.replaceChildren();

  for (const alternativa of perguntaAtual.alternativas) {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.disabled = alternativa.disponivel === false;
    botao.addEventListener("click", function () {
      respostaSelecionada(alternativa);
    });
    caixaAlternativas.appendChild(botao);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  if (faseDaPartida !== "jogando") {
    return;
  }

  if (opcaoSelecionada.disponivel === false) {
    return;
  }

  if (opcaoSelecionada.tipo === "gameover") {
    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacao + " ";
    mostraGameOver(opcaoSelecionada.mensagem);
    return;
  }

  const destino = opcaoSelecionada.proxima;

  if (!Number.isInteger(destino) || perguntas[destino] === undefined) {
    console.error("Destino inválido:", destino);
    return;
  }

  const origem = perguntas[atual];
  const chegada = perguntas[destino];
  const mudouDeCaminho = origem.caminho !== chegada.caminho;

  if (atual !== 0 && mudouDeCaminho && opcaoSelecionada.tipo !== "trocar") {
    console.error("Mudança de caminho sem o tipo trocar.");
    return;
  }

  if (opcaoSelecionada.tipo === "trocar" && !mudouDeCaminho) {
    console.error("A troca deve levar a outro caminho.");
    return;
  }

  const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacao + " ";
  atual = destino;
  mostraPergunta();
}

function mostraGameOver(mensagem) {
  faseDaPartida = "gameover";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.replaceChildren();
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "block";
  tituloResultado.textContent = "GAME OVER";
  textoResultado.textContent = mensagem + "\n\nSuas escolhas nesta tentativa:\n" + historiaFinal;
  botaoJogarNovamente.textContent = "Recomeçar do início";
  botaoJogarNovamente.style.display = "inline-block";
  botaoCreditos.style.display = "none";
  telaCreditos.style.display = "none";
}

function mostraVitoria(mensagem) {
  if (faseDaPartida !== "jogando" || perguntas[atual].final !== "vitoria") {
    return;
  }

  faseDaPartida = "vitoria";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.replaceChildren();
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "block";
  tituloResultado.textContent = "THE END";
  textoResultado.textContent = mensagem + "\n\nSeu percurso nesta partida:\n" + historiaFinal;
  botaoJogarNovamente.style.display = "none";
  botaoCreditos.style.display = "inline-block";
  telaCreditos.style.display = "none";
}

function mostraCreditos() {
  if (faseDaPartida !== "vitoria") {
    return;
  }

  faseDaPartida = "creditos";
  telaInicial.style.display = "none";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "none";
  telaCreditos.style.display = "block";
}

reiniciaJogo();
