// Teste: código fonte disponível em http://github.com/Spagiari/jstest
// Avalie as funções abaixo e responda as perguntas.

var a;
function teste1() {
    var a = 3;
}
teste1();
console.log(a === 3);
/* ***********************************
 * (1) Por que o valor falso é escrito no console?
 * ***********************************/

function teste2() {
    var arr = [1, 2, 3];
    for (var i = 0; i < arr.length; i++) {
        setTimeout(function() {
            console.log(`Index: ${i};\nElement: ${arr[i]}`);
        }, 0);
    }
  }
  teste2();
/* ***********************************
 * (2) Qual o valor escrito no console e por quê?
 * ***********************************/

function inc(i) {
    i++;
}
function teste3() {
    var i = 0;
    inc(i);
    console.log(i);
}
teste3();
/* ***********************************
 * (3) Quais os valores escritos no console e por quê?
 * ***********************************/

function teste4() {
    var value = 10;
    return ( function () {
        return value;
    })
}
func = teste4();
console.log(func());
/* ***********************************
 * (4) Qual o valor escrito no console e por quê?
 * ***********************************/

// A função shuffle recebe como entrada uma array e a embaralha.
function shuffle(a) {
    // atribui a variável n a quantidades de elementos da array a.
    n = a.length;
    // Percorre a array a da posição 0 até a ultima posição.
    for (var i = 0; i < n; i++) {
        //Sorteia uma posição aleatória entre i e n-1 e atribui para a variável swap
        swap = i + Math.floor(Math.random() * (n - i - 1));
        // Troca os valores das posições i e swap da array a. 
        var aux = a[i];
        a[i] = a[swap];
        a[swap] = aux;
    }
}
var array = [5, 3, 1, 4, 2];
if (shuffle(array)) console.log(array);
/* *********************************
 * (5) Existem potenciais armadilhas (pitfalls) na função acima? 
 * Se SIM qual é ou quais são? Comente a resposta.
 * *********************************/
