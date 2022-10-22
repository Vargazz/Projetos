// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 && valor2){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  
  let calculo = (base * height) / 2

  return calculo
}

// Desafio 3
function splitSentence(palavra) {
  let palavraSepa = palavra.split(' ');

  return palavraSepa

}

// Desafio 4
function concatName(array) {
let palavra = array[array.length -1].concat(", ", array[0]);

return palavra

}

// Desafio 5
function footballPoints(wins, ties ) {

  let vit = wins * 3;
  let pontos = vit + ties;

  return pontos
  
}

// Desafio 6
function highestCount(numbers) {
  let vezesRep = -3;
  let contador = 0; 
  for(let index = 0; index < numbers.length; index +=1 ){
    if(numbers[index] > vezesRep){
      vezesRep = numbers[index];
      contador = 1
    }else if (vezesRep === numbers[index]){

      contador = contador + 1

    }
  
  }
  
  return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let wCat1 = Math.abs(mouse - cat1)
let wCat2 = Math.abs(mouse - cat2)

  if(wCat1 < wCat2){
    return 'cat1'

  } else if (wCat1 === wCat2){
    return 'os gatos trombam e o rato foge'
  }else{
    return 'cat2'
}
}

// Desafio 8
function fizzBuzz(array) {
  let arrayN = []
  for(let index = 0; index < array.length; index += 1){
    
    if(array[index] % 3 === 0 && array[index] % 5 === 0){
      arrayN.push('fizzBuzz');
    }
    else if(array[index] % 5 === 0){
      arrayN.push('buzz');
    }
    else if(array[index] % 3 === 0 ){
      arrayN.push('fizz');
    }else{
      arrayN.push('bug!');
    }
  
  }
  return arrayN
}

// Desafio 9
function encode(frase) {
  frase = frase.replace(/a/g, '1');
  frase = frase.replace(/e/g, '2');
  frase = frase.replace(/i/g, '3');
  frase = frase.replace(/o/g, '4');
  frase = frase.replace(/u/g, '5');
  return frase;
}
function decode(frase) {
frase = frase.replace(/1/g, 'a');
frase = frase.replace(/2/g, 'e');
frase = frase.replace(/3/g, 'i');
frase = frase.replace(/4/g, 'o');
frase = frase.replace(/5/g, 'u');
return frase;
}

// Desafio 10
function techList() {
  
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
