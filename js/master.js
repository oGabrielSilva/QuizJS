//Start game

challange = [
  '15 perguntas de astronomia',
  '15 perguntas de geografia',
  '15 perguntas ',
  '15 perguntas',
  'especial'
]

const play = document.querySelector('#play')
const home = document.querySelector('#home')

home.addEventListener('click', () => {
  document.querySelector('.chooseChallenge').style.display = 'none'
  document.querySelector('#quizStart').style.display = 'none'
  document.querySelector('.homescreen').style.display = 'block'
})
