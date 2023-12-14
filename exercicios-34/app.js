/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/

const invertedString = string => string.split('').reverse().join('')

//Split -> cria um array separando cada caracter como um item do array
//Reverse -> inverte a ordem desse array
//Join -> junta os itens do array formando a string

const reversedString = string =>
  string.split('').reduce((acc, letter) => letter + acc, '')

console.log(invertedString('Rafael'))

console.log(reversedString('Rafael'))

/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33]
let foundNumber = false

numbers.forEach(number => {
  if (number === 15) {
    foundNumber = true
  }
})

const foundANumber = numbers.includes(15)

console.log(foundANumber)

/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/

// - Escreva uma função que receba dois números e retorne a soma.

// - Escreva uma função que receba dois números e retorne o maior deles.
//   - Se forem números iguais, retorne esse numero

// - Escreva uma função que receba um argumento e retorne o tipo desse argumento

// - Escreva uma função que receba dois números e retorne true caso o primeiro seja múltiplo do segundo

// - Escreva uma função que receba uma string e retorne o número de caracteres encontrados.
// Exemplo:
// quantasLetras("ola mundo") deve retornar 9

// - Escreva uma função que receba uma string e o número de palavras encontradas.
// Exemplo:
// quantasPalavras("ola mundo") deve retornar 2

// - Escreva uma função que receba uma string e retorne a maior palavra encontrada.
// Exemplo:
// maiorPalavra("ola mundo") deve retornar "mundo"
// - se houver duas ou mais maiores palavras encontradas, retorne a primeira
// Exemplo
// maiorPalavra("ola mundo lindo") deve retornar "mundo"

// - Escreva uma função que receba uma string e retorne a maior palavra encontrada.
// - Se houver duas ou mais maiores palavras encontradas, retorne a ultima
// Exemplo
// maiorPalavra("ola mundo lindo") deve retornar "lindo"

// - Escreva uma função que receba duas strings e retorne um boolean se for encontrado na primeira string a segunda.
// encontrouString("ola mundo", "ola") deve retornar true
// encontrouString("ola mundo", "lindo") deve retornar false

// - Escreva uma função que receba duas strings e retorne quantas vezes o segundo argumento foi encontrado no primeiro.
// quantasVezesEncontrou("ola mundo ola lindo", "ola") deve retornar 2
