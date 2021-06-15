var unidades = {
    1: 'um',
    2: 'dois',
    3: 'três',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove'
}

var dezenasPrimeira = {
    1: 'dez',
    2: 'onze',
    3: 'doze',
    4: 'treze',
    5: 'catorze',
    6: 'quinze',
    7: 'dezesseis',
    8: 'dezessete',
    9: 'dezoito',
    10: 'dezenove'
}
var dezenasSegunda = {
    1: 'vinte',
    2: 'trinta',
    3: 'quarenta',
    4: 'cinquenta',
    5: 'sessenta',
    6: 'setenta',
    7: 'oitenta',
    8: 'noventa'
}
var centenas = {
    1: 'cem',
    2: 'duzentos',
    3: 'trezentos',
    4: 'quatrocentos',
    5: 'quinhentos',
    6: 'seiscentos',
    7: 'setecentos',
    8: 'oitocentos',
    9: 'novecentos'
}
var milhares = {
    1: 'mil'
}

var somaUnidades = 0;
var somaDezenasPrimeira = 0;
var somaDezenaSegundaUnidade = 0;
var somaCentenas = 0;
var somaCentenasUnidades = 0;
var somaCentenasDezenasPrimeira = 0;
var somaCentenasDezenasSegunda = 0;
var somaCentenasTotal = 0;
var somaFinal = 0;

for(var i = 1; i <= Object.keys(unidades).length; i++){
    var quantidadeUnidades = unidades[i];
    somaUnidades += quantidadeUnidades.length;
}

for(var j = 1; j <= Object.keys(dezenasPrimeira).length; j++){
    var quantidadeDezenasPrimeira = dezenasPrimeira[j];
    somaDezenasPrimeira += quantidadeDezenasPrimeira.length;
}

for(var k = 1; k <= Object.keys(dezenasSegunda).length; k++){
    var quantidadeDezenasSegunda = dezenasSegunda[k];
    for(var l = 1; l <= Object.keys(unidades).length; l++){
        var tamanhoQuantidadeDezenasSegunda = quantidadeDezenasSegunda.length;
        var quantidadeDezenasUnidade = unidades[l];
        var tamanhoQuantidadeDezenasUnidade = quantidadeDezenasUnidade.length;
        somaDezenaSegundaUnidade +=  tamanhoQuantidadeDezenasSegunda + tamanhoQuantidadeDezenasUnidade;
    }
}

for(var m = 1; m <= Object.keys(centenas).length; m++){
    var quantidadeCentenas = centenas[m];
    for(var n = 1; n <= 100; n++){
        var tamanhoQuantidadeCentenas = quantidadeCentenas.length;
        somaCentenas += tamanhoQuantidadeCentenas;
    }
}

somaDezenaSegundaUnidade += tamanhoQuantidadeDezenasSegunda;
somaCentenasDezenasSegunda += somaDezenaSegundaUnidade + somaCentenas + somaDezenasPrimeira + somaUnidades;
somaFinal = somaUnidades + somaDezenasPrimeira + somaDezenaSegundaUnidade + somaCentenasDezenasSegunda;


function main(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = somaFinal;
}

//Chamando a função principal
main();






















