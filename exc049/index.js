/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/

// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')

// setTimeout(() => {
//   console.log('Callback executado!')
// }, 2000)

// console.log('Linha 5')
// console.log('Linha 6')
// console.log('Linha 7')
// console.log('Linha 8')

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

function logGreeting(name) {
  console.log(`olá, ${name}`)
}

const logGreetings = callback => {
  callback('Dudu')
}

logGreetings(logGreeting)

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const numbers = [3, 4, 10, 20]
const lesserThanFive = numbers.filter(num => num < 5)

console.log(lesserThanFive)

/*
  04

  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209]
const totalPrice = prices.reduce((acc, price) => acc + price, 0)

console.log(`Preço total: ${totalPrice}`)

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
*/

let car = { color: 'amarelo' }
car['color'] = 'azul'

console.log(car)

/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

const funtionCrazy = (param1, param2, param3) => {
  if ([param1, param2, param3].includes(undefined)) {
    return `A função deve ser invocada com 3 argumentos`
  }

  return `A função foi invocada com 3 argumentos`
}

console.log(funtionCrazy('louco', 'crazy', '2003'))

/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0
}

const addBooksAndBox = booksQty => {
  const spaceRemainder = booksBox.spaces - booksBox.booksIn
  const boxThisFull = booksBox.booksIn === booksBox.spaces
  const fitsBooksInBox = spaceRemainder >= booksQty

  if (boxThisFull) {
    return `A caixa já está cheia`
  }

  if (fitsBooksInBox) {
    booksBox.booksIn += booksQty
  }
  else {
    const getMessageWarningPluralOfSingular = spaceRemainder === 1 ?
      `Só cabe mais ${spaceRemainder} livro` :
      `Só cabem mais ${spaceRemainder} livros`

    return getMessageWarningPluralOfSingular
  }

  const getMessagePluralOfSingular = booksBox.booksIn === 1 ?
    `Já há ${booksBox.booksIn} livro na caixa` :
    `Já há ${booksBox.booksIn} livros na caixa`

  return getMessagePluralOfSingular
}

console.log(addBooksAndBox(2))
console.log(addBooksAndBox(1))
console.log(addBooksAndBox(3))
console.log(addBooksAndBox(1))
console.log(addBooksAndBox(1))
console.log(addBooksAndBox(1))
