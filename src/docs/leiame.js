//Variável com o escopo de bloco
//let e const
if(true){ //Escopo do bloco
    let blocoEscopo = "Eu fico só nesse if";
    let numero = 10;
}

//Sout
console.log("Eu sou um print");
console.log(numero);

//Declaração de objeto
const meuObjeto = {name: "Gabriel"};//criamos o objeto
meuObjeto.nome = "Bora codificar!";//atribuição de valor
//Estamos modificando a propriedade de um objeto
//e não a constante em si

//Função nas antigas
function hello(nome){
    return "Olá," + nome + "!";
}

//Funções atuais Arrow Function
//Função com parametro
const hello = nome => "Olá," + nome + "!";
//Função sem paremetro
const hellow = () => "Olá," + nome + "!";

//Exemplo

//Desestruturando objeto
const pessoa = {
    firstName:'Gabriel',
    lastName:'Madalena',
    age:22
};
//declarar que constante firsName e age são igual
const {firstName, age} = pessoa;
console.log(firstName);//Gabriel
console.log(age);//22

//Criar um Array
const colors = ['vermelho','azul','verde','amarelo'];
//atribuir os valores quando for array usa[]
const[firstColar, secondColor] = colors;
console.log(firstColor); //vermelho
console.log(secondColor);//azul
//e se quisesse pegar a terceira cor?
const[ , ,thirdColor] = colors;
console.log(thirdColor);

//Desestruturando as Funções
function displayInfo({firstName,age}){
    //quando usamos `` conseguimos usar texto e variavel
    console.log(`${firstName} tem ${age} anos.`);
}
const pessoaInfo = {
    firstName:'Maria',
    lastName:'Fernandes',
    age:25
}
displayInfo(pessoaInfo);//Maria tem 25 anos

//Componente Funcional em React
function displayInfo({firstName,age}){
    return
    <div>
        Bem Vindo,{firstName}, você tem {age} anos.
    </div>
}

//Promisses - uma promessa a ser cumprimida
//Estados das Promisses:
//Pending (Pendente) é o estado inicial
//Fullfilled (Realizada) operação concluisa
//Rejected (Reajeitada) operação falhou
//async/await
async function fetchData(){
    try{
        let response = 
        await fetch('https://sc.senai.br/alunos/1');
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Houve um erro.",error)
    }
}
fetchData();

// Exercícios:
// 1. Declare duas variáveis:
// nome com valor "React" e versão com valor "1.0.0"
// Em seguida, exiba uma mensagem que diz
// 'Estudante ${nome} na versão ${versao}'

const nome = "React"
const versao = "1.0.0"

console.log(`Estudando ${nome} na versão ${versao}`);

// 2. Crie uma arrow function que receba dois numeros
// e retorne a soma deles

const numero1 = 2;
const numero2 = 5;

const soma = numero1 + numero2;

console.log(`${numero1} + ${numero2} = ${soma}`);