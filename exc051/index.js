/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.responseText)
//     return
//   }
//   if (request.readyState === 4) {
//     console.log('Não foi possível obter os dados do pokémon')
//   }
// })

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu')
request.send()

/*
 02

 - Crie um objeto que contém suas informações pessoais;
 - As propriedades devem armazenar: 
   - Seu nome;
   - Seu sobrenome;
   - Seu sexo;
   - Sua idade (number);
   - Sua altura (number);
   - Seu peso (number);
   - Se você está andando (boolean iniciado em false);
   - Quantos metros você caminhou (number iniciado em 0).
*/

const I = {
  name: 'Carlos',
  surname: 'Eduardo',
  sex: 'male',
  age: 19,
  height: 1.75,
  weight: 70,
  walking: false,
  metersWalked: 0
}

/*
 03

 - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
   propriedade que armazena a idade;
 - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
 - Após criar o método, adicione 5 anos à idade do objeto.
*/

I.add1age = () => {
  I.age += 1
}

I.add1age()
I.add1age()
I.add1age()
I.add1age()
I.add1age()

/*
 04

 - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
   caminhados ao valor que foi recebido como parâmetro do método;
 - Este método também deve modificar o boolean do objeto que indica se a 
   pessoa representada pelo objeto está, ou não, andando;
 - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
   método 4x, com diferentes metragens passadas por parâmetro.
*/

I.someMetersWalked = meters => {
  I.metersWalked += meters
  I.walking = true
}

I.someMetersWalked(13)
I.someMetersWalked(10)
I.someMetersWalked(24)
I.someMetersWalked(17)

/*
 05

 - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
 
 'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
 peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
 metros.'
 
 - Antes de retornar a string, faça as seguintes validações:
   - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
     por "a";
   - Se a idade for 1, substitua "anos" por "ano", no singular;
   - Se a quantidade de metros caminhados for 1, substitua "metros" por 
     "metro", no singular.
*/

const getPluralOrSingular = (num, singular, plural) => {
  return num === 1 ? singular : plural
}

I.presentation = () => {
  let fullname = `${I.name} ${I.surname}`
  let agePluralOrSingular = getPluralOrSingular(I.age, 'ano', 'anos')
  let metersPluralOrSingular =
    getPluralOrSingular(I.metersWalked, 'metro', 'metros')

  let maleOfFemale = I.sex === 'male' ? 'o' : 'a'

  return `Oi. Eu sou ${maleOfFemale} ${fullname}, tenho ${I.age} 
  ${agePluralOrSingular}, ${I.height} metros de altura, peso ${I.weight} quilos 
  e, só hoje, eu já caminhei ${I.metersWalked} ${metersPluralOrSingular}.`
}


console.log(I.presentation())

/*
 06

 - Crie uma função que recebe um valor como argumento e retorna um boolean 
   indicando se o valor é truthy ou falsy;
 - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
   - Faça isso até passar todos os valores falsy;
 - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
   valor truthy;
   - Faça isso até que 7 valores truthy sejam passados.
*/

const isTruthy = value => Boolean(value)

const valuesFalsy = [false, 0, null, '', undefined, NaN]
const valuesTruthy = [1, 'edu', {}, [], () => { }, true, -1]

valuesFalsy.forEach(value => {
  console.log(isTruthy(value))
})
valuesTruthy.forEach(value => {
  console.log(isTruthy(value))
})

/*
 07

 - Crie uma função que recebe um parâmetro, que será o nome de um livro;
 - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
   livros;
 - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
   outras 3 propriedades que armazenam:
     - A quantidade de páginas (number);
     - Autor;
     - Editora.
 - Faça a função retornar o objeto que representa o livro passado por 
   parâmetro;
 - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
   os livros.

 Dica: propriedades de objetos podem ser declaradas como strings.
*/


const hasTheBook = book => {
  const books = {
    'The Wither': {
      qtyPages: 318,
      author: 'Andrzej Sapkowski',
      puplisher: 'WMF Martins Fontes'
    },
    'Quem Pensa Enriquece': {
      qtyPages: 292,
      author: 'Napoleon Hill  ',
      puplisher: 'CITADEL EDITORA'
    },
    'Harry Potter': {
      qtyPages: 223,
      author: 'J. K. Rowling',
      puplisher: 'Editora Rocco'
    }
  }

  if(book === undefined){
    return books
  }

  return books[book]
}

console.log(hasTheBook())