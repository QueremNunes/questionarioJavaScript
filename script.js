const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação de backend",
            "Uma linguagem de marcação para criar páginas web",
            "Uma linguagem de programação de frontend e backend",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a sintaxe básica para comentar uma linha em JavaScript?",
        respostas: [
            "// Comentário",
            "/* Comentário */",
            "<!-- Comentário -->",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação estrita de igualdade",
            "Atribuição de valor",
            "Comparação solta de igualdade",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "var x = 10;",
            "let x = 10;",
            "const x = 10;",
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é utilizado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "append()",
            "push()",
            "addToEnd()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
        respostas: [
            "toInt()",
            "parseInt()",
            "convertToNumber()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "removeLast()",
            "pop()",
            "deleteLast()",
        ],
        correta: 1
    },
    {
        pergunta: "Como você chama uma função chamada 'myFunction' em JavaScript?",
        respostas: [
            "invoke myFunction()",
            "call myFunction()",
            "myFunction()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
        respostas: [
            "for (i <= 5; i++)",
            "for (i = 0; i < 5; i++)",
            "for (i = 5; i++)",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para concatenar arrays em JavaScript?",
        respostas: [
            "concat()",
            "join()",
            "merge()",
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetção
for(const item of perguntas) {
    const quizitem = template.content.cloneNode(true) //clonando o template
    quizitem.querySelector('h3').textContent = item.pergunta //modificando o h3
    
    for(let resposta of item.respostas) {
        const dt = quizitem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta //true ou false
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        } 

        quizitem.querySelector('dl').appendChild(dt)
    }

    quizitem.querySelector('dl dt').remove() //deletar elemento



    quiz.appendChild(quizitem) // coloca a pergunta na tela
}