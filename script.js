
var $h1 = document.querySelector('h1');//pegando o h1
var $button = document.querySelector('#calcular');//pegando o input button 'calcular'

$h1.innerText = '0';//h1 vai ter valor inicial de 0, vai printar 0 des de o inicio

var numAleatorio = Math.floor(Math.random()* 101);//Vai gerar um numero qualquer aleatorio entre 0 e 100

function updateCounter(){
    var c = +$h1.innerText;//Serve para transformar o valor de texto em numero, pode usar tambem o pasreInt() 



    if (c < numAleatorio) {//Vai somar mais um no valor de c ate chegar no numAleatorio
        console.log(numAleatorio)
        $h1.innerText = c + 1;//Vai somar mais um no valor de c 
        setTimeout(updateCounter, 100);//executa a funçao depois de um certo delay 
    } else {
        $h1.innerText = numAleatorio+'%';//vai escrever no espaço do h1 o numAleatorio
        $button.removeEventListener('click', updateCounter);//Serve para que voce depois nao possa clicar denovo no botao
        $button.value = 'Jogar novamente'//Vai escrever no lugar do 'calcular' 'jogar novamente'
        $button.addEventListener('click', function(){ //adicionar funçao de click no butao denovo
            location.reload();//Vai recarregar a pagina quando clicar
        });
    }

}

$button.addEventListener('click', function() {//Dizendo q a function so vai fazer alguma coisa depois que eu clicar no $button
   updateCounter();//Estou chamando a function
})

