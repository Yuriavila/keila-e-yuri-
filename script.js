const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você pensa em comida, o que te da mais vontade de comer?",
        alternativas: [
            {
                texto: "Salgados!",
                afirmacao: ""
            },
            {
                texto: "Doces!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "No cinema qual comida não pode faltar?",
        alternativas: [
            {
                texto: "Pipocas e salgadinhos!",
                afirmacao: ""
            },
            {
                texto: "Chocolates e guloseimas!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é a sua opção favorita de pizza?",
        alternativas: [
            {
                texto: "Sabor 4 queijos!",
                afirmacao: ""
            },
            {
                texto: "Sabor sorvete!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "O que você mais gosta de comer em um dia frio?",
        alternativas: [
            {
                texto: "Sopa de carne!",
                afirmacao: ""
            },
            {
                texto: "Chocolate quente!",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Que tipo de comida você prefere?",
        alternativas: [
            {
                texto: "Macarrão a bolonhesa!",
                afirmacao: ""
            },
            {
                texto: "Bolo de chocolate!",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Se você escolheu 3 ou mais das opções de comidas doces ou salgadas, significa que você é um amante dessa comida!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
