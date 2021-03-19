const play = document.querySelector('#play')
const home = document.querySelector('#home')

home.addEventListener('click', () => {
  document.querySelector('.chooseChallenge').style.display = 'none'
  document.querySelector('.homescreen').style.display = 'block'
})
play.addEventListener('click', () => {
  document.querySelector('.chooseChallenge').style.display = 'block'
  document.querySelector('.homescreen').style.display = 'none'
})
