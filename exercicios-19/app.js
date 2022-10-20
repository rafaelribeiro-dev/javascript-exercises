/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
const correctAswers = ['C', 'A', 'B', 'C']

const getUserAnswers = () => {
  let userAnswers = []

  correctAswers.forEach((_, index) => {
    userAnswers.push(form[`inputQuestion${index + 1}`].value)
  })

  return userAnswers
}

const showFinalResult = () => {
  result.classList.remove('d-none')
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

const animateResult = score => {
  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }
    result.querySelector('span').textContent = `${counter++}%`
  }, 10)
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  let score = 0

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAswers[index]) {
      score += 25
    }
  })

  showFinalResult()

  animateResult(score)

  setTimeout(() => {
    result.classList.add('d-none')
    location.reload()
  }, 5000)
})
