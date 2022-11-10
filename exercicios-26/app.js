/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const present = new Date('June 01 2022 05:20:00')

const formatDateUnit = unit => (String(unit).length === 1 ? `0${unit}` : unit)

const formatDate = date => {
  const day = formatDateUnit(date.getDate())
  const month = formatDateUnit(date.getMonth() + 1)
  const year = formatDateUnit(date.getFullYear())
  return `${day}/${month}/${year}`
}

console.log(formatDate(present))
/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const weekDayName = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

const monthName = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const formatDateInfo = date => {
  const hours = formatDateUnit(date.getHours())
  const minutes = formatDateUnit(date.getMinutes())
  const day = formatDateUnit(date.getDate())
  const weekDay = weekDayName[date.getDay()]
  const year = date.getFullYear()
  const month = monthName[date.getMonth()]
  return `${formatDateUnit(hours)}:${formatDateUnit(
    minutes
  )} - ${weekDay}, ${day} de ${month} de ${year}`
}

console.log(formatDateInfo(present))
/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }

const { id, isVerified } = user

console.log(id, isVerified)

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const { name: nameA } = robotA
const { name: nameB } = robotB

console.log(nameA, nameB)
/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const object1 = { a, b, c }

console.log(object1)
/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => {
  console.log(value)
}

const updateSomething = ({ target, property, willChange }) => {
  willChange === 'valor indesejado'
    ? (willChange = 'valor desejado')
    : willChange

  useDataSomewhereElse({
    target,
    property,
    willChange
  })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const formatTimeUnit = time => (String(time).length === 1 ? `0${time}` : time)

const getClockHTML = (hours, minutes, seconds) => `
  <span> ${formatTimeUnit(hours)} </span> :
  <span> ${formatTimeUnit(minutes)}</span> :
  <span> ${formatTimeUnit(seconds)}</span>
`

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)
}

setInterval(updateClock, 1000)
