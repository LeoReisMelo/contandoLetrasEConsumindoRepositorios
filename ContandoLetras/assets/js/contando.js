var numeros = {
    1: 'um',
    2: 'dois',
    3: 'três',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove',
    10: 'dez',
    11: 'onze',
    12: 'doze',
    13: 'treze',
    14: 'catorze',
    15: 'quinze',
    16: 'dezesseis',
    17: 'dezessete',
    18: 'dezoito',
    19: 'dezenove',
    20: 'vinte',
    21: 'trinta',
    22: 'quarenta',
    23: 'cinquenta',
    24: 'sessenta',
    25: 'setenta',
    26: 'oitenta',
    27: 'noventa',
    28: 'cem',
    29: 'duzentos',
    30: 'trezentos',
    31: 'quatrocentos',
    32: 'quinhentos',
    33: 'seiscentos',
    34: 'setecentos',
    35: 'oitocentos',
    36: 'novecentos',
    37: 'mil',
}
var soma = 0;

function contaLetras(numero){
    
}

for(var i = 1; i <= Object.keys(numeros).length; i++){
    var quantidade = numeros[i];
    soma += quantidade.length;
}

console.log(soma);